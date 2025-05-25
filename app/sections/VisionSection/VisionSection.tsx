"use client";

import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity";

export const VisionSection = ({ data }: any) => {
  return (
    <section className="relative w-full overflow-hidden py-14">
      {/* Optimized Background Image */}
      <Image
        src={urlFor(data.mainImage).url()}
        alt="Vision Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
        className="absolute inset-0 z-0"
      />

      <div className="relative mx-auto max-w-[1440p] px-4">
        {/* Main content container */}
        <div className="relative flex flex-col items-center text-center py-14 md:py-24">
          {/* Heading */}
          <h2 className="font-['Raleway',Helvetica] font-semibold text-white text-3xl md:text-5xl lg:text-6xl max-w-[1062px] mb-8 md:mb-14">
            {data?.headline || "Our Vision"}
          </h2>

          {/* Main card */}
          <div className="w-full max-w-[1500px] bg-[rgba(255,255,255,0.40)] backdrop-blur-[2.5px] rounded-[26px] p-5 py-16 md:p-8 lg:p-10">
            {/* Card header */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
              <p className="font-['Raleway',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[-0.30px] leading-5 md:leading-[19.5px] max-w-[382px] text-left">
               {data?.introText}
              </p>

              {/* Optional button block, uncomment to use */}
              {/*
              <div>
                <Button
                  variant="outline"
                  className="h-10 w-full md:w-auto rounded-full bg-white text-[#0f0f0f] border-[#f0f0f0] font-['Raleway',Helvetica] text-sm md:text-[15px]"
                >
                  <span>View our services</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>
              */}
            </div>

            {/* Card content - Image & Text */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-8 md:mt-12">
              {/* Left - Image */}
              <div className="relative w-full max-w-[740px] h-[250px] md:h-[400px] lg:h-[506px] rounded-[26px] overflow-hidden">
                <Image
                  src="/assets/l1.svg"
                  alt="Vision Image"
                  width={640}
                  height={436}
                  className="rounded-[26px] object-cover w-full h-full"
                />
              </div>

              {/* Right - Text content */}
              <div className="flex flex-col w-full max-w-[613px] gap-4 md:gap-6 text-left">
                <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-2xl md:text-3xl lg:text-4xl">
                  {data?.highlightText || "Visionary Solutions for Tomorrow"}
                </h3>

                <p className="font-['Raleway',Helvetica] font-normal text-white text-sm md:text-[15px]">
                  {data?.description }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
