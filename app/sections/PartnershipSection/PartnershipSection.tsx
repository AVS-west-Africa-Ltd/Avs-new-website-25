import React from "react";
import { Button } from "@/components/ui/button";

export const PartnershipSection = () => {
  // Data for the text columns to enable mapping
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
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-[18px]">
          {/* Left column with heading and button */}
          <div className="flex flex-col w-full md:w-[478px] gap-6">
            <h2 className="font-['Raleway',Helvetica] font-semibold text-[#0f0f0f] text-4xl">
              Entrepreneurship isn&#39;t for everyone
            </h2>

            <Button className="w-[143.5px] h-[39.5px] rounded-[100px] bg-[#0f0f0f] relative">
              <span className="font-['Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px]">
                More about us
              </span>
              <div className="w-[148px] bg-[#9a9897] absolute h-px top-10 -left-0.5 rounded-[100px]" />
            </Button>
          </div>

          {/* Middle and right text columns */}
          {textColumns.map((column) => (
            <div
              key={column.id}
              className="w-full md:w-[430px] font-['Raleway',Helvetica] font-normal text-medium text-[15px] tracking-[-0.30px] leading-[19.5px]"
            >
              {column.content}
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-8 md:mt-[117px] md:ml-[495px] max-w-[444px] font-['Raleway',Helvetica] font-normal text-medium text-[15px] tracking-[-0.30px] leading-[19.5px]">
          We bring expertise, ambition, and a touch of creative rebellion to
          everything we do. If you&apos;re looking for a partner who thinks
          beyond the obvious and challenges the status quo, let&apos;s make
          something extraordinary together.
        </div>
      </div>
    </section>
  );
};
