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
    modules: [
      A11y,
      Autoplay,
      Mousewheel,
      Pagination,
      Parallax,
      Scrollbar,
      EffectPanorama,
    ],
    centeredSlides: true,
    spaceBetween: 1,
    initialSlide: 1,
    grabCursor: true,
    slideToClickedSlide: true,
    loop: true,
    effect: "panorama",
    speed: 600,
    pagination: { enabled: false },
    autoplay: true,
    scrollbar: { enabled: false },
    mousewheel: { enabled: true },
    parallax: { enabled: true },
    lazy: { enabled: true },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
        initialSlide: 0,
        scrollbar: { enabled: false },
        onBeforeInit(swiper: any) {
          swiper.params.panoramaEffect = { depth: 150, rotate: 30 };
        },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 4,
        pagination: { enabled: false },
        onBeforeInit(swiper: any) {
          swiper.params.panoramaEffect = { depth: 300, rotate: 25 };
        },
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 1,
        pagination: { enabled: true },
        onBeforeInit(swiper: any) {
          swiper.params.panoramaEffect = { depth: 250, rotate: 25 };
        },
      },
    },
    onBeforeInit(swiper: any) {
      swiper.params.panoramaEffect = { rotate: 45 };
    },
  };

  const slides = [
    "/assets/rectangle-4224.png",
    "/assets/build2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-2.png",
    "/assets/rectangle-4224-2.png",
  ];

  return (
    <Swiper {...swiperParameters}>
      {slides.map((src, index) => (
        <SwiperSlide key={index} className="swiper-slide-4ffe">
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