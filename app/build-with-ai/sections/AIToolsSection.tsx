"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Idea from "@/public/assets/idea.svg"; 
import Name from "@/public/assets/business-name.svg"; 
import Logo from "@/public/assets/logo-gen.svg"; 

export const AIToolsSection = () => {
  const router = useRouter();
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Idea Generator */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-24">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Idea Generator</h2>
          <p className="text-gray-600 mb-4">
            Get great ideas instantly about your idea and turn it into a business. AI-powered
            ideation comes straight from your needs — what works and what doesn't.
          </p>
          <p className="text-gray-600 mb-6">
            It's free! Just tell us more to start building with clarity and direction.
          </p>
          <Button 
            onClick={() => router.push("/idea-generator")}
            className="rounded-full bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors"
          >
            Try Idea Generator
          </Button>
        </div>
        <div className="flex-1 w-full max-w-md mx-auto">
          <div className="relative w-full aspect-square">
            <Image 
              src={Idea} 
              alt="Idea Generator Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Logo Generator */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-24">
        <div className="flex-1 w-full max-w-md mx-auto">
          <div className="relative w-full aspect-square">
            <Image 
              src={Logo} 
              alt="Logo Generator Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Logo Generator</h2>
          <p className="text-gray-600 mb-4">
            No designer? No problem!
          </p>
          <p className="text-gray-600 mb-4">
            Generate beautiful logos with just basic details and let our AI create options quickly. Perfect if you need a logo for your website, products, or digital presence.
          </p>
          <p className="text-gray-600 mb-6">
            Fast, simple, and impressively accurate — perfect for early-stage businesses or refreshing your brand.
          </p>
          <Button 
            onClick={() => router.push("/logo-generator")}
            className="rounded-full bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors"
          >
            Try Logo Generator
          </Button>
        </div>
      </div>
      
      {/* Business Name Generator */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Business Name Generator</h2>
          <p className="text-gray-600 mb-4">
            Get brilliant, memorable, relevant, and brand-friendly names. Use our AI to generate immediately available names using smart research.
          </p>
          <p className="text-gray-600 mb-6">
            It's the perfect start to your branding journey, with all business names pre-verified for use.
          </p>
          <Button 
            onClick={() => router.push("/business-name-generator")}
            className="rounded-full bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors"
          >
            Try Business Name Generator
          </Button>
        </div>
        <div className="flex-1 w-full max-w-md mx-auto">
          <div className="relative w-full aspect-square">
            <Image 
              src={Name} 
              alt="Business Name Generator Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};