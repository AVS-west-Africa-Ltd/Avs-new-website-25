"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#131211] text-white py-16 px-4 md:py-24 flex flex-col items-center justify-center text-center"
    >
      <p className="text-lg mb-3">Contact Us</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mb-8 mt-3 leading-snug">
        Share your project brief and ideas. <br className="hidden md:block" /> Let&apos;s make it happen.
      </h1>
      <Button
        variant="outline"
        className="bg-white !rounded-md text-black hover:bg-gray-200 hover:text-black transition-all duration-300"
      >
        Let&apos;s connect now!
      </Button>
    </motion.div>
  );
};

export default ContactHeader;
