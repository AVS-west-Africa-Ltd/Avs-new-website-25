"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

interface CallToActionProps {
  text: string;
  onClick?: () => void;
}
export const CallToAction: React.FC<CallToActionProps> = ({
  text,
  onClick,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={
        () => router.push("/resources/services")
      }
      className="mt-7 px-8 py-4  max-w-full text-base tracking-tight leading-tight text-white bg-stone-950 rounded-[100px] max-md:px-5 hover:bg-stone-800 transition-colors cursor-pointer"
    >
      {text}
    </button>
  );
};

export const AIFeatureSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="p-4 md:px-14">
      <div
        ref={ref}
        className={`relative overflow-hidden px-4 md:pl-16 rounded-3xl py-[120px] mb-12 transition-opacity transform duration-1200 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
        }`}
      >
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            // src={isMobile ? "/assets/cont.jpeg" : "/assets/bg-s.svg"}
            src="/assets/resources/one.jpeg"
            alt="AI Feature Background"
            fill
            quality={75}
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-5 h-full">
          <div
            className={`w-full lg:w-[45%] transition-opacity transform duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <section className="flex flex-col items-start self-stretch my-auto w-full font-semibold text-white">
              {/* <div className="rounded-[47px] border border-white bg-[rgba(255,255,255,0.30)] backdrop-blur-[35.5px] py-2.5 px-3.5">
                Coming soon on A Venture Studio
              </div> */}
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-6xl">
                <span style={{ fontWeight: 500 }}>Business Model Canvas</span>{" "}
              </h1>
              <p className="self-stretch mt-4 md:mt-5 text-2xl text-neutral-100 max-md:max-w-full font-light">
                Define how your startup creates, delivers, and captures
                value—one building block at a time.
              </p>
            </section>
            <CallToAction text="Start Mapping" />
          </div>
        </div>
      </div>
    </section>
  );
};
