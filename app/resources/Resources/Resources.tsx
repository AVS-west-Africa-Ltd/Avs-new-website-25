 "use client";

import { FilterTabs } from "@/components/resources/filter-tab"
import { TemplateGrid } from "@/components/resources/template-grid"

// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export interface TemplateCardProps {
//   imageSrc: string;
//   title: string;
//   author: string;
//   downloads: string;
//   className?: string;
//   imageClassName?: string;
//   hasOverlayText?: boolean;
//   overlayText?: string;
//   link: string;
// }

// export interface TemplateHeaderProps {
//   title: string;
//   description: string;
// }

// export const TemplateHeader: React.FC<TemplateHeaderProps> = ({
//   title,
//   description,
// }) => {
//   return (
//     <header className="w-full max-w-2xl mx-auto md:mx-0">
//       <h1 className="text-xl md:text-2xl font-semibold text-black">{title}</h1>
//       <p className="mt-2 md:mt-3 text-sm md:text-base text-zinc-600">
//         {description}
//       </p>
//     </header>
//   );
// };

// export const TemplateCard: React.FC<TemplateCardProps> = ({
//   imageSrc,
//   title,
//   author,
//   downloads,
//   className = "",
//   imageClassName = "",
//   hasOverlayText = false,
//   overlayText,
//   link,
// }) => {
//   return (
//     <Link
//       href={link}
//       className="flex flex-col group hover:opacity-95 transition-opacity duration-300 w-full sm:w-full"
//     >
//       <div className="flex flex-col h-full">
//         <div
//           className={`overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl w-full ${className}`}
//         >
//           <div className={`relative w-full ${imageClassName || "pt-[75%]"}`}>
//             <Image
//               src={imageSrc}
//               alt={title}
//               fill
//               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//               className="object-cover w-full h-full"
//               priority
//             />
//           </div>
//         </div>
//         <div className="flex justify-between mt-3 md:mt-4">
//           <div className="text-black pr-2">
//             <h2 className="text-sm md:text-base font-medium line-clamp-2">
//               {title}
//             </h2>
//             <p className="mt-1 text-xs md:text-sm">
//               by <span className="font-semibold">{author}</span>
//             </p>
//           </div>
//           <p className="text-xs md:text-sm font-semibold text-zinc-600 whitespace-nowrap">
//             {downloads}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export const ResourceSection: React.FC = () => {
//   return (
//     <div className="pb-16">
//       <section className="px-4 sm:px-6 lg:px-8">
//         <TemplateHeader
//           title="Ecosystem Mapping Templates"
//           description="Identify key players, relationships, and opportunities in your industry to position your startup strategically."
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-4 lg:gap-6 mt-6 md:mt-8">
//           <TemplateCard
//             imageSrc="/assets/resources/vs1.svg"
//             title="Vision Statement Template"
//             author="A Venture Studio"
//             downloads="510+ downloads"
//             className="bg-[#1C4240]"
//             hasOverlayText={true}
//             overlayText=""
//             link="/resources/1?template=Vision%20Statement%20Template"
//           />
//           <TemplateCard
//             imageSrc="/assets/resources/kyp.svg"
//             title="Know Your Product Template"
//             author="A Venture Studio"
//             downloads="600+ downloads"
//             className="bg-[#F0D8B1]"
//             imageClassName="pt-[75%]"
//             link="/resources/2?template=Know%20Your%20Product%20Template"
//           />
//           <TemplateCard
//             imageSrc="/assets/resources/fpm.svg"
//             title="Feature Prioritisation Matrix Template"
//             author="A Venture Studio"
//             downloads="230+ downloads"
//             className="bg-[#939393]"
//             imageClassName="pt-[75%]"
//             link="/resources/3?template=Feature%20Prioritization%20Matrix%20Template"
//           />
//         </div>
//       </section>
// {/* 
//       <section className="px-4 sm:px-6 lg:px-8 mt-12">
//         <TemplateHeader
//           title="User Flow Charts"
//           description="Convey your ideas with user flows."
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-4 lg:gap-6 mt-6 md:mt-8">
//           <TemplateCard
//             imageSrc="/assets/resources/ufc1.svg"
//             title="Ultimate User Flow Chart Template"
//             author="A Venture Studio"
//             downloads="190+ downloads"
//             className="bg-slate-100"
//             hasOverlayText={true}
//             overlayText=""
//             link="/resources/4?template=Ultimate%20User%20Flow%20Chart%20Template"
//           />
//           <TemplateCard
//             imageSrc="/assets/resources/ofc.svg"
//             title="Onboarding Flow Chart Template"
//             author="A Venture Studio"
//             downloads="130+ downloads"
//             className="bg-[#EEB1F0]"
//             imageClassName="pt-[75%]"
//             link="/resources/5?template=Onboarding%20Flow%20Chart%20Template"
//           />
//           <TemplateCard
//             imageSrc="/assets/resources/cft.svg"
//             title="E-Commerce Flowchart Template"
//             author="A Venture Studio"
//             downloads="500+ downloads"
//             className="bg-[#FFE2D3]"
//             imageClassName="pt-[75%]"
//             link="/resources/6?template=e-commerce%20Flowchart%20Template"
//           />
//         </div>
//       </section>

//       <section className="px-4 sm:px-6 lg:px-8 mt-12">
//         <TemplateHeader
//           title="Pitch Deck"
//           description="Use our pitch deck framework to craft compelling presentations that capture investor attention and confidence."
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-4 lg:gap-6 mt-6 md:mt-8">
//           <TemplateCard
//             imageSrc="/assets/resources/ypd.svg"
//             title="Los Blancos Hermanos Pitch Deck Template"
//             author="A Venture Studio"
//             downloads="300+ downloads"
//             className="bg-gray-100"
//             hasOverlayText={true}
//             overlayText=""
//             link="/resources/7?template=Los%20Blancos%20Hermanos%20Pitch%20Deck%20Template"
//           />
//           <TemplateCard
//             imageSrc="/assets/resources/pd.svg"
//             title="Le Orange Pitch Deck Template"
//             author="A Venture Studio"
//             downloads="200+ downloads"
//             className="bg-[#EEB1F0]"
//             imageClassName="pt-[75%]"
//             link="/resources/8?template=Le%20Orange%20Pitch%20Deck%20Template"
//           />
//           <TemplateCard
//             imageSrc="/assets/resources/ppd.svg"
//             title="Peaches Pitch Deck Template"
//             author="A Venture Studio"
//             downloads="412+ downloads"
//             className="bg-[#FFE2D3]"
//             imageClassName="pt-[75%]"
//             link="/resources/9?template=Peaches%20Pitch%20Deck%20Template"
//           />
//         </div>
//       </section> */}
//     </div>
//   );
// };

// export default ResourceSection;



export const ResourceSections: React.FC = () => {
return (
  <main className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <FilterTabs />
     

      <TemplateGrid />
    </div>
  </main>
)
}