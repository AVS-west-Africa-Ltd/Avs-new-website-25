"use client"; // Ensure component runs in client-side rendering

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = () => {
  const partnerLogos = [
    { id: 1, src: "/assets/p1.svg", alt: "Union" },
    { id: 2, src: "/assets/p2.svg", alt: "My Dex" },
    { id: 3, src: "/assets/p3.svg", alt: "Group 1" },
    { id: 4, src: "/assets/p4.svg", alt: "Group 2" },
    { id: 5, src: "/assets/p5.svg", alt: "Group 3" },
    { id: 6, src: "/assets/p6.svg", alt: "One Touch Football" },
    { id: 7, src: "/assets/p7.svg", alt: "ATE" },
    { id: 8, src: "/assets/p8.svg", alt: "Logo 1" },
    { id: 9, src: "/assets/p9.svg", alt: "Group 4" },
    { id: 10, src: "/assets/p10.svg", alt: "Group 5" },
    { id: 11, src: "/assets/p11.svg", alt: "Group 6" },
    { id: 12, src: "/assets/p12.svg", alt: "Group 7" },
    { id: 13, src: "/assets/p13.svg", alt: "Ye Logo" },
    { id: 14, src: "/assets/p14.svg", alt: "Group 8" },
  ];

  return (
    <section className="w-full h-auto bg-[#021913] py-12">
      <h2 className="mt-10 text-xl text-[#dee0e4] text-center font-['Raleway',Helvetica] font-normal tracking-[-0.30px] leading-[19.5px] mb-6">
        Our Partners
      </h2>

      <Card className="w-full border-none rounded-none bg-transparent mt-12">
        <CardContent className="p-0 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1} // Default for mobile
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            // navigation
            className="w-full"
            breakpoints={{
              480: {
                slidesPerView: 3, // 3 slides on tablets
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5, // 5 slides on large screens
                spaceBetween: 30,
              },
            }}
          >
            {partnerLogos.map((logo) => (
              <SwiperSlide
                key={logo.id}
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center h-full w-full p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-[80%] max-h-[80px] object-contain" // Reduced size and centered
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </Card>
    </section>
  );
};