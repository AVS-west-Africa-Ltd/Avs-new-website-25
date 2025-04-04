// "use client"

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export const AIFeatureSection = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -100 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 1.2, ease: "easeOut" }}
//       className="overflow-hidden px-4 md:pl-16 rounded-3xl py-14 mb-12"
//       style={{
//         backgroundImage: `url(/assets/bg-s.svg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="flex flex-col md:flex-row gap-5">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//           className="w-full lg:w-[40%]"
//         >
//           <section className="flex flex-col items-start self-stretch my-auto w-full font-semibold text-white py-8 md:py-0">
//             <div className="rounded-[47px] border border-white bg-[rgba(255,255,255,0.30)] backdrop-blur-[35.5px] py-2.5 px-3.5">
//               Coming soon on A Venture Studio
//             </div>
//             <h1 className="mt-4 text-3xl md:text-4xl lg:text-6xl">
//               <span style={{ fontWeight: 500 }}>
//                 Build Smarter, Innovate Faster with
//               </span>{" "}
//               <span style={{ color: "rgba(255,255,255,1)" }}>AI</span>
//             </h1>
//             <p className="self-stretch mt-4 md:mt-7 text-sm md:text-base tracking-tight leading-5 md:leading-6">
//               Unlock the power of artificial intelligence to transform your
//               products. From automation to intelligent insights, we&apos;re crafting
//               next-gen AI solutions to drive your success. Stay tuned—exciting
//               advancements are on the horizon!
//             </p>
//           </section>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const AIFeatureSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden px-4 md:pl-16 rounded-3xl py-14 mb-12 transition-opacity transform duration-1200 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
      }`}
    >
      {/* Optimized Background Image */}
      <Image
        src="/assets/bg-s.svg" // Convert to WebP for better performance
        alt="AI Feature Background"
        layout="fill"
        objectFit="cover"
        quality={75} // Optimize image quality
        priority // Ensure it loads quickly for above-the-fold content
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-5">
        <div
          className={`w-full lg:w-[40%] transition-opacity transform duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <section className="flex flex-col items-start self-stretch my-auto w-full font-semibold text-white py-8 md:py-0">
            <div className="rounded-[47px] border border-white bg-[rgba(255,255,255,0.30)] backdrop-blur-[35.5px] py-2.5 px-3.5">
              Coming soon on A Venture Studio
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-6xl">
              <span style={{ fontWeight: 500 }}>
                Build Smarter, Innovate Faster with
              </span>{" "}
              <span className="text-white">AI</span>
            </h1>
            <p className="self-stretch mt-4 md:mt-7 text-sm md:text-base tracking-tight leading-5 md:leading-6">
              Unlock the power of artificial intelligence to transform your
              products. From automation to intelligent insights, we&apos;re crafting
              next-gen AI solutions to drive your success. Stay tuned—exciting
              advancements are on the horizon!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
