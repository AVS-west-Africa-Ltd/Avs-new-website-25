"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import { Process } from "./partials/Processes";
import { fundingSteps, processSteps } from "@/constants/constants";
import { FundSection } from "./partials/FundSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function OurProcess() {
  const [activeTab, setActiveTab] = useState("build");

  return (
    <div className="bg-white flex flex-row justify-center w-full mt-[100px] py-16">
      <Tabs
        defaultValue="build"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="mx-auto rounded-[43.54px] border-[1.12px] border-solid border-[#93969f] bg-transparent p-0 flex justify-center">
          <TabsTrigger
            value="build"
            className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent"
          >
            <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
              Build Your Vision
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="fund"
            className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent"
          >
            <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
              Fund Your Vision
            </span>
          </TabsTrigger>
        </TabsList>

        {/* <CoverflowCarousel /> */}

        <div className="w-full mt-6 md:mt-12 flex flex-col items-center px-4 sm:px-6">
          {/* Main Heading */}
          <h1 className="font-raleway text-[#0f0f0f] text-center leading-tight">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold">
              {activeTab === "build" ? "From" : "Fuel Your"}{" "}
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium italic">
              {activeTab === "build" ? "Idea to Reality" : "Startup’s Growth"}
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-inter text-[#0f0f0fa6] text-center mt-4 sm:mt-6 max-w-xs sm:max-w-sm md:max-w-xl mx-auto  text-sm sm:text-base leading-relaxed tracking-tight">
            {activeTab === "build"
              ? "Transform your vision into a market-ready product with a structured,expert-driven approach—research, branding, design, development, and beyond."
              : "Secure the right funding to scale your business. From crafting the perfect pitch to connecting with investors, we guide you every step of the way."}
          </p>

          <CurvedCarousel />

          {/* Contact button */}
          <Button className="mt-12 !rounded-full bg-gray-900 hover:bg-gray-800 px-6">
            Get in touch <Mail className="ml-2 h-4 w-4" />
          </Button>
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
                <Process processSteps={processSteps} />
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
                <FundSection processSteps={fundingSteps} />
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
}

export default OurProcess;
