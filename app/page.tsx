'use client'

import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { VisionSection } from "./sections/VisionSection";
import { PartnershipSection } from "./sections/PartnershipSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import CaseStudiesShowcase from "./sections/TestimonialsSection/CaseStudiesShowcase";
import { AIFeatureSection } from "./sections/IntroductionSection/AIFeatureSection";
import { useQuery } from "@tanstack/react-query";
import {
  Sparkles,
  PenTool,
  Code2,
  Layers3,
  Palette,
  Brush,
  Monitor,
  Zap,
} from 'lucide-react';
import { sanityPageConfig } from "@/constants/constants";
import client from "@/sanity";

export default function Home() {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['page', sanityPageConfig.landingPageId],
    queryFn: () => fetchPageData(sanityPageConfig.landingPageId),
  });

  const {
    data: pageData2,
    isLoading: isLoading2,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.caseStudyPageId],
    queryFn: () => fetchPageData(sanityPageConfig.caseStudyPageId),
  });


  const fetchPageData = async (pageId: string) => {
    const query = `*[_type == "page" && _id == "${pageId}"][0]`;
    const result = await client.fetch(query);
    return result;
  };






 
  
// const ArtisticLoader=()=> {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4 relative overflow-hidden">
//         {/* Custom animations */}
//         <style>
//           {`
//             @keyframes spin-slow {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
  
//             @keyframes fadeInUp {
//               0% { opacity: 0; transform: translateY(20px); }
//               100% { opacity: 1; transform: translateY(0); }
//             }
  
//             .animate-spin-slow {
//               animation: spin-slow 12s linear infinite;
//             }
  
//             .animate-fade-in-up {
//               animation: fadeInUp 1s ease-out both;
//             }
  
//             .animate-fade-in-up.delay-200 {
//               animation-delay: 0.2s;
//             }
//           `}
//         </style>
  
//         <div className="relative w-64 h-64 mb-8">
//           {/* Rotating ring of icons */}
//           <div className="absolute inset-0 animate-spin-slow">
//             <div className="w-full h-full relative">
//               <IconOrbit icon={<PenTool className="text-indigo-600 w-6 h-6" />} angle={0} />
//               <IconOrbit icon={<Code2 className="text-rose-600 w-6 h-6" />} angle={45} />
//               <IconOrbit icon={<Layers3 className="text-yellow-500 w-6 h-6" />} angle={90} />
//               <IconOrbit icon={<Palette className="text-green-500 w-6 h-6" />} angle={135} />
//               <IconOrbit icon={<Brush className="text-blue-500 w-6 h-6" />} angle={180} />
//               <IconOrbit icon={<Monitor className="text-teal-500 w-6 h-6" />} angle={225} />
//               <IconOrbit icon={<Zap className="text-orange-500 w-6 h-6" />} angle={270} />
//               <IconOrbit icon={<Sparkles className="text-purple-500 w-6 h-6" />} angle={315} />
//             </div>
//           </div>
  
//           {/* Center icon */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg border-4 border-indigo-300 z-10">
//             <Sparkles className="w-10 h-10 text-indigo-500 animate-pulse" />
//           </div>
//         </div>
  
//         <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 whitespace-nowrap border-r-2 border-black pr-2 font-mono animate-type">
//   A Venture Studio
// </h1>

// <style>
//   {`
//     @keyframes type {
//       0% { width: 0 }
//       100% { width: 14ch }
//     }
//     .animate-type {
//       overflow: hidden;
//       white-space: nowrap;
//       width: 0;
//       animation-iteration-count:infinite;
//       animation: type 2s steps(14) forwards, blink 0.7s infinite;
//     }

//     @keyframes blink {
//       0%, 100% { border-color: transparent }
//       50% { border-color: black }
//     }
//   `}
// </style>

//         <p className="text-lg text-gray-600 animate-fade-in-up delay-200 text-center">
//           Designing Brilliance. Coding Intelligence... 
//         </p>
  
//         {/* Dots */}
//         <div className="mt-6 flex space-x-2 animate-pulse">
//           <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//         </div>
//       </div>
//     );
//   }
  
// components/MinimalLoader.tsx
const MinimalLoader = () => {
  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
  </div>
  );
};



  function IconOrbit({ icon, angle }: { icon: React.ReactNode; angle: number }) {
    const radians = (angle * Math.PI) / 180;
    const radius = 100;
  
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
  
    return (
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
        }}
      >
        <div className="bg-white shadow-md rounded-full p-2">{icon}</div>
      </div>
    );
  }
  



if (isLoading) {
  return (
    <MinimalLoader />
  
  );

}
// return
  // console.log("pageData2", pageData2);

  if (pageData?.contentBlocks && pageData2?.contentBlocks) {
    const heroTextBlock = pageData.contentBlocks.find(
      (block: any) => block._type === 'heroTextBlock'
    );
    const heroFeatureImageBlock = pageData.contentBlocks.find(
      (block: any) => block._type === 'heroFeatureImageBlock'
    );
    const homePartnersSection = pageData.contentBlocks.find(
      (block: any) => block._type === 'homePartnersSection'
    );
    const homeCaseStudiesSection = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeCaseStudiesSection'
    );
    const homeFeatureAnnouncement = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeFeatureAnnouncement'
    );

    const homeExpertiseShowcase = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeExpertiseShowcase'
    );

    const homeTextImageSection = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeTextImageSection'
    );
    const homeMissionStatement = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeMissionStatement'
    );
    const homeFeatureGrid = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeFeatureGrid'
    );
    const homecCTAWithMedia = pageData.contentBlocks.find(
      (block: any) => block._type === 'homecCTAWithMedia'
    );

    const { contentBlocks } = pageData2;

    const caseStudiesBlock = contentBlocks?.filter(
      (block: any) => block._type === 'caseStudy'
    );

    // console.log("homeFeatureGrid", caseStudiesBlock);
    // console.log("homeCaseStudiesSection", homeCaseStudiesSection);
    return (
      <div className="bg-white w-full">
        <div className="bg-white w-full mx-auto">
          {heroTextBlock && (<CaseStudiesSection data={heroTextBlock} heroFeatureImageBlock={heroFeatureImageBlock} />)}
          {homePartnersSection && (<HeroSection data={homePartnersSection} />)}
          {homeCaseStudiesSection && (<CaseStudiesShowcase data={homeCaseStudiesSection} caseStudiesBlock={caseStudiesBlock} />)}
          {homeFeatureAnnouncement && <AIFeatureSection data={homeFeatureAnnouncement} />}
          {homeExpertiseShowcase && <VisionSection data={homeExpertiseShowcase} />}
          {homeMissionStatement && <PartnershipSection data={homeMissionStatement} />}
          {homeFeatureGrid && <FooterSection data={homeFeatureGrid} />}
          {homecCTAWithMedia && <FeaturesSection data={homecCTAWithMedia} />}
        </div>
      </div>
    );
  }

}
