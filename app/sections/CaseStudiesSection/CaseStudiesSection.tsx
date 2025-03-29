"use client"

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export const CaseStudiesSection = () => {
  return (
    <section className="w-full py-20 mt-[100px]">
      <div className="container mx-auto flex flex-col items-center gap-[72px]">
        {/* Heading and CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-[1040px] text-center"
        >
          <h2 className="font-raleway text-[56px] leading-tight text-[#0f0f0f]">
            <span className="font-semibold">Take charge of</span>
            <span className="font-bold"> </span>
            <span className="font-medium italic">your business growth</span>
            <span className="font-semibold">—We'll handle the operations!</span>
          </h2>

          <p className="font-raleway text-base text-[#0f0f0fa6] tracking-[-0.30px] leading-[19.5px]">
            Focus on building your vision while we take care of the day-to-day
            operations, ensuring seamless growth.
          </p>

          <div className="flex items-center gap-2.5">
            <Button className="h-10 w-[184px] rounded-[100px] bg-[#0f0f0f] text-white font-raleway font-normal text-[15px] tracking-[-0.30px]">
              View our case studies
            </Button>

            <Button
              variant="outline"
              className="h-10 w-[147px] rounded-[100px] bg-white text-[#0f0f0f] font-raleway font-normal text-[15px] tracking-[-0.30px] border-[#d8d8d8]"
            >
              Get in touch
              <ArrowRightIcon className="ml-2 h-[15px] w-[15px]" />
            </Button>
          </div>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          {/* Main Case Study */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            className="w-full md:w-[calc(66%-8px)] aspect-[928/545] rounded-3xl md:rounded-[32px] overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(/assets/one.svg)`,
              }}
            />
          </motion.div>

          {/* Secondary Case Study */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
            className="w-full md:w-[calc(34%-8px)] aspect-[456/545] rounded-3xl md:rounded-[32px] overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(/assets/two.svg)`,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
