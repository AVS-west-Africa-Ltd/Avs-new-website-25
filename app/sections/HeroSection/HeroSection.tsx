"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity";


export const HeroSection = ({data}:any) => {
  // Array of partner logos
  // Each logo has an id, src (source), and alt (alternative text)
  // The id is used as a key for each SwiperSlide
  // The src is the path to the logo image
  // The alt is the alternative text for the image, which is important for accessibility
  // and SEO purposes
  // The logos are stored in an array of objects, each representing a logo

const partnerLogos = [
  { id: 1, src: "/assets/p1.svg", alt: "Union" },
  { id: 2, src: "/assets/p2.svg", alt: "My Dex" },
  { id: 3, src: "/assets/p3.svg", alt: "Group 1" },
  { id: 4, src: "/assets/p4.svg", alt: "Group 2" },
  // { id: 5, src: "/assets/p5.svg", alt: "Group 3" },
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
 if(data){
  return (
    <section className="w-full bg-[#021913] py-10">
      <h2 className="mt-10 text-xl text-[#dee0e4] text-center font-['Raleway',Helvetica] font-normal tracking-[-0.30px] leading-[19.5px] mb-6">
        {data.title || 'Our Partners'}
      </h2>

      <Card className="w-full border-none rounded-none bg-transparent mt-12">
        <CardContent className="p-0 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            className="w-full"
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {data.partners.map((partner: any) => (
              <SwiperSlide key={partner._key} className="flex items-center justify-center">
                <div className="flex items-center justify-center h-full w-full p-4">
                  {partner?.logo?.asset?._ref && (
                    <Image
                      src={urlFor(partner.logo).url()}
                      alt={partner.alt || 'Partner Logo'}
                      className="max-w-[80%] max-h-[100px] object-contain"
                      width={200}
                      height={200}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </Card>
    </section>
  );

 } else return (
    // Main section for displaying partner logos
    
     <section className="w-full bg-[#021913] py-10">
      <h2 className="mt-10 text-xl text-[#dee0e4] text-center font-['Raleway',Helvetica] font-normal tracking-[-0.30px] leading-[19.5px] mb-6">
        Our Partners
      </h2>

      <Card className="w-full border-none rounded-none bg-transparent mt-12">
        <CardContent className="p-0 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            className="w-full"
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
           
            {partnerLogos.map((logo) => (
              <SwiperSlide key={logo.id} className="flex items-center justify-center !bg-transparent ">
                <div className="flex items-center justify-center h-full w-full p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-[80%] max-h-[100px] object-contain"
                    width={200}
                    height={200}
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
