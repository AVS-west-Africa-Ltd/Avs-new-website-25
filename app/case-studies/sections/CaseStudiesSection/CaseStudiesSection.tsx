"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const CaseStudiesSection = () => {
  const router = useRouter();
  return (
    <section className="w-full py-20 mt-[100px]">
      <div className="container mx-auto flex flex-col items-center gap-[72px]">
        {/* Heading and CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-[1040px] text-center"
        >
          <h2 className="font-raleway text-[56px] leading-tight text-[#0f0f0f]">
            <span className="font-semibold">Our</span>
            <span className="font-bold"> </span>
            <span className="font-medium italic">Case Studies</span>
          </h2>

          <p className="font-raleway text-base text-[#0f0f0fa6] tracking-[-0.30px] leading-[19.5px]">
            We don&apos;t just create brands; we craft unforgettable experiences that
            leave a lasting impression.
          </p>

          {/* Contact button */}
          <Button
            onClick={() => router.push("/contact-us")}
            className="mt-12 !rounded-full bg-gray-900 hover:bg-gray-800 px-6 cursor-pointer"
          >
            Get in touch <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
