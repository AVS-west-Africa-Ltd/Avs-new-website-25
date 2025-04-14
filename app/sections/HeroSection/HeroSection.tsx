"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const partnerLogos = [
    { id: 1, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078723/p2_sajvyq.svg", alt: "Union" },
    { id: 2, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078724/p3_hpffdz.svg", alt: "My Dex" },
    { id: 3, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078725/p4_faw2pq.svg", alt: "Group 1" },
    { id: 4, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078726/p5_penyme.svg", alt: "Group 2" },
    { id: 5, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078727/p6_xbaumx.svg", alt: "Group 3" },
    { id: 6, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078722/p1_b8kka0.svg", alt: "One Touch Football" },
    { id: 7, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078730/p8_afoird.svg", alt: "ATE" },
    { id: 8, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078731/p7_xmny98.svg", alt: "Logo 1" },
    { id: 9, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078733/p10_zt40bp.svg", alt: "Group 4" },
    { id: 10, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078735/p11_lt93re.svg", alt: "Group 5" },
    { id: 11, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078736/p9_ohuz9i.svg", alt: "Group 6" },
    { id: 12, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078738/p12_r6qtb8.svg", alt: "Group 7" },
    { id: 13, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078738/p13_yn4dus.svg", alt: "Ye Logo" },
    { id: 14, src: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1744078739/p14_wwus8h.svg", alt: "Group 8" },
  ];

  return (
    <section ref={ref} className="w-full bg-[#021913] py-10">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mt-10 text-xl text-[#dee0e4] text-center font-['Raleway',Helvetica] font-normal tracking-[-0.30px] leading-[19.5px] mb-6"
      >
        Our Partners
      </motion.h2>

      <Card className="w-full border-none rounded-none bg-transparent mt-12">
        <CardContent className="p-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
                <SwiperSlide
                  key={logo.id}
                  className="flex items-center justify-center"
                >
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
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
};