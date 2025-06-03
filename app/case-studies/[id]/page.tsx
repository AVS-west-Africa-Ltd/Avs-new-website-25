"use client";

import {
    designSteps,
    overviewData,
    projectDetails,
    sanityPageConfig,
    userFlows,
} from "@/constants/constants";
import { motion } from "framer-motion";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { ActionCard } from "@/app/sections/TestimonialsSection/ActionCard";
import { CaseStudyCard } from "@/app/sections/TestimonialsSection/CaseStudyCard";
import { CaseDetails, OurProjects } from "@/constants/data";
import CaseStudiesShowcase from "@/app/sections/TestimonialsSection/CaseStudiesShowcase";
import { useQuery } from "@tanstack/react-query";
import client, { urlFor } from "@/sanity";

function CaseId({ params }: { params: Promise<{ id: any }> }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [details, setDetails] = useState<CaseDetails>({});
    const { id } = use(params);

    const {
        data: pageData2,
        isLoading: isLoading2,
        isError,
    } = useQuery({
        queryKey: ['page', sanityPageConfig.caseStudyPageId, id],
        queryFn: () => fetchPageData(sanityPageConfig.caseStudyPageId),
        staleTime: 60 * 1000, // 1 minute
    });
      
    const fetchPageData = async (pageId: string) => {
        const query = `*[_type == "page" && _id == "${pageId}"][0]`;
        const result = await client.fetch(query);
        return result;
    };

    useEffect(() => {
        if (pageData2) {
            const rateoProject = pageData2?.contentBlocks?.find(
                (project: any) => project._type === "caseStudy" && project._key === id
            );
            
            if (rateoProject) {
                setDetails(rateoProject);
            } else {
                // Fallback to local data if Sanity data not found
                const localProject = OurProjects.find(project => project.id === Number(id));
                if (localProject) setDetails(localProject);
            }
        }
    }, [pageData2, id]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
            },
        },
    };

    // Loading and error states
    if (isLoading2) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-2xl font-semibold text-gray-700">Loading case study...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-2xl font-semibold text-red-600">
                    Failed to load case study data
                </p>
            </div>
        );
    }

    if (!details || Object.keys(details).length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-2xl font-semibold text-gray-700">
                    Case study not found
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white w-full pt-20 md:pt-16">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col w-full items-center py-8 md:py-[55px] px-4"
            >
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col max-w-md w-full items-center justify-center gap-2 md:gap-4"
                >
                    <h1 className="font-['Raleway',Helvetica] font-bold text-[#0f0f0f] text-4xl md:text-[36px] text-center tracking-[0] leading-normal">
                        {details?.appName}
                    </h1>
                    <motion.p
                        variants={itemVariants}
                        className="font-['Raleway',Helvetica] font-normal text-[#0f0f0fa6] text-xl md:text-2xl tracking-[0] leading-normal"
                    >
                        {details?.shortDescription}
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Project Details */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-2 md:flex items-center justify-between gap-4 md:gap-12 container mt-4 md:mt-8 w-full mx-auto px-4 md:px-24"
            >
                {details?.projectDetails?.map((detail, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col space-y-2 md:space-y-6 text-center"
                    >
                        <h3 className="font-raleway font-semibold text-[#000000] text-lg md:text-2xl">
                            {detail.title}
                        </h3>

                        {detail.isTools ? (
                            <motion.div
                                className="flex justify-center items-center gap-2 md:gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Image
                                    className="w-5 h-5 md:w-[26px] md:h-[26px]"
                                    alt="Figma logo"
                                    src="/assets/figma-logo.svg"
                                    width={26}
                                    height={26}
                                    priority
                                />
                                <Image
                                    className="w-5 h-5 md:w-[24px] md:h-[24px]"
                                    alt="Photoshop original"
                                    src="/assets/photoshop-original-logo.svg"
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </motion.div>
                        ) : (
                            <p className="font-raleway font-normal text-[#000000cc] text-sm md:text-base">
                                {detail.content}
                            </p>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Main Image */}
            {details?.appImage && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    className="w-full rounded-xl md:rounded-3xl lg:rounded-[32px] overflow-hidden mt-8 px-4 md:px-0 container mx-auto"
                >
                    <div
                        className="w-full aspect-[4/3] md:aspect-[928/545] mx-auto rounded-lg md:rounded-[26px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${urlFor(details?.appImage)})` }}
                    />
                </motion.div>
            )}

            {/* Overview Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.3,
                        },
                    },
                }}
                className="flex flex-col md:flex-row w-full gap-6 md:gap-10 py-24 mx-auto container px-4 md:px-6"
            >
                {/* Title with separate animation */}
                <motion.h2
                    variants={{
                        hidden: { x: -20, opacity: 0 },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: { duration: 0.6, ease: "easeOut" },
                        },
                    }}
                    className="text-3xl md:text-4xl font-semibold text-[#0f0f0f] font-['Raleway',Helvetica] md:whitespace-nowrap"
                >
                    {details?.overviewData?.title} 
                </motion.h2>

                {/* Content grid with staggered animations */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex-1">
                    {details?.overviewData?.data?.map((item, index) => (
                        <motion.p
                            key={index}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "backOut",
                                        delay: index * 0.1,
                                    },
                                },
                            }}
                            className="text-base md:text-md font-normal text-[#333333] font-['Raleway',Helvetica]"
                        >
                            {item.text}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>

            {/* Mockup Section */}
            <section className="relative w-full h-[884px] md:h-[884px] sm:h-auto bg-[#e4e5e6] rounded-[30px] overflow-hidden py-8 container mx-auto px-4 md:px-6">
        {/* ✅ Desktop only (exclude iPads including iPad Pro) */}
<div className="hidden xl:block absolute w-[573px] h-[1245px] top-[72px] left-[628px] rounded-[52.95px] overflow-hidden bg-gradient-to-b from-white to-white">
  {/* <Image
    src={details?.mockups?.[0] || '/assets/default-mockup.svg'}
    alt="Rateo"
    width={573}
    height={1245}
    priority
  /> */}
  {details?.mockups?.[0] && <Image
                        src={urlFor(details?.mockups?.[0])?.url() ||details?.mockups?.[0]|| '/assets/default-mockup.svg'}
                        alt="Rateo"
                        width={573}
                        height={1245}
                        priority
                    />}
</div>

{/* ✅ iPads only (show up to 1279px, including iPad Pro) */}
<div className="hidden md:block xl:hidden absolute w-[200px] h-[310px] top-[72px] left-[90%] translate-x-[-70%] rounded-[52.95px] overflow-hidden bg-gradient-to-b from-white to-white p-2 mt-40">
 


{details?.mockups?.[0] && <Image
                        src={urlFor(details?.mockups?.[0])?.url() || '/assets/default-mockup.svg'}
                        alt="Rateo"
                        width={200}
                        height={310}
                        priority
                    />}
</div>



<div className="ipad-pro-mockup">
  {/* <Image
    src={details?.mockups?.[0] || '/assets/default-mockup.svg'}
    alt="Rateo"
    width={320}
    height={600}
    priority
  /> */}

{details?.mockups?.[0] && <Image
                        src={urlFor(details?.mockups?.[0])?.url()||details?.mockups?.[0] || '/assets/default-mockup.svg'}
                        alt="Rateo"
                        width={320}
                        height={600}
                        priority
                    />}

  <style jsx>{`
    .ipad-pro-mockup {
      display: none;
    }

    @media only screen 
      and (min-width: 1024px) 
      and (max-width: 1366px) 
      and (orientation: portrait) {
      .ipad-pro-mockup {
        display: block;
        position: absolute;
        width: 320px;
        height: 600px;
        top: 72px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 52.95px;
        overflow: hidden;
        background: linear-gradient(to bottom, white, white);
        padding: 0.5rem;
      }
    }
  `}</style>
</div>




                <div className="absolute w-[353px] h-[766px] top-[72px] left-[50%] translate-x-[-50%] sm:left-[140px] sm:translate-x-0 rounded-[27.94px] bg-[#fff5e1] overflow-hidden">
                    {details?.mockups?.[1] && <Image src={urlFor(details?.mockups?.[1])?.url() || details?.mockups?.[1]|| '/assets/default-mockup.svg'} alt="Rateo" width={353} height={766} priority />}
                </div>
            </section>



          


            {/* Our process section */}
            <motion.section
                className="w-full container mx-auto my-12 md:my-32 px-4 sm:px-6" // Added mobile padding
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.3 }, // Reduced stagger for better mobile flow
                    },
                }}
            >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 },
                        },
                    }}
                    className="font-raleway font-semibold text-[#1d1d1d] text-2xl md:text-3xl lg:text-4xl leading-tight text-left mb-6 md:mb-12 px-2 sm:px-0"
                >
                    {details?.ourProcess?.title}
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-12 px-2 sm:px-0">
                    {" "}
                    {/* Added mobile padding */}
                    {details?.ourProcess?.designSteps.map((step) => (
                        <motion.div
                            key={step.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 }, // Changed from scale to y for better mobile feel
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, ease: "easeOut" },
                                },
                            }}
                            className={`w-full h-[110px] sm:h-[130px] md:h-[150px] lg:h-[181px] bg-[${details?.ourProcess?.cardBgColor}] rounded-xl md:rounded-[28px] overflow-hidden border-none`}// Adjusted heights
                            style={{ backgroundColor: details?.ourProcess?.cardBgColor || '#FFF5E1' }}
                        >
                            <div className="flex items-center justify-center h-full p-3 sm:p-4">
                                {" "}
                                {/* Adjusted padding */}
                                <div className="font-raleway font-medium text-[#171921] text-lg sm:text-xl md:text-xl text-center max-w-[120px]">
                                    {step.title}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Ideation & Workshops */}
            {details?.workShops && <div className="mt-16 w-full container mx-auto px-4 md:px-0 mb-16">
                <h2 className="font-['Raleway',Helvetica] font-semibold text-[#0f0f0f] text-2xl md:text-3xl mb-6 md:mb-8">
                    {details?.workShops?.title}
                </h2>
                <p className="font-['Raleway',Helvetica] font-normal text-dark text-sm md:text-md max-w-full md:max-w-[1052px]">
                    {details?.workShops?.description}
                </p>

                {/* Workshop Image Container */}
                <div className="w-full h-auto md:h-[664px] mt-6 md:mt-8 bg-[#205352] rounded-2xl md:rounded-[45px] overflow-hidden flex flex-col items-center p-4 md:p-0">
                    <div className="relative w-full md:w-[1225px] h-auto md:h-[697px] flex flex-col md:block">
                        <Image
                            className="w-full md:w-[984px] h-auto md:h-[621px] object-cover rounded-2xl md:rounded-[45px]"
                            alt="Image"
                            src={urlFor(details?.workShops?.imageSrc).url() ?? ""}
                            width={1225}
                            height={697}
                            priority
                        />
                        <Image
                            className="w-full md:w-[686px] h-auto md:h-[433px] md:absolute md:top-[264px] md:left-[539px]"
                            alt="Image"
                            src={(details?.workShops?.imageAlt && urlFor(details?.workShops?.imageAlt).url()) ?? ""}
                            width={686}
                            height={433}
                        />
                    </div>
                </div>
            </div>}

            {/* Userflows */}
            {details?.userFlows && <section className="w-full bg-black py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold text-white font-['Raleway',Helvetica] mb-8 pl-8">
                        {details?.userFlows?.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        {details?.userFlows?.userFlowData?.map((flow, index) => (
                            <div key={index} className="flex flex-col">
                                <h3 className="text-xl font-normal text-white font-['Raleway',Helvetica] mb-4 pl-8">
                                    {flow.title}
                                </h3>
                                <Card className="bg-transparent border-0">
                                    <CardContent className="p-4">
                                        <Image
                                            className="w-full h-auto object-cover "
                                            alt={flow.imageAlt}
                                            src={flow.imageSrc && urlFor(flow.imageSrc).url()}
                                            priority
                                            width={400}
                                            height={400}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>}

            {/* Wireframes */}
            {details?.wireframes && <motion.section
                className="w-full bg-[#ffffff] py-12 md:py-20 px-4 md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                    >
                        <h2 className="font-raleway font-semibold text-[#0f0f0f] text-2xl sm:text-3xl mb-6 md:mb-8">
                            {details?.wireframes?.title}
                        </h2>
                        <p className="font-raleway font-normal text-dark text-base sm:text-md max-w-[1052px]">
                            {details?.wireframes?.description}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                            },
                        }}
                        className="w-full mt-6 md:mt-8"
                    >
                        <div className="bg-[#205352] rounded-xl md:rounded-[45px] p-4 md:p-16">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
                                {details?.wireframes?.imageUrls?.map(
                                    (img, index) => (
                                        <motion.div
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.95 },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: { duration: 0.5, ease: "easeOut" },
                                                },
                                            }}
                                            className=" rounded-lg md:rounded-xl overflow-hidden"
                                        >
                                            <Image
                                                className="w-full h-auto object-contain p-2 md:p-4"
                                                alt={`Wireframe ${index + 1}`}
                                                src={urlFor(img).url() ?? ""}
                                                priority
                                                width={400}
                                                height={400}
                                            />
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>}

            {/* Fidelity Design */}
            {details?.fidelityDesigns && <motion.section
                className="w-full bg-[#000000] py-12 md:py-20 px-4 md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                    >
                        <h2 className="font-raleway font-semibold text-[#ffffff] text-2xl sm:text-3xl mb-6 md:mb-8">
                            {details?.fidelityDesigns?.title}
                        </h2>
                        <p className="font-raleway font-normal text-[#ffffff] text-base sm:text-md max-w-[1052px]">
                            {details?.fidelityDesigns?.description}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                            },
                        }}
                        className="w-full mt-6 md:mt-8"
                    >
                        <div className=" p-4">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
                                {details?.fidelityDesigns.imageUrls.map(
                                    (img, index) => (
                                        <motion.div
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.95 },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: { duration: 0.5, ease: "easeOut" },
                                                },
                                            }}
                                            className=" rounded-lg md:rounded-xl overflow-hidden"
                                        >
                                            <Image
                                                className="w-full h-auto object-contain p-2 md:p-4"
                                                alt={`Wireframe ${index + 1}`}
                                                src={urlFor(img).url() ?? ""}
                                                priority
                                                width={400}
                                                height={400}
                                            />
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>}






            {/* Web Design */}
            {/* {details?.webDesigns && <motion.section
                className="w-full pt-12 md:pt-20 px-4 md:px-6 pb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{ backgroundColor: details?.webDesigns?.bgColor || '#205352' }}
            >
                <div className="container mx-auto flex flex-col h-full">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        }}
                        className="flex-grow-0"
                    >
                        <h2 className="font-raleway font-semibold text-[#ffffff] text-2xl sm:text-3xl mb-6 md:mb-8">
                            {details?.webDesigns?.title}
                        </h2>
                        <p className="font-raleway font-normal text-[#ffffff] text-base sm:text-md max-w-[1052px]">
                            {details?.webDesigns?.description}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                            },
                        }}
                        className="w-full mt-6 md:mt-8 flex-grow"
                    >
                        <div className="h-full">
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-2 h-full">
                                {details?.webDesigns?.imageUrls?.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.95 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, ease: "easeOut" },
                                            },
                                        }}
                                        className="h-full rounded-lg md:rounded-xl overflow-hidden"
                                    >
                                        <img
                                            className="w-full h-full object-cover  p-2 md:p-4"
                                            alt={`Design ${index + 1}`}
                                            src={`/assets/${img}`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>} */}

            {details?.webDesigns && <motion.section
                className="w-full pt-12 md:pt-20 px-4 md:px-6 pb-0 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{ backgroundColor: details?.webDesigns?.bgColor || '#205352' }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="flex-grow-0 container mx-auto"
                >
                    <h2 className="font-raleway font-semibold text-[#ffffff] text-2xl sm:text-3xl mb-6 md:mb-8">
                        {details?.webDesigns?.title}
                    </h2>
                    <p className="font-raleway font-normal text-[#ffffff] text-base sm:text-md max-w-[1052px]">
                        {details?.webDesigns?.description}
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row justify-center gap-2 mt-8"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                    }}
                >
                    {/* <motion.img
                        src={details?.webDesigns?.imageUrls[0]}
                        alt="Web Design 1"
                        className="w-full md:w-1/2 rounded-lg"
                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
                    />
                    <motion.img
                        src={details?.webDesigns?.imageUrls[1]}
                        alt="Web Design 2"
                        className="w-full md:w-1/2 rounded-lg"
                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
                    /> */}

                    {details?.webDesigns?.imageUrls?.map((img, index) => (
                        <Image
                            key={index}
                            className="w-full md:w-1/2 rounded-lg"
                            alt={`Design ${index + 1}`}
                            src={urlFor(img).url() ?? ""}
                            priority
                            width={400}
                            height={400}
                        />
                    ))}
                </motion.div>
            </motion.section>}


                 {/* Left Column - Content */}

            {/* <section
                ref={ref}
                className="container overflow-hidden px-4 sm:px-6 lg:px-8 py-24 mx-auto"
            >
                <div className="flex flex-col lg:flex-row gap-8">
                */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:w-1/3 w-full flex items-end md:w-1/2"
                    >
                        <div className="lg:mt-12 w-full">
                            <div className="max-w-full">
                                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-stone-950">
                                    Check out our other case studies
                                </h2>
                            
                            </div>
                            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-start mt-8 text-xl sm:text-2xl font-medium tracking-tight leading-7">
                                <ActionCard
                                    variant="light"
                                    imageSrc="/assets/b1.svg"
                                    backgroundImage="/assets/b1.svg"
                                    text="View all case studies"
                                    url="case-studies"
                                />
                                <ActionCard
                                    variant="dark"
                                    imageSrc="/assets/b2.svg"
                                    backgroundImage="/assets/b2.svg"
                                    text="Get in touch with us"
                                    url="contact-us"
                                    multiline
                                />
                            </div>
                        </div>
                    </motion.div> */}

                    {/* Right Column - Case Studies */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        className="lg:w-2/3 lg:pl-5 md:w-full w-full flex items-end"
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-4 xl:gap-6 items-stretch">
                            <CaseStudyCard
                                imageSrc="/assets/homepage/otfootbal.jpg.png"
                                title="On The Go"
                                subtitle="Get free wifi, On the Go!"
                                className="bottom-3"
                            />
                          
                            <CaseStudyCard
                                imageSrc='/assets/homepage/otfootbal.jpg.png'
                                title="One Touch Football"
                                subtitle="Digital home for grassroots football"
                                className="bottom-3"
                            />
                        </div>
                    </motion.div>  */}


{/* 
                </div>
            </section> */}

            {/* <CaseStudiesShowcase/> */}
        </div>
    );

}


export default CaseId;
