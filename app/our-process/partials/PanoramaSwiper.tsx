// components/MySwiper.tsx
"use client"; // This is needed because we're using client-side features

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Mousewheel,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import EffectPanorama from "./effect-panorama.esm";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/scrollbar";
// import "./effect-panorama.css";
// import "./MySwiper.css";

export default function MySwiper() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Pagination, EffectPanorama],
    centeredSlides: true,
    loop: true,
    effect: "panorama",
    speed: 600,
    pagination: { enabled: true },
    autoplay: { enabled: true },
    breakpoints: {
      768: {
        slidesPerView: 3,

        onBeforeInit(swiper: any): void {
          swiper.params.panoramaEffect = { depth: 150, rotate: 30 };
        },
      },
      1024: {
        slidesPerView: 4,
        centeredSlides: false,
        pagination: { enabled: false },
        simulateTouch: false,
      },
      1280: {
        slidesPerView: 4,
        centeredSlides: true,
        pagination: { enabled: true },
        simulateTouch: true,

        onBeforeInit(swiper: any): void {
          swiper.params.panoramaEffect = { depth: 250, rotate: 25 };
        },
      },
    },

    onBeforeInit(swiper: any): void {
      swiper.params.panoramaEffect = { rotate: 45 };
    },
  };

  const slides = [
    "/assets/rectangle-4224.png",
    "/assets/build2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-3.png",
    "/assets/rectangle-4224-4.png",
    "/assets/rectangle-4224-5.png",
    "/assets/rectangle-4224-6.png",
    "/assets/rectangle-4224-7.png",
    "/assets/rectangle-4224-8.png",
    "/assets/rectangle-4224-9.png",
  ];

  return (
    <Swiper {...swiperParameters}>
      {slides.map((src, index) => (
        <SwiperSlide key={index} className="swiper-slide-4ffe swiper2 px-[10px]">
          <img
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b w-full"
            data-swiper-parallax="10%"
            loading="lazy"
            src={src}
            alt={`Nature image ${index + 1}`}
          />
          <div className="swiper-lazy-preloader"></div>
          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
}