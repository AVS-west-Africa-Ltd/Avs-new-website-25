"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";

export const CaseStudiesSection = ({ data }: any) => {
  const router = useRouter();

  return (
    <section className="w-full py-20 mt-[40px] md:mt-[100px]">
      <div className="container mx-auto flex flex-col items-center gap-[72px] px-4">
        {/* Heading and CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-[700px] text-center"
        >
          <h2 className="font-raleway text-4xl sm:text-4xl md:text-[56px] leading-tight text-[#0f0f0f]">
            {data?.title && (
              <span className="font-semibold">
                <PortableText value={data?.title} />
              </span>
            )}
          </h2>
         

          <p className="font-raleway text-sm sm:text-base text-[#0f0f0fa6] tracking-[-0.30px] leading-[19.5px]">
            {data?.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2.5">
            <button
              onClick={() => {
                router.push(data?.buttonLink);
                //  setMobileMenuOpen(false);
              }}
              className="w-auto px-6 py-3 cursor-pointer font-normal text-white bg-stone-950 rounded-[100px] hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <span>{data?.buttonText}</span>
              <span className="ml-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 3H2.75C2.0625 3 1.50625 3.5625 1.50625 4.25L1.5 11.75C1.5 12.4375 2.0625 13 2.75 13H12.75C13.4375 13 14 12.4375 14 11.75V4.25C14 3.5625 13.4375 3 12.75 3ZM12.75 5.5L7.75 8.625L2.75 5.5V4.25L7.75 7.375L12.75 4.25V5.5Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
