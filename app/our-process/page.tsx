"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import { Process } from "./partials/Processes";
import { fundingSteps, processSteps, sanityPageConfig } from "@/constants/constants";
import { FundSection } from "./partials/FundSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

function CurvedCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1536, // 2xl breakpoint
        settings: {
          slidesToShow: 4,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480, // xs breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider-container relative w-full py-12">
      {/* Add curved effect with a wrapper div */}
      <div className="curved-carousel-wrapper">
        <Slider {...settings}>
          <div className="">
            <div className="h-full rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src="/assets/ps3.svg"
                alt="Slide 1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="">
            <div className="h-full rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src="/assets/ps3.svg"
                alt="Slide 2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="">
            <div className="h-full rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src="/assets/ps3.svg"
                alt="Slide 3"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="">
            <div className="h-full rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src="/assets/ps3.svg"
                alt="Slide 4"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="">
            <div className="h-full rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src="/assets/ps3.svg"
                alt="Slide 5"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* <div className="px-2">
            <div className="h-full rounded-lg shadow-md flex justify-center items-center">
              <img
                src="/assets/rectangle-4224-5.png"
                alt="Slide 6"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="px-2">
            <div className="h-full rounded-lg shadow-md flex justify-center items-center">
              <img
                src="/assets/rectangle-4224-6.png"
                alt="Slide 7"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="px-2">
            <div className="h-full rounded-lg shadow-md flex justify-center items-center">
              <img
                src="/assets/rectangle-4224-7.png"
                alt="Slide 8"
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}
        </Slider>
      </div>

      {/* Add some CSS for the curved effect */}
      <style jsx>{`
        .curved-carousel-wrapper {
          perspective: 1200px;
          overflow: hidden;
          padding: 1rem 0;
        }
        :global(.slick-track) {
          display: flex;
          align-items: center;
          transform-style: preserve-3d;
        }
        :global(.slick-slide) {
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s ease;
          margin: 0 6px;
        }
        :global(.slick-center) {
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }
        :global(.slick-slide:not(.slick-center)) {
          transform-origin: center center;
          filter: brightness(0.8);
        }
        /* Enhanced curve effect to match image */
        :global(.slick-slide:nth-child(odd):not(.slick-center)) {
          transform: scale(0.9) translateY(10px) rotateY(-8deg);
        }
        :global(.slick-slide:nth-child(even):not(.slick-center)) {
          transform: scale(0.9) translateY(-10px) rotateY(8deg);
        }
        /* Override dots styles */
        :global(.slick-dots) {
          bottom: -30px;
        }
        :global(.slick-dots li) {
          margin: 0 2px;
        }
        :global(.slick-dots li button:before) {
          font-size: 8px;
          opacity: 0.3;
        }
        :global(.slick-dots li.slick-active button:before) {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

const CoverflowCarousel = () => {
  return (
    <Swiper
      // className: "center",
      // centerMode: true,
      // infinite: true,
      // centerPadding: "60px",
      // slidesToShow: 3,
      // speed: 500
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1} // Change "auto" to a number to ensure visibility
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Added autoplay
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module
      breakpoints={{
        640: { slidesPerView: 1 }, // Mobile
        768: { slidesPerView: 2 }, // Tablet
        1024: { slidesPerView: 6 }, // Desktop
      }}
      className="w-full mx-auto"
    >
      <SwiperSlide>
        <div className="w-[30vw]  flex justify-center items-center bg-gray-200">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 1"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30vw]   flex justify-center items-center bg-gray-200">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 2"
            className="w-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30vw]   bg-fuchsia-600">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 3"
            className="w-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30vw]  ">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 4"
            className="w-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30vw]  ">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 5"
            className="w-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30vw]  ">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 6"
            className="w-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30vw]  ">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 7"
            className="w-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30vw]  ">
          <img
            src="/assets/rectangle-4224-1.png"
            alt="Slide 8"
            className="w-full "
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

// File: app/page.js (or pages/index.js depending on your Next.js version)
import dynamic from "next/dynamic";
import Carousel from "./partials/Carousel";
import { useQuery } from "@tanstack/react-query";
import client from "@/sanity";
import { PortableText } from "@portabletext/react";

function OurProcess() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("build");

  const sampleSlides = [
    {
      id: 1,
      title: "Research & Strategy",
      description: "Understanding the market, audience, and opportunities.",
      imageSrc: "/assets/Our-process/ourprocess8.svg",
    },
    {
      id: 2,
      title: "Brand",
      description: "Defining your unique identity and position.",
      imageSrc: "/assets/Our-process/ourprocess7.svg",
    },
    {
      id: 3,
      title: "Development",
      description: "Building solutions that meet your goals.",
      imageSrc: "/assets/Our-process/ourprocess6.svg",
    },
    {
      id: 4,
      title: "Analytics",
      description: "Measuring performance and refining strategy.",
      imageSrc: "/assets/Our-process/ourprocess5.svg",
    },
    {
      id: 5,
      title: "Optimization",
      description: "Continuously improving based on data insights.",
      imageSrc: "/assets/Our-process/ourprocess4.svg",
    },
    {
      id: 6,
      title: "Research & Strategy",
      description: "Understanding the market, audience, and opportunities.",
      imageSrc: "/assets/Our-process/ourprocess3.svg",
    },
    {
      id: 7,
      title: "Brand",
      description: "Defining your unique identity and position.",
      imageSrc: "/assets/Our-process/ourprocess2.svg",
    },
    {
      id: 8,
      title: "Development",
      description: "Building solutions that meet your goals.",
      imageSrc: "/assets/Our-process/ourprocess1.svg",
    },
    {
      id: 9,
      title: "Analytics",
      description: "Measuring performance and refining strategy.",
      imageSrc: "/assets/Rectangle4225-8.png",
    },
    {
      id: 10,
      title: "Optimization",
      description: "Continuously improving based on data insights.",
      imageSrc: "/assets/Our-process/ourprocess9.svg",
    },
  ];

  const {
    data: pageData,
    isLoading: isLoading,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.ourProcessPageId],
    queryFn: () => fetchPageData(sanityPageConfig.ourProcessPageId),
  });

  const fetchPageData = async (pageId: string) => {
    const query = `*[_type == "page" && _id == "${pageId}"][0]`;
    const result = await client.fetch(query);
    return result;
  };

  // const processHeroSection = data.find(block => block._type === 'ourProcessHeroSection');
  // const services = processHeroSection?.services || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const ourProcessHeroSectionData = pageData?.contentBlocks;

  if (!ourProcessHeroSectionData || ourProcessHeroSectionData.length < 2) {
    return <div>Error: Not enough hero section data.</div>; // Handle cases with insufficient data
  }

  const currentHeadline =
    activeTab === 'build'
      ? ourProcessHeroSectionData[0]?.headline
      : ourProcessHeroSectionData[1]?.headline;

  const currentSubheadline =
    activeTab === 'build'
      ? ourProcessHeroSectionData[0]?.subheadline
      : ourProcessHeroSectionData[1]?.subheadline;

  return (
    <div className="bg-white flex flex-row justify-center w-full mt-[50px] md:mt-[100px] py-16">
      <Tabs
        defaultValue="build"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="mx-auto rounded-[43.54px] border-[1.12px] border-solid border-[#93969f] bg-transparent p-0 flex justify-center">
          <TabsTrigger
            value="build"
            className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent cursor-pointer"
          >
            <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
              Build Your Vision
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="fund"
            className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent cursor-pointer"
          >
            <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
              Fund Your Vision
            </span>
          </TabsTrigger>
        </TabsList>

        {/* <CoverflowCarousel /> */}

        <div className="w-full mt-6 md:mt-12 flex flex-col items-center px- sm:px-6">
          {/* Main Heading */}
          <h1 className="font-raleway text-[#0f0f0f] text-center leading-tight">
            {/* <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold">
              {activeTab === "build" ? "From" : "Fuel Your"}{" "}
            </span> */}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium italic">
            {currentHeadline ? <PortableText value={currentHeadline} /> : 'Default Headline'}
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-inter text-[#0f0f0fa6] text-center mt-4 sm:mt-6 max-w-xs sm:max-w-sm md:max-w-xl mx-auto  text-sm sm:text-base leading-relaxed tracking-tight mb-12">
            {/* {activeTab === "build"
              ? "Transform your vision into a market-ready product with a structured,expert-driven approach—research, branding, design, development, and beyond."
              : "Secure the right funding to scale your business. From crafting the perfect pitch to connecting with investors, we guide you every step of the way."} */}
              {currentSubheadline ? currentSubheadline : 'Default Subheadline'}
          </p>

          <div className="flex justify-center items-center w-full">
            <Carousel
              slides={activeTab === "build" ? ourProcessHeroSectionData[0].services : ourProcessHeroSectionData[1].services}
              autoScrollInterval={5000}
            />
          </div>

          {/* Contact button */}
          {/* <Button
            onClick={() => router.push("/contact-us")}
            className="mt-12 !rounded-full bg-gray-900 hover:bg-gray-800 px-6"
          >
            Get in touch <Mail className="ml-2 h-4 w-4" />
          </Button> */}
          <button
            onClick={() => router.push("/contact-us")}
            className="cursor-pointer py-3 px-6 flex gap-3 items-center rounded-full font-normal text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            <span className="flex items-center gap-2 text-[15px]">
              Get in touch
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5847 2.75H2.58472C1.89722 2.75 1.34097 3.3125 1.34097 4L1.33472 11.5C1.33472 12.1875 1.89722 12.75 2.58472 12.75H12.5847C13.2722 12.75 13.8347 12.1875 13.8347 11.5V4C13.8347 3.3125 13.2722 2.75 12.5847 2.75ZM12.5847 5.25L7.58472 8.375L2.58472 5.25V4L7.58472 7.125L12.5847 4V5.25Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "build" ? (
            <motion.div
              key="build"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="build">
                <Process processSteps={ourProcessHeroSectionData[0].services} />
              </TabsContent>
            </motion.div>
          ) : (
            <motion.div
              key="fund"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="fund">
                <FundSection processSteps={ourProcessHeroSectionData[1].services} />
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
}

export default OurProcess;

function ImageSlider() {
  return (
    <div className="image-grid-wrapper">
      <div className="image-grid">
        <div>
          <img src="/assets/rectangle-4224.png" alt="Image 1" />
        </div>
        <div>
          <img src="/assets/build2.png" alt="Image 1" />
        </div>
        <div>
          <img src="/assets/rectangle-4224-2.png" alt="Image 1" />
        </div>
        <div>
          <img src="/assets/rectangle-4224-3.png" alt="Image 1" />
        </div>
        <div>
          <img src="/assets/rectangle-4224-4.png" alt="Image 1" />
        </div>
        {/* <div>
                <img src="/assets/rectangle-4224-5.png" alt="Image 1" />
            </div> */}

        {/* <div>
                <img src="/assets/rectangle-4224-6.png" alt="Image 1" />
            </div>
            <div>
                <img src="/assets/rectangle-4224-7.png" alt="Image 1" />
            </div>
            <div>
                <img src="/assets/rectangle-4224-8.png" alt="Image 1" />
            </div>
            <div>
                <img src="/assets/rectangle-4224-9.png" alt="Image 1" />
            </div> */}
      </div>
    </div>
  );
}
