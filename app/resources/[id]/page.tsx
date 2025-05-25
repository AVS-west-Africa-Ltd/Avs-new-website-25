// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "./styles.css";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { useQuery } from "@tanstack/react-query";
// import { sanityPageConfig } from "@/constants/constants";
// import client from "@/sanity";

// interface TemplateCardProps {
//   name: string;
//   creator: string;
//   type: string;
//   downloads: string;
//   description?: string;
//   link: string;
// }

// const TemplateCard: React.FC<TemplateCardProps> = ({
//   name,
//   creator,
//   type,
//   downloads,
//   description,
//   link: downloadUrl,
// }) => {
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = downloadUrl;
//     link.download = "figma.deck";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="w-full p-4 md:p-6 flex flex-col justify-center gap-2 md:gap-4">
//       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
//         {name}
//       </h2>
//       <div className="text-sm md:text-base text-gray-600">
//         by <strong>{creator}</strong>
//       </div>
//       <div className="flex flex-col gap-2 font-sans">
//         <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
//           <span>File format:</span>
//           <div className="flex items-center gap-2 text-sm">
//             <span className="font-medium flex items-center gap-2">
//               <span>
//                 <Image
//                   src="/assets/figma-icon.png"
//                   alt="Figma Icon"
//                   width={24}
//                   height={24}
//                   className="w-6 h-6"
//                 />
//               </span>
//               <span>{type}</span>
//             </span>
//             <span className="mx-2">•</span>
//             <span>{downloads} downloads</span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-2">
//         <button
//           onClick={handleDownload}
//           className="flex items-center justify-center gap-2 rounded-full bg-gray-900 w-full md:w-[140px] px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-gray-800 transition-colors"
//         >
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 16L12 8"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M9 13L12 16L15 13"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="text-sm font-medium text-white">Download</span>
//         </button>
//       </div>
//       {description && (
//         <div className="mt-4 md:mt-6">
//           <h3 className="font-bold text-gray-900">Overview</h3>
//           <p className="mt-2 text-sm text-gray-700">{description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const TemplateSection = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const { id } = useParams();

