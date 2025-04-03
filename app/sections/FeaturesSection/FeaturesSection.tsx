"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const FeaturesSection = () => {
    const router = useRouter();
  
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
        {/* Left content column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="flex flex-col gap-8 max-w-[593px]">
            <h2 className="font-['Raleway',Helvetica] font-semibold text-[#1d1d1d] text-4xl md:text-5xl lg:text-[64px] leading-tight">
              Fuel Your Vision with Flexible Funding Options!
            </h2>

            <p className="font-['Raleway',Helvetica] text-[#0f0f0fa6] text-[15px] leading-[19.5px] max-w-[509px]">
              We believe great ideas deserve the right support. Whether you&apos;re
              launching, growing, or scaling, we offer tailored payment
              solutions and flexible, equitable commercial modeling to bring
              your vision to life—hassle-free and built for your success.
            </p>

            <div className="flex items-center gap-3">
              <Button
              onClick={() => router.push("/our-process")}
               className="h-[40px] rounded-full bg-[#0f0f0f] text-white text-[15px] tracking-[-0.30px] transition-all hover:bg-[#333]">
                See our process
              </Button>

              <Button
                          onClick={() => router.push("/contact-us")}

                variant="outline"
                className="h-[40px] rounded-full bg-white text-[#0f0f0f] border border-gray-300 text-[15px] tracking-[-0.30px] flex items-center transition-all hover:bg-gray-100"
              >
                Get in touch
                <ArrowRightIcon className="ml-2 h-[16px] w-[16px]" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right image column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <Card className="w-full h-auto bg-[#f0f0f0] rounded-2xl p-4 shadow-md overflow-hidden">
            <Image
              className="w-full h-auto object-cover rounded-xl"
              alt="Funding options illustration"
              src="/assets/link2.svg"
              width={100}
              height={100}
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
