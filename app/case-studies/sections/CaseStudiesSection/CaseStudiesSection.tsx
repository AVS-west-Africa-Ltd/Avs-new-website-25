"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const CaseStudiesSection = () => {
  const router = useRouter();
  return (
    <section className="w-full py-20 mt-[30px] md:mt-[100px]">
      <div className="container mx-auto flex flex-col items-center gap-[72px]">
        {/* Heading and CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-[1040px] text-center"
        >
          <h2 className="font-raleway text-[56px] leading-tight text-[#0f0f0f]">
            <span className="font-semibold">Our</span>
            <span className="font-bold"> </span>
            <span className="font-medium italic">Case Studies</span>
          </h2>

          <p className="font-raleway text-base text-[#0f0f0fa6] tracking-[-0.30px] leading-[19.5px]">
            We don&apos;t just create brands; we craft unforgettable experiences
            that leave a lasting impression.
          </p>

          {/* Contact button */}
          <button
            onClick={() => router.push("/contact-us")}
            className="whitespace-nowrap gap-2 py-3 px-6 flex text-center rounded-[100px] text-white bg-[#0f0f0f] font-raleway font-normal text-[15px] border border-[#d8d8d8] cursor-pointer flex items-center"
          >
            <span className="">Get in touch</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.543 2.75H2.54297C1.85547 2.75 1.29922 3.3125 1.29922 4L1.29297 11.5C1.29297 12.1875 1.85547 12.75 2.54297 12.75H12.543C13.2305 12.75 13.793 12.1875 13.793 11.5V4C13.793 3.3125 13.2305 2.75 12.543 2.75ZM12.543 5.25L7.54297 8.375L2.54297 5.25V4L7.54297 7.125L12.543 4V5.25Z"
                fill="white"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