//   return (
//     <>
//       {Number(id) === 1 && (
//         <div className="flex flex-col gap-2 p-1">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <div className="absolute inset-0">
//                   <Image
//                     src="/assets/vision statement.png"
//                     alt="Slide 1"
//                     fill
//                     style={{ objectFit: "contain", padding: "20px" }}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <div className="absolute inset-0">
//                   <Image
//                     src="/assets/Vision-Statement-Template/KYP2.PNG"
//                     alt="Slide 2"
//                     fill
//                     style={{ objectFit: "contain", padding: "20px" }}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer bg-[#F0F0F0]">
//                 <div className="absolute inset-0">
//                   <Image
//                     src="/assets/Vision-Statement-Template/KYP.PNG"
//                     alt="Thumbnail 1"
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer bg-[#F0F0F0]">
//                 <div className="absolute inset-0">
//                   <Image
//                     src="/assets/Vision-Statement-Template/KYP2.PNG"
//                     alt="Slide 2"
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 2 && (
//         <div className="flex flex-col gap-2  p-1">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Know-Your-Product/KYP2PNG.PNG"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Know-Your-Product/KYP.PNG"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Know-Your-Product/KYP2PNG.PNG"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Know-Your-Product/KYP.PNG"
//                   alt="Thumbnail 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 3 && (
//         <div className="flex flex-col gap-2  p-1">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix.PNG"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix 1.PNG"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix 3.PNG"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix.PNG"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix 1.PNG"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 4 && (
//         <div className="flex flex-col gap-2  p-1">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/Ultimate-Flow-Chart-Template/Cover.png"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/Ultimate-Flow-Chart-Template/1.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/Ultimate-Flow-Chart-Template/2.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/Ultimate-Flow-Chart-Template/Cover.png"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/Ultimate-Flow-Chart-Template/1.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/Ultimate-Flow-Chart-Template/1.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 5 && (
//         <div className="flex flex-col gap-2  p-1">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/Onboarding Flow chart template/Cover.png"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/Onboarding Flow chart template/1.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/Onboarding Flow chart template/2.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/Onboarding Flow chart template/Cover.png"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/Onboarding Flow chart template/1.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/Onboarding Flow chart template/2.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 6 && (
//         <div className="flex flex-col gap-2  p-1">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/e-commerce Flowchart Template/cover.png"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/e-commerce Flowchart Template/1.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/User-Flow-Charts/e-commerce Flowchart Template/2.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/e-commerce Flowchart Template/cover.png"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/e-commerce Flowchart Template/1.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/User-Flow-Charts/e-commerce Flowchart Template/2.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 7 && (
//         <div className="flex flex-col gap-2 p-4 rounded-lg">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div
//                 className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]"
//                 style={{ padding: "20px", backgroundColor: "#f2f2f2" }}
//               >
//                 <Image
//                   src="/assets/Pitch Decks/Los Blancos Hermanos Pitch Deck/1.png"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Los Blancos Hermanos Pitch Deck/2.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Los Blancos Hermanos Pitch Deck/3.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Los Blancos Hermanos Pitch Deck/1.png"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Los Blancos Hermanos Pitch Deck/2.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Los Blancos Hermanos Pitch Deck/3.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 8 && (
//         <div className="flex flex-col gap-2  p-4">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div
//                 className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]"
//                 style={{ padding: "20px", backgroundColor: "#f8fefd" }}
//               >
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/1.png"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/2.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/3.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/4.png"
//                   alt="Slide 4"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/5.png"
//                   alt="Slide 5"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/1.png"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/2.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/3.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/4.png"
//                   alt="Slide 4"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Le Orange pitch deck/5.png"
//                   alt="Slide 5"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}

//       {Number(id) === 9 && (
//         <div className="flex flex-col gap-2  p-1">
//           <Swiper
//             loop={true}
//             spaceBetween={10}
//             navigation={false}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper2"
//           >
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Peaches pitch deck/1.png"
//                   alt="Slide 1"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Peaches pitch deck/2.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
//                 <Image
//                   src="/assets/Pitch Decks/Peaches pitch deck/3.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "contain", padding: "20px" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//           <Swiper
//             //@ts-expect-error Missing type definitions for external library
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={10}
//             slidesPerView={4}
//             freeMode={true}
//             watchSlidesProgress={true}
//             modules={[FreeMode, Navigation, Thumbs]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Peaches pitch deck/1.png"
//                   alt="Thumbnail 1"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Peaches pitch deck/2.png"
//                   alt="Slide 2"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer">
//                 <Image
//                   src="/assets/Pitch Decks/Peaches pitch deck/3.png"
//                   alt="Slide 3"
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       )}
//     </>
//   );
// };

// export default function Home() {
//   const { id } = useParams();
//   const matchingTemplates: any[] = [];

//   const {
//     data: pageData,
//     isLoading: isLoading,
//   } = useQuery({
//     queryKey: ['page', sanityPageConfig.resourcesPageId],
//     queryFn: () => fetchPageData(sanityPageConfig.resourcesPageId),
//   });

//   const fetchPageData = async (pageId: string) => {
//     const query = `*[_type == "page" && _id == "${pageId}" && _key == ${id}][0]`;
//     const result = await client.fetch(query);
//     return result;
//   };

