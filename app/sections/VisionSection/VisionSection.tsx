// "use client"

// import { ArrowRightIcon } from "lucide-react";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export const VisionSection = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section
//       ref={ref}
//       className="relative w-full overflow-hidden py-14"
//       style={{
//         backgroundImage: `url(/assets/bgs1.svg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="relative mx-auto max-w-[1440px]">
//         {/* Main content container */}
//         <div className="relative flex flex-col items-center px-4 py-24">
//           {/* Heading */}
//           <motion.h2
//             initial={{ opacity: 0, y: -50 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="font-['Raleway',Helvetica] font-semibold text-white text-6xl text-center max-w-[1062px] mb-14"
//           >
//             Your Success Starts Here – Let&apos;s Build the Future Together!
//           </motion.h2>

//           {/* Main card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//             className="w-full max-w-[1400px] bg-[rgba(255,255,255,0.40)] backdrop-blur-[2.5px] rounded-[26px] backdrop-brightness-[100%] border-none"
//           >
//             <div className="p-0">
//               {/* Card header with text and button */}
//               <div className="flex justify-between items-center p-[30px]">
//                 <motion.p
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//                   className="font-['Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] max-w-[382px]"
//                 >
//                   We think beyond design—we engineer solutions that solve real
//                   business problems.
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//                 >
//                   <Button
//                     variant="outline"
//                     className="h-10 rounded-[100px] bg-white text-[#0f0f0f] border-[#f0f0f0] font-['Raleway',Helvetica] font-normal text-[15px] tracking-[-0.30px]"
//                   >
//                     <span>View our services</span>
//                     <ArrowRightIcon className="ml-2 h-5 w-5" />
//                   </Button>
//                 </motion.div>
//               </div>

//               {/* Card content with image and text */}
//               <div className="flex flex-col md:flex-row p-[30px] pt-0 gap-16">
//                 {/* Left side - Image */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
//                   style={{
//                     backgroundImage: `url(/assets/link.svg)`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat: "no-repeat",
//                   }}
//                   className="w-full md:w-[640px] h-[436px] rounded-[26px]"
//                 >
//                   <div className="relative w-[calc(100%-36px)] h-[340px] mx-auto mt-[18px] rounded-[20px] bg-[url(/zfjevxaxqngnwcgdskfn8cse-png.png)] bg-cover bg-center" />
//                 </motion.div>

//                 {/* Right side - Text content */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
//                   className="flex flex-col w-full md:w-[513px] gap-6 py-8"
//                 >
//                   <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-4xl">
//                     From concept to execution, we provide the expertise and
//                     support needed to turn ideas into{" "}
//                     <span className="italic">
//                       successful market-ready products
//                     </span>
//                   </h3>

//                   <p className="font-['Raleway',Helvetica] font-normal text-white text-[15px]">
//                     Our strategic approach ensures seamless planning,
//                     development, and launch—helping you stay ahead in a
//                     competitive landscape. Whether you&#39;re refining a vision
//                     or ready to scale, we&apos;ve got you covered.
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const VisionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative w-full overflow-hidden py-14">
      {/* Optimized Background Image */}
      <Image
        src="/assets/bgs1.svg"
        alt="Vision Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
        // placeholder="blur"
        // blurDataURL="/assets/bg-placeholder.jpg"
        className="absolute inset-0 z-0"
      />

      <div className="relative mx-auto max-w-[1440px] px-4">
        {/* Main content container */}
        <div className="relative flex flex-col items-center text-center py-14 md:py-24">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-['Raleway',Helvetica] font-semibold text-white text-3xl md:text-5xl lg:text-6xl max-w-[1062px] mb-8 md:mb-14"
          >
            Your Success Starts Here – Let&apos;s Build the Future Together!
          </motion.h2>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-[1400px] bg-[rgba(255,255,255,0.40)] backdrop-blur-[2.5px] rounded-[26px] p-5 md:p-8 lg:p-10"
          >
            {/* Card header */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="font-['Raleway',Helvetica] font-normal text-white text-sm md:text-[15px] tracking-[-0.30px] leading-5 md:leading-[19.5px] max-w-[382px]"
              >
                We think beyond design—we engineer solutions that solve real business problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  className="h-10 w-full md:w-auto rounded-full bg-white text-[#0f0f0f] border-[#f0f0f0] font-['Raleway',Helvetica] text-sm md:text-[15px]"
                >
                  <span>View our services</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            {/* Card content - Image & Text */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-8 md:mt-12">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative w-full max-w-[640px] h-[250px] md:h-[400px] lg:h-[436px] rounded-[26px] overflow-hidden"
              >
                <Image
                  src="/assets/link.svg"
                  alt="Vision Image"
                  layout="fill"
                  objectFit="cover"
                  quality={75}
                  // placeholder="blur"
                  // blurDataURL="/assets/image-placeholder.jpg"
                  className="rounded-[26px]"
                />
              </motion.div>

              {/* Right - Text content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                className="flex flex-col w-full max-w-[513px] gap-4 md:gap-6 text-center md:text-left"
              >
                <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-2xl md:text-3xl lg:text-4xl">
                  From concept to execution, we provide the expertise and support needed to turn ideas into{" "}
                  <span className="italic">successful market-ready products</span>.
                </h3>

                <p className="font-['Raleway',Helvetica] font-normal text-white text-sm md:text-[15px]">
                  Our strategic approach ensures seamless planning, development, and launch—helping you stay ahead in a
                  competitive landscape. Whether you&#39;re refining a vision or ready to scale, we&apos;ve got you covered.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

