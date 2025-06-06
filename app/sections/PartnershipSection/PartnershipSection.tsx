"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PartnershipSection = ({ data }: any) => {
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
  if(!data){
  return (
 


<section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-2">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
  {/* Left side with heading and CTA */}
  <div className="md:col-span-3">
    <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold tracking-tight mb-4">
      <span className="whitespace-nowrap">Investing in yourself </span> is important
      
    </h2>
  </div>

  {/* Middle paragraph */}
  <div className="md:col-span-4">
    <p className="text-gray-700 text-sm md:text-sm leading-relaxed">
      {/* At A Venture Studio (AVS), we rethink how businesses are built. Too often, companies chase trends over strategy, prioritising short-term gains over lasting impact. We do things differently. */}
      At A Venture Studio (AVS), we rethink how businesses are built. Too often, companies chase trends over strategy, prioritising short-term gains over lasting impact. We do things differently. By combining expertise, ambition, and creative rebellion, we create ventures designed to endure—not just to grow. If you’re ready to break the mould, let’s build something remarkable.
      
    </p>
  </div>

  {/* Right paragraph */}
  <div className="md:col-span-5">
    <p className="text-gray-700 text-sm md:text-sm leading-relaxed">
    AVS was founded with a clear purpose: to rethink how digital ventures are built. Too often, businesses prioritise speed over substance, burning through resources without a clear path to longevity. We saw an opportunity to change that. By combining sharp commercial insight with hands-on execution, we create ventures that aren’t just built to launch—they’re built to lead.
    </p>
  </div>
</div>

      </div>
    </section>

  )} else return (

    <section className="w-full bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column (Heading & Button) */}
        <div className="md:col-span-3">
        <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold tracking-tight mb-4">
        {data?.title?.includes(" is ") ? (
    <>
      {data.title.split(" is ")[0]}
      <br/>
      is {data.title.split(" is ")[1]}
    </>
  ) : (
    data?.title
  )}
          </h2>
{/* 
          <button className="w-full md:w-auto rounded-full bg-[#0f0f0f] px-6 py-3">
            <span className="font-['Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px]">
              More about us
            </span>
          </button> */}
        </div>

        {/* Right Columns (Text Content) */}
        {/* Middle paragraph */}
  <div className="md:col-span-4">
    <p className="text-gray-700 text-sm md:text-sm leading-relaxed">
    {data?.columnOneText}
      
    </p>
  </div>

  {/* Right paragraph */}
  <div className="md:col-span-5">
    <p className="text-gray-700 text-sm md:text-sm leading-relaxed">
    {data?.columnTwoText}
    </p>
  </div>
      </div>
    </div>
  </section>
  )
}



  

