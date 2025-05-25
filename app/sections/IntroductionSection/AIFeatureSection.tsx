"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { urlFor } from "@/sanity";

export const AIFeatureSection = ({ data }: any) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="p-4 md:px-20">
      <div
        ref={ref}
        className={`relative max-w-[1500px] mx-auto overflow-hidden px-4 md:pl-16 rounded-3xl py-14 mb-12 transition-opacity transform duration-1200 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
          } ${isMobile ? "!h-[700px]" : ""}`}
      >
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            // src={isMobile ? "/assets/ai-image2.png" : "/assets/ai-image.png"}
            src={urlFor(data.backgroundImage).url()}
            alt="AI Feature Background"
            fill
            quality={75}
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-5 h-full px-4">
          <div
            className={`w-full lg:w-[40%] transition-opacity transform duration-1000 ease-out delay-300 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
              }`}
          >
            <section className="flex flex-col items-start self-stretch my-auto w-full font-semibold text-white">
              {data?.label && (
                <div className="rounded-[47px] border border-white bg-[rgba(255,255,255,0.30)] backdrop-blur-[35.5px] py-2.5 px-3.5 text-sm sm:text-base sm:py-2.5 sm:px-4">
                  {data?.label}
                </div>
              )}

              <h1 className="mt-4 text-3xl md:text-4xl lg:text-6xl">
                <span style={{ fontWeight: 500 }}>
                  {data?.headline || "AI-Powered Solutions"}
                </span>{" "}
                {/* <span className="text-white">AI</span> */}
              </h1>
              <p className="self-stretch mt-4 md:mt-7 text-[15px] md:text-base tracking-tight leading-5 md:leading-6">
                {data?.description ||
                  "Discover how our AI-driven solutions can transform your business. From predictive analytics to personalized experiences, we leverage the power of AI to drive innovation and efficiency."}
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};