//   console.log("ID ", id);
//   console.log("Key Data ", pageData);
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (!pageData) {
//     return <div>No data found</div>;
//   }
//   const { contentBlocks } = pageData;

//   contentBlocks.forEach((item: any, index: number) => {
//     if (item.templates && Array.isArray(item.templates)) {
//       item.templates.forEach((template: any) => {
//         if (template._key === id) {
//           matchingTemplates.push({
//             categoryIndex: index,
//             template: template,
//             templateIndex: item.templates.indexOf(template),
//           });
//         }
//       });
//     }
//   });
  
//   if (matchingTemplates.length > 0) {
//     console.log(`Found matching template(s) with id: ${id}`);
//     matchingTemplates.forEach(match => {
//       console.log(`- Category Index: ${match.categoryIndex}, Template Index: ${match.templateIndex}, Template:`, match.template);
//     });
//   } else {
//     console.log(`No template found with id: ${id}`);
//   }
//   return (
//     <div className="min-h-screen bg-gray- mt-16">
//       <div className="container mx-auto px-4 py-8 md:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="lg:order-last">
//             <TemplateSection />
//           </div>
//           <div className="flex items-center">
//             {Number(id) === 1 && (
//               <TemplateCard
//                 name="Vision Statement Template"
//                 creator="A Venture Studio"
//                 type="Figma"
//                 downloads="510+"
//                 link="/assets/Vision-Statement-Template/Vision-Statement-Template.jam"
//                 description="An ecosystem mapping workshop is a collaborative session where participants work together to visually represent the various entities (organisations, individuals, resources) within a specific ecosystem and map their interconnections and relationships. The goal is to gain a shared understanding of the system's dynamics, identify key players, understand resource flows, and uncover opportunities or challenges within the ecosystem. This process often involves brainstorming, visualising connections, and analysing the resulting map to inform strategies and collaborations."
//               />
//             )}

//             {Number(id) === 2 && (
//               <TemplateCard
//                 name="Know Your Product Template"
//                 creator="A Venture Studio"
//                 type="Figma Slide Deck"
//                 downloads="600+"
//                 link="/assets/Vision-Statement-Template/Know-Your-Product-Template.jam"
//                 description="An ecosystem mapping workshop is a collaborative session where participants work together to visually represent the various entities (organisations, individuals, resources) within a specific ecosystem and map their interconnections and relationships. The goal is to gain a shared understanding of the system's dynamics, identify key players, understand resource flows, and uncover opportunities or challenges within the ecosystem. This process often involves brainstorming, visualising connections, and analysing the resulting map to inform strategies and collaborations."
//               />
//             )}

//             {Number(id) === 3 && (
//               <TemplateCard
//                 name="Feature Prioritisation Matrix Template"
//                 creator="A Venture Studio"
//                 type="Figma"
//                 downloads="230+"
//                 link="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix.jam"
//                 description="An ecosystem mapping workshop is a collaborative session where participants work together to visually represent the various entities (organisations, individuals, resources) within a specific ecosystem and map their interconnections and relationships. The goal is to gain a shared understanding of the system's dynamics, identify key players, understand resource flows, and uncover opportunities or challenges within the ecosystem. This process often involves brainstorming, visualising connections, and analysing the resulting map to inform strategies and collaborations."
//               />
//             )}

//             {Number(id) === 4 && (
//               <TemplateCard
//                 name="Ultimate User Flow Chart Template"
//                 creator="A Venture Studio"
//                 type="Figma"
//                 downloads="190+"
//                 link="/assets/User-Flow-Charts/Ultimate-Flow-Chart-Template/Ultimate Flow Chart Template.fig"
//                 description="A user flow chart is a visual representation of the steps a user takes to complete a specific task or achieve a goal within a website, app, or digital product. It helps designers, developers, and stakeholders understand the user's journey, identify friction points, and create intuitive, user-friendly experiences."
//               />
//             )}

//             {Number(id) === 5 && (
//               <TemplateCard
//                 name="Onboarding Flow chart template"
//                 creator="A Venture Studio"
//                 type="Figma Slide Deck"
//                 downloads="130+"
//                 link="/assets/User-Flow-Charts/Onboarding Flow chart template/Onboarding Flow chart template.jam"
//                 description="A user flow chart is a visual representation of the steps a user takes to complete a specific task or achieve a goal within a website, app, or digital product. It helps designers, developers, and stakeholders understand the user's journey, identify friction points, and create intuitive, user-friendly experiences."
//               />
//             )}

//             {Number(id) === 6 && (
//               <TemplateCard
//                 name="e-commerce Flowchart Template"
//                 creator="A Venture Studio"
//                 type="Figma"
//                 downloads="500+"
//                 link="/assets/User-Flow-Charts/e-commerce Flowchart Template/e-commerce Flowchart Template.jam"
//                 description="A user flow chart is a visual representation of the steps a user takes to complete a specific task or achieve a goal within a website, app, or digital product. It helps designers, developers, and stakeholders understand the user's journey, identify friction points, and create intuitive, user-friendly experiences."
//               />
//             )}

//             {Number(id) === 7 && (
//               <TemplateCard
//                 name="Los Blancos Hermanos Pitch Deck"
//                 creator="A Venture Studio"
//                 type="Figma"
//                 downloads="300+"
//                 link="/assets/Pitch Decks/Los Blancos Hermanos Pitch Deck/Los Blancos Hermanos.deck"
//                 description="A pitch deck is a concise, visually engaging presentation used to communicate the key aspects of a business, product, or project to potential investors, partners, or stakeholders. Its primary goal is to generate interest, spark conversation, and secure funding or support."
//               />
//             )}

//             {Number(id) === 8 && (
//               <TemplateCard
//                 name="Le Orange Pitch Deck Template"
//                 creator="A Venture Studio"
//                 type="Figma Slide Deck"
//                 downloads="200+"
//                 link="/assets/Pitch Decks/Le Orange pitch deck/Le Orange.deck"
//                 description="A pitch deck is a concise, visually engaging presentation used to communicate the key aspects of a business, product, or project to potential investors, partners, or stakeholders. Its primary goal is to generate interest, spark conversation, and secure funding or support."
//               />
//             )}

//             {Number(id) === 9 && (
//               <TemplateCard
//                 name="Peaches Pitch Deck Template"
//                 creator="A Venture Studio"
//                 type="Figma"
//                 downloads="412+"
//                 link="/assets/Pitch Decks/Peaches pitch deck/Peaches.deck"
//                 description="A pitch deck is a concise, visually engaging presentation used to communicate the key aspects of a business, product, or project to potential investors, partners, or stakeholders. Its primary goal is to generate interest, spark conversation, and secure funding or support."
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



































"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { sanityPageConfig } from "@/constants/constants";
import client, { urlFor } from "@/sanity";

interface TemplateCardProps {
  title: string;
  creator: string;
  type: string;
  downloads: string;
  description?: string;
  link: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  creator,
  type,
  downloads,
  description,
  link: downloadUrl,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "figma.deck";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full p-4 md:p-6 flex flex-col justify-center gap-2 md:gap-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      <div className="text-sm md:text-base text-gray-600">
        by <strong>{creator}</strong>
      </div>
      <div className="flex flex-col gap-2 font-sans">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <span>File format:</span>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium flex items-center gap-2">
              <span>
                <Image
                  src="/assets/figma-icon.png"
                  alt="Figma Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </span>
              <span>{type}</span>
            </span>
            <span className="mx-2">•</span>
            <span>{downloads} downloads</span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 rounded-full bg-gray-900 w-full md:w-[140px] px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-gray-800 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16L12 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13L12 16L15 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium text-white">Download</span>
        </button>
      </div>
      {description && (
        <div className="mt-4 md:mt-6">
          <h3 className="font-bold text-gray-900">Overview</h3>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

import type { Swiper as SwiperClass } from "swiper";

const TemplateSection = ({ template }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  if (!template?.gallery) {
    return <div>No images available</div>;
  }

  return (
    <div className="flex flex-col gap-2 p-1">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {template.gallery.map((image: any, index: number) => (
          <SwiperSlide key={`main-${index}`}>
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden bg-[#F0F0F0]">
              <div className="absolute inset-0">
                <Image
                   src={urlFor(image.asset).url()}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {template.gallery.map((image: any, index: any) => (
          <SwiperSlide key={`thumb-${index}`}>
            <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer bg-[#F0F0F0]">
              <div className="absolute inset-0">
                <Image
                   src={urlFor(image.asset).url()}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// export default function Home() {
//   const { id } = useParams();
//   const matchingTemplates: any[] = [];

//   const {
//     data: pageData,
//     isLoading: isLoading,
//   } = useQuery({
//     queryKey: ['page', sanityPageConfig.resourcesPageId],
//     queryFn: () => fetchPageData(sanityPageConfig.resourcesPageId),
//   });

//   const fetchPageData = async (pageId: string) => {
//     const query = `*[_type == "page" && _id == "${pageId}" && _key == ${id}][0]`;
//     const result = await client.fetch(query);
//     return result;
//   };

//   console.log("ID ", id);
//   console.log("Key Data ", pageData);
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (!pageData) {
//     return <div>No data found</div>;
//   }
//   const { contentBlocks } = pageData;

//   contentBlocks.forEach((item: any, index: number) => {
//     if (item.templates && Array.isArray(item.templates)) {
//       item.templates.forEach((template: any) => {
//         if (template._key === id) {
//           matchingTemplates.push({
//             categoryIndex: index,
//             template: template,
//             templateIndex: item.templates.indexOf(template),
//           });
//         }
//       });
//     }
//   });
  
//   if (matchingTemplates.length > 0) {
//     console.log(`Found matching template(s) with id: ${id}`);
//     matchingTemplates.forEach(match => {
//       console.log(`- Category Index: ${match.categoryIndex}, Template Index: ${match.templateIndex}, Template:`, match.template);
//     });
//   } else {
//     console.log(`No template found with id: ${id}`);
//   }
//   return (
//     <div className="min-h-screen bg-gray- mt-16">
//       <div className="container mx-auto px-4 py-8 md:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="lg:order-last">
//             <TemplateSection template={template} />
//           </div>
//           <div className="flex items-center">
//             <TemplateCard
//               name={template.title}
//               creator={template.author || 'A Venture Studio'}
//               type={template.fileFormat}
//               downloads={template.downloads}
//               link={template.downloadUrl || '#'} // You'll need to add this field to your Sanity schema
//               description={template.overview}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  const { id } = useParams();
  const [matchingTemplate, setMatchingTemplate] = useState<any>(null);
  const [isLoadingTemplate, setIsLoadingTemplate] = useState(true); // Add loading state for template

  const {
    data: pageData,
    isLoading: isPageLoading,
    isError: isPageError,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.resourcesPageId],
    queryFn: () => fetchPageData(sanityPageConfig.resourcesPageId),
  });

  React.useEffect(() => {
    if (pageData?.[0]?.contentBlocks) {
      let found = false;
      pageData[0].contentBlocks.forEach((item: any) => {
        if (item.templates && Array.isArray(item.templates)) {
          const foundTemplate = item.templates.find((template: any) => template._key === id);
          if (foundTemplate) {
            setMatchingTemplate(foundTemplate);
            found = true;
          }
        }
      });
      setIsLoadingTemplate(false);
      if (!found) setMatchingTemplate(null);
    } else if (pageData) {
      setIsLoadingTemplate(false);
      setMatchingTemplate(null);
    }
  }, [pageData, id]);

  const fetchPageData = async (pageId: string) => {
    const query = `*[_type == "page" && _id == "${pageId}"] {
      contentBlocks[]{
        _type,
        _key,
        ...,
        templates[]{
          _key,
          title,
          author,
          image,
          gallery,
          fileFormat,
          downloads,
          downloadUrl,
          overview
        }
      }
    }`;
    const result = await client.fetch(query);
    return result;
  };

  if (isPageLoading || isLoadingTemplate) {
    return <div>Loading template...</div>;
  }

  if (isPageError || !pageData) {
    return <div>Failed to load resources page</div>;
  }

  if (!matchingTemplate) {
    return <div>Template not found</div>;
  }

  console.log(`Found matching template with id: ${id}`);
  console.log(`- Template:`, matchingTemplate);

  return (
    <div className="min-h-screen bg-gray- mt-16">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:order-last">
            <TemplateSection template={matchingTemplate} />
          </div>
          <div className="flex items-center">
            <TemplateCard
              title={matchingTemplate.title}
              creator={matchingTemplate.author || 'A Venture Studio'}
              type={matchingTemplate.fileFormat}
              downloads={matchingTemplate.downloads}
              link={matchingTemplate.downloadUrl || '#'}
              description={matchingTemplate.overview}
            />
          </div>
        </div>
      </div>
    </div>
  );
}