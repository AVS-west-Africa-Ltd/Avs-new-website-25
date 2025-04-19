"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const FeaturesSection = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
        {/* Left content column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 min-w-0"
        >
          <div className="flex flex-col gap-8 max-w-[593px]">
            <h2 className="font-['Raleway',Helvetica] font-semibold text-[#1d1d1d] text-4xl md:text-5xl lg:text-[64px] leading-tight">
              Fuel Your Vision with Flexible Funding Options!
            </h2>

            <p className="font-['Raleway',Helvetica] text-[#0f0f0fa6] text-[15px] leading-[19.5px] max-w-[509px]">
              We believe great ideas deserve the right support. Whether
              you&apos;re launching, growing, or scaling, we offer tailored
              payment solutions and flexible, equitable commercial modeling to
              bring your vision to life—hassle-free and built for your success.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/our-process")}
                className="cursor-pointer py-3 px-6 rounded-full bg-[#0f0f0f] text-white text-[15px] tracking-[-0.30px] transition-all hover:bg-[#333]"
              >
                See our process
              </button>

              <button
                onClick={() => router.push("/contact-us")}
                className="cursor-pointer py-3 px-6 rounded-full bg-white text-[#0f0f0f] border border-gray-300 text-[15px] tracking-[-0.30px] flex items-center transition-all hover:bg-gray-100"
              >
                Get in touch
                {/* <ArrowRightIcon className="ml-2 h-[16px] w-[16px]" /> */}
                <svg
                className="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 3.30029H3.25C2.5625 3.30029 2.00625 3.86279 2.00625 4.55029L2 12.0503C2 12.7378 2.5625 13.3003 3.25 13.3003H13.25C13.9375 13.3003 14.5 12.7378 14.5 12.0503V4.55029C14.5 3.86279 13.9375 3.30029 13.25 3.30029ZM13.25 5.80029L8.25 8.92529L3.25 5.80029V4.55029L8.25 7.67529L13.25 4.55029V5.80029Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right image column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-8 md:mt-0 min-w-0"
        >
          {/* <Card className="w-full h-auto overflow-hidden"> */}
          <Image
            className="w-full h-auto object-cover"
            alt="Funding options illustration"
            src="/assets/funding.png"
            width={100}
            height={100}
            priority
            quality={100}
          />
          {/* </Card> */}
        </motion.div>
      </div>
    </section>
  );
};
