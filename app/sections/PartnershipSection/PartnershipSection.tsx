"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const PartnershipSection = () => {
  const textColumns = [
    {
      id: 1,
      content:
        "At A Venture Studio (AVS), we rethink how businesses are built. Too often, companies chase trends over strategy, prioritising short-term gains over lasting impact. We do things differently. By combining expertise, ambition, and creative rebellion, we create ventures designed to endure—not just to grow. If you’re ready to break the mould, let’s build something remarkable.",
    },
    {
      id: 2,
      content:
        "AVS was founded with a clear purpose: to rethink how digital ventures are built. Too often, businesses prioritise speed over substance, burning through resources without a clear path to longevity. We saw an opportunity to change that. By combining sharp commercial insight with hands-on execution, we create ventures that aren’t just built to launch—they’re built to lead.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 max-w-[1500px] mx-auto overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px]">
          {/* Left Column (Heading & Button) */}
          <div className="flex flex-col items-start md:max-w-sm gap-6 text-left md:text-left">
            <h2 className="font-['Raleway',Helvetica] font-bold text-[#0f0f0f] text-[32px] sm:text-3xl md:text-4xl">
              Entrepreneurship isn&#39;t for everyone
            </h2>
{/* 
            <button className="w-full md:w-auto rounded-full bg-[#0f0f0f] px-6 py-3">
              <span className="font-['Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px]">
                More about us
              </span>
            </button> */}
          </div>

          {/* Right Columns (Text Content) */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            {textColumns.map((column) => (
              <div
                key={column.id}
                className="w-full md:flex-1 text-[15px] sm:text-base leading-relaxed text-[#636363]"
              >
                {column.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
