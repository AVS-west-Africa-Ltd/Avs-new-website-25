"use client";

import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { AIToolsSection } from "./sections/AIToolsSection";
import { AITransformationSection } from "./sections/AITransformationSection";
import { FAQSection } from "./sections/FAQSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AIToolsSection />
      <AITransformationSection />
      <FAQSection />
    </main>
  );
}