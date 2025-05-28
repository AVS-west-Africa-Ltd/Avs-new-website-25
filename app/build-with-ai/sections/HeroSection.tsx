"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ballImage from "@/public/assets/ball-image.svg"; 

export const HeroSection = () => {
  const router = useRouter();
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          AI That <span className="italic">Builds With You</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mb-8 text-lg">
          Create digital products, AI-first experiences and build experiences, visuals, and products with our
          tech-first approach. Our AI toolset lets you create designs, logos, and names for your business 
          - or use our expertise to become AI-first in your industry.
        </p>
        <Button 
          onClick={() => router.push("/build-with-ai")}
          className="rounded-full bg-black text-white px-8 py-2 font-medium hover:bg-gray-800 transition-colors"
        >
          Build With AI Tools
        </Button>
      </div>
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-teal-400 to-blue-400 h-80 md:h-96 lg:h-[400px]">
        <div className="relative w-full h-full">
          <Image 
            src={ballImage} 
            alt="Decorative ball"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
      </div>
    </section>
  );
};