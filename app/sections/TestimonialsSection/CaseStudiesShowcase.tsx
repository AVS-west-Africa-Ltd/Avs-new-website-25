"use client";
import * as React from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { ActionCard } from "./ActionCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CaseStudiesShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="container overflow-hidden px-4 sm:px-6 lg:px-8 py-12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/3 w-full flex items-end md:w-1/2"
        >
          <div className="lg:mt-12 w-full">
            <div className="max-w-full">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-stone-950">
                Latest case studies
              </h2>
              <p className="mt-4 text-base text-stone-950">
                Lorem ipsum dolor sit amet consectetur. A elit elit diam pretium
                habitant.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-start mt-8 text-xl sm:text-2xl font-medium tracking-tight leading-7">
              <ActionCard
                variant="light"
                imageSrc="/assets/b1.svg"
                backgroundImage="/assets/b1.svg"
                text="View all case studies"
              />
              <ActionCard
                variant="dark"
                imageSrc="/assets/b2.svg"
                backgroundImage="/assets/b2.svg"
                text="Get in touch with us"
                multiline
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column - Case Studies */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="lg:w-2/3 lg:pl-5 md:w-full w-full flex items-end"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-4 xl:gap-6 items-stretch">
            <CaseStudyCard
              imageSrc="/assets/case1.svg"
              title="Rateo"
              subtitle="Redefining Workplace"
              className="bottom-3"
            />
            <CaseStudyCard
              imageSrc="/assets/case2.svg"
              title="One Touch Football"
              subtitle="Digital home for grassroots football"
              className="bottom-3"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
