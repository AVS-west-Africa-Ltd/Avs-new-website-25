"use client"

import { designSteps, overviewData, projectDetails, userFlows } from '@/constants/constants'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { CaseStudyCard } from '../sections/TestimonialsSection/CaseStudyCard'
import { ActionCard } from '../sections/TestimonialsSection/ActionCard'
import { useInView } from "react-intersection-observer";


function CaseId() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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

    return (
        <div className="bg-white w-full pt-24 md:pt-16">
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
                    <h1 className="font-['Raleway',Helvetica] font-bold text-[#0f0f0f] text-4xl md:text-[56px] text-center tracking-[0] leading-normal">
                        Rateo
                    </h1>
                    <motion.p
                        variants={itemVariants}
                        className="font-['Raleway',Helvetica] font-normal text-[#0f0f0fa6] text-xl md:text-2xl tracking-[0] leading-normal"
                    >
                        Redefining Workplace
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
                {projectDetails.map((detail, index) => (
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
                                <img
                                    className="w-5 h-5 md:w-[26px] md:h-[26px]"
                                    alt="Figma logo"
                                    src="/assets/figma-logo.svg"
                                />
                                <img
                                    className="w-5 h-5 md:w-[24px] md:h-[24px]"
                                    alt="Photoshop original"
                                    src="/assets/photoshop-original-logo.svg"
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
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="w-full rounded-xl md:rounded-3xl lg:rounded-[32px] overflow-hidden mt-8 px-4 md:px-0 container mx-auto"
            >
                <div
                    className="w-full aspect-[4/3] md:aspect-[928/545] mx-auto rounded-lg md:rounded-[26px] bg-cover bg-center"
                    style={{ backgroundImage: 'url(/assets/rateo-bg.png)' }}
                />
            </motion.div>

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
                            delayChildren: 0.3
                        }
                    }
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
                            transition: { duration: 0.6, ease: "easeOut" }
                        }
                    }}
                    className="text-3xl md:text-4xl font-semibold text-[#0f0f0f] font-['Raleway',Helvetica] md:whitespace-nowrap"
                >
                    Overview
                </motion.h2>

                {/* Content grid with staggered animations */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex-1"
                >
                    {overviewData.map((item, index) => (
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
                                        delay: index * 0.1
                                    }
                                }
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
                <div className="absolute w-[573px] h-[1245px] top-[72px] left-[50%] translate-x-[-50%] md:left-[628px] md:translate-x-0 rounded-[52.95px] overflow-hidden bg-gradient-to-b from-[rgba(251,251,251,1)] to-[rgba(251,251,251,1)] hidden sm:block">
                    <Image src="/assets/rateo-homescreen.svg" alt="Rateo" width={573} height={1245} />
                </div>

                <div className="absolute w-[353px] h-[766px] top-[72px] left-[50%] translate-x-[-50%] sm:left-[140px] sm:translate-x-0 rounded-[27.94px] bg-[#fff5e1] overflow-hidden">
                    <Image src="/assets/rs.svg" alt="Rateo" width={353} height={766} />
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
                        transition: { staggerChildren: 0.3 } // Reduced stagger for better mobile flow
                    }
                }}
            >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 }
                        }
                    }}
                    className="font-raleway font-semibold text-[#1d1d1d] text-2xl md:text-3xl lg:text-4xl leading-tight text-left mb-6 md:mb-12 px-2 sm:px-0" // Added slight mobile padding
                >
                    Our process
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-12 px-2 sm:px-0"> {/* Added mobile padding */}
                    {designSteps.map((step) => (
                        <motion.div
                            key={step.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 }, // Changed from scale to y for better mobile feel
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }
                            }}
                            className="w-full h-[110px] sm:h-[130px] md:h-[150px] lg:h-[181px] bg-[#fff5e1] rounded-xl md:rounded-[28px] overflow-hidden border-none" // Adjusted heights
                        >
                            <div className="flex items-center justify-center h-full p-3 sm:p-4"> {/* Adjusted padding */}
                                <div className="font-raleway font-medium text-[#171921] text-lg sm:text-xl md:text-xl text-center max-w-[120px]">
                                    {step.title}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Ideation & Workshops */}
            <div className="mt-16 w-full container mx-auto px-4 md:px-0 mb-16">
                <h2 className="font-['Raleway',Helvetica] font-semibold text-[#0f0f0f] text-2xl md:text-3xl mb-6 md:mb-8">
                    Ideation &amp; Workshops
                </h2>
                <p className="font-['Raleway',Helvetica] font-normal text-dark text-sm md:text-md max-w-full md:max-w-[1052px]">
                    To define Rateo&apos;s vision, we conducted a workshop session with their team. Through discussions and brainstorming, we
                    identified key features, refined user needs, and established a strong foundation for the platform&apos;s structure.
                </p>

                {/* Workshop Image Container */}
                <div className="w-full h-auto md:h-[664px] mt-6 md:mt-8 bg-[#205352] rounded-2xl md:rounded-[45px] overflow-hidden flex flex-col items-center p-4 md:p-0">
                    <div className="relative w-full md:w-[1225px] h-auto md:h-[697px] flex flex-col md:block">
                        <img
                            className="w-full md:w-[984px] h-auto md:h-[621px] object-cover rounded-2xl md:rounded-[45px]"
                            alt="Image"
                            src="assets/image-455.png"
                        />
                        <img
                            className="w-full md:w-[686px] h-auto md:h-[433px] md:absolute md:top-[264px] md:left-[539px]"
                            alt="Image"
                            src="assets/image-458.png"
                        />
                    </div>
                </div>
            </div>


            {/* Userflows */}
            <section className="w-full bg-black py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold text-white font-['Raleway',Helvetica] mb-8 pl-8">
                        Userflows
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        {userFlows.map((flow, index) => (
                            <div key={index} className="flex flex-col">
                                <h3 className="text-xl font-normal text-white font-['Raleway',Helvetica] mb-4 pl-8">
                                    {flow.title}
                                </h3>
                                <Card className="bg-transparent border-0">
                                    <CardContent className="p-4">
                                        <img
                                            className="w-full h-auto object-cover "
                                            alt={flow.imageAlt}
                                            src={flow.imageSrc}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wireframes */}
            <motion.section
                className="w-full bg-[#ffffff] py-12 md:py-20 px-4 md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <h2 className="font-raleway font-semibold text-[#0f0f0f] text-2xl sm:text-3xl mb-6 md:mb-8">
                            Wireframes
                        </h2>
                        <p className="font-raleway font-normal text-dark text-base sm:text-md max-w-[1052px]">
                            With a clear direction in place, we created wireframes to map out user flows and interactions. This helped us validate the layout and ensure an intuitive experience before moving into the final design phase.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                            }
                        }}
                        className="w-full mt-6 md:mt-8"
                    >
                        <div className="bg-[#205352] rounded-xl md:rounded-[45px] p-4 md:p-16">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
                                {['rateo1.svg', 'rateo2.svg', 'rateo3.svg', 'rateo4.svg'].map((img, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.95 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, ease: "easeOut" }
                                            }
                                        }}
                                        className=" rounded-lg md:rounded-xl overflow-hidden"
                                    >
                                        <img
                                            className="w-full h-auto object-contain p-2 md:p-4"
                                            alt={`Wireframe ${index + 1}`}
                                            src={`assets/${img}`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Fidelity Design */}
            <motion.section
                className="w-full bg-[#000000] py-12 md:py-20 px-4 md:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <h2 className="font-raleway font-semibold text-[#ffffff] text-2xl sm:text-3xl mb-6 md:mb-8">
                            High Fidelity Designs
                        </h2>
                        <p className="font-raleway font-normal text-[#ffffff] text-base sm:text-md max-w-[1052px]">
                            Building on the wireframes, we developed high-fidelity designs with a modern, clean interface. The final design focused on accessibility, seamless navigation, and an engaging user experience tailored to Rateo’s mission.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                            }
                        }}
                        className="w-full mt-6 md:mt-8"
                    >
                        <div className=" p-4">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
                                {['rtd1.svg', 'rtd2.svg', 'rtd3.svg', 'rtd4.svg'].map((img, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.95 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, ease: "easeOut" }
                                            }
                                        }}
                                        className=" rounded-lg md:rounded-xl overflow-hidden"
                                    >
                                        <img
                                            className="w-full h-auto object-contain p-2 md:p-4"
                                            alt={`Wireframe ${index + 1}`}
                                            src={`assets/${img}`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Web Design */}
            <motion.section
                className="w-full bg-[#205352] pt-12 md:pt-20 px-4 md:px-6 pb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto flex flex-col h-full">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="flex-grow-0"
                    >
                        <h2 className="font-raleway font-semibold text-[#ffffff] text-2xl sm:text-3xl mb-6 md:mb-8">
                            Website Design
                        </h2>
                        <p className="font-raleway font-normal text-[#ffffff] text-base sm:text-md max-w-[1052px]">
                            Using insights from research, we developed structured website that gives users insight into what Rateo offers.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                            }
                        }}
                        className="w-full mt-6 md:mt-8 flex-grow"
                    >
                        <div className="h-full">
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-2 h-full">
                                {['wd.svg', 'wd1.svg'].map((img, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.95 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.5, ease: "easeOut" }
                                            }
                                        }}
                                        className="h-full rounded-lg md:rounded-xl overflow-hidden"
                                    >
                                        <img
                                            className="w-full h-full object-cover  p-2 md:p-4"
                                            alt={`Design ${index + 1}`}
                                            src={`assets/${img}`}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <section ref={ref} className="container overflow-hidden px-4 sm:px-6 lg:px-8 py-24 mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Content */}
                    <motion.div
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
                                <p className="mt-4 text-base text-stone-950">
                                    Lorem ipsum dolor sit amet consectetur. A elit elit diam pretium
                                    habitant.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-start mt-8 text-xl sm:text-2xl font-medium tracking-tight leading-7">
                                <ActionCard
                                    variant="light"
                                    imageSrc="/assets/b1.svg"
                                    backgroundImage="/assets/b1.svg"
                                    text="View all case studies"
                                />
                                <ActionCard
                                    variant="dark"
                                    imageSrc="/assets/b2.svg"
                                    backgroundImage="/assets/b2.svg"
                                    text="Get in touch with us"
                                    multiline
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Case Studies */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        className="lg:w-2/3 lg:pl-5 md:w-full w-full flex items-end"
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-4 xl:gap-6 items-stretch">
                            <CaseStudyCard
                                imageSrc="/assets/otg1.svg"
                                title="On The Go"
                                subtitle="Get free wifi, On the Go!"
                                className="bottom-3"
                            />
                            <CaseStudyCard
                                imageSrc="/assets/case2.svg"
                                title="One Touch Football"
                                subtitle="Digital home for grassroots football"
                                className="bottom-3"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

export default CaseId