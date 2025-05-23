// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useInView } from "react-intersection-observer";
// import { useRouter } from "next/navigation";

// interface CallToActionProps {
//   text: string;
//   onClick?: () => void;
// }
// export const CallToAction: React.FC<CallToActionProps> = ({
//   text,
//   onClick,
// }) => {
//   const router = useRouter();
//   return (
//     <button
//       onClick={
//         () => router.push("/resources/services")
//       }
//       className="mt-7 px-8 py-4  max-w-full text-base tracking-tight leading-tight text-white bg-stone-950 rounded-[100px] max-md:px-5 hover:bg-stone-800 transition-colors cursor-pointer"
//     >
//       {text}
//     </button>
//   );
// };

// export const AIFeatureSection = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);


//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.matchMedia("(max-width: 767px)").matches);
//     };

//     handleResize(); // Set initial value
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     }
//   }, [inView]);

//   return (
//     <section className="p-4 md:px-8">
//       <div
//         ref={ref}
//         className={`relative overflow-hidden px-4 md:pl-16 rounded-3xl py-[120px] mb-12 transition-opacity transform duration-1200 ease-out ${
//           isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
//         }`}
//       >
//         {/* Optimized Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             // src={isMobile ? "/assets/cont.jpeg" : "/assets/bg-s.svg"}
//             src="/assets/resources/one.jpeg"
//             alt="AI Feature Background"
//             fill
//             quality={75}
//             priority
//             className="object-cover"
//           />
//         </div>

//         <div className="relative z-10 flex flex-col md:flex-row gap-5 h-full">
//           <div
//             className={`w-full lg:w-[45%] transition-opacity transform duration-1000 ease-out delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-12"
//             }`}
//           >
//             <section className="flex flex-col items-start self-stretch my-auto w-full font-semibold text-white">
//               {/* <div className="rounded-[47px] border border-white bg-[rgba(255,255,255,0.30)] backdrop-blur-[35.5px] py-2.5 px-3.5">
//                 Coming soon on A Venture Studio
//               </div> */}
//               <h1 className="mt-4 text-3xl md:text-4xl lg:text-6xl">
//                 <span style={{ fontWeight: 500 }}>Business Model Canvas</span>{" "}
//               </h1>
//               <p className="self-stretch mt-4 md:mt-5 text-2xl text-neutral-100 max-md:max-w-full font-light">
//                 Define how your startup creates, delivers, and captures
//                 value—one building block at a time.
//               </p>
//             </section>
//             <CallToAction text="Start Mapping" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useRouter } from "next/navigation"

interface FeatureCardProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  backgroundImage: string
  backgroundGradient: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundGradient,
}) => {
  const router = useRouter()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl p-6 md:p-8 lg:p-12 transition-all duration-700 ease-out${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 text-left"
      }`}
      style={{ height: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* <div className="absolute inset-0 z-0" style={{ background: backgroundGradient }}></div> */}
        {backgroundImage && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={backgroundImage || "/placeholder.svg"}
              alt={title}
              fill
              quality={90}
              priority
              className={`object-cover transition-transform duration-700 ease-out ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full pt-20 ">
        <div className="flex-grow">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">{title}</h2> */}
          <h2 className="text-[40px] font-semibold leading-[40px] text-white font-[Raleway]">
          {title.split('\n').map((line, index) => (
    <span key={index} className="block">{line}</span>
  ))}
          </h2>

          <p className="mt-4 text-[20px] leading-[20px] font-normal text-white/90 max-w-md font-[Raleway]">
  {description}
</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            router.push(buttonLink)
          }}
          className="mt-8 px-8 py-3 w-fit text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors  cursor-pointer "
        >
          {buttonText}
        </button>
      </div>

      {/* Subtle overlay effect on hover */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ease-out ${
          isHovered ? "opacity-10" : "opacity-0"
        }`}
      ></div>
    </div>
  )
}

export const FeatureCardsSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches)
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const cards = [
    {
      title: "Business\nModel Canvas",
      description: "Define how your startup creates, delivers, and captures value—one building block at a time.",
      buttonText: "Start Mapping",
      buttonLink: "/resources/services",
      backgroundImage: "/assets/resources/Businessmodelcanvas.svg",
      backgroundGradient: "linear-gradient(45deg, rgba(2, 146, 203, 0.1) 0%, rgba(252, 25, 25, 0.1) 100%)",
    },
    {
      title: "Let's Build Your \nStartup Together",
      description: "Partner with our Venture Studio for funding and hands-on support—equity and cash combined.",
      buttonText: "Get Started",
      buttonLink: "/resources/services",
      backgroundImage: "/assets/resources/Funding.svg",
      backgroundGradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 95, 70, 0.1) 100%)",
    },
  ]

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              backgroundImage={card.backgroundImage}
              backgroundGradient={card.backgroundGradient}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
