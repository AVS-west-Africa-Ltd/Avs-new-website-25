"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const PartnershipSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const textColumns = [
    {
      id: 1,
      content:
        "At Aventure Studio (AVS), we do things differently. We're not here to chase vanity metrics or jump on the latest trends—we're here to build businesses that last. For us, success isn't just about rapid growth; it's about smart, sustainable strategy and meaningful relationships.",
    },
    {
      id: 2,
      content:
        "AVS was founded with a clear purpose: to rethink how digital ventures are built. Too often, businesses prioritise speed over substance, burning through resources without a clear path to longevity. We saw an opportunity to change that. By combining sharp commercial insight with hands-on execution, we create ventures that aren't just built to launch—they're built to lead.",
    },
  ];

  return (
    <section ref={ref} className="w-full py-16">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-[18px]">
          {/* Left column with heading and button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col w-full md:w-[478px] gap-6"
          >
            <h2 className="font-['Raleway',Helvetica] font-semibold text-[#0f0f0f] text-4xl">
              Entrepreneurship isn&#39;t for everyone
            </h2>

            <Button className="w-[143.5px] h-[39.5px] rounded-[100px] bg-[#0f0f0f] relative">
              <span className="font-['Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px]">
                More about us
              </span>
            </Button>
          </motion.div>

          {/* Middle and right text columns */}
          {textColumns.map((column, index) => (
            <motion.div
              key={column.id}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 * (index + 1) }}
              className="w-full md:w-[430px] font-['Raleway',Helvetica] font-normal text-medium text-[15px] tracking-[-0.30px] leading-[19.5px] text-[#636363]"
            >
              {column.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
