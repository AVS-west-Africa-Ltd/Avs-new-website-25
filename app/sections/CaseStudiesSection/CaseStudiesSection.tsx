"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PortableText } from '@portabletext/react';
import { urlFor } from "@/sanity";
import Image from "next/image";


export const CaseStudiesSection = ({ data, heroFeatureImageBlock }: any) => {
  const router = useRouter();

  return (
    <section className="w-full py-20 mt-[40px] md:mt-[100px]">
      <div className="container mx-auto flex flex-col items-center gap-[72px] px-4">
        {/* Heading and CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-[1040px] text-center"
        >
          <div className="font-raleway text-4xl sm:text-4xl md:text-[50px] leading-tight text-[#0f0f0f]">
            <PortableText value={data?.mainHeading} />
          </div>

          <p className="font-raleway text-sm sm:text-base text-[#0f0f0fa6] tracking-[-0.30px] leading-[19.5px]">
            {data?.subHeading}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2.5">
            <button
              onClick={() => router.push(data?.buttons[0]?.link)}
              className="whitespace-nowrap gap-3 flex items-center py-3 px-4  w-full rounded-[100px] bg-[#0f0f0f] text-white font-raleway font-normal text-[15px] tracking-[-0.30px] cursor-pointer"
            >
              {data?.buttons[0]?.text}
            </button>

            <button
              onClick={() => router.push(data?.buttons[1]?.link)}
              className="whitespace-nowrap gap-2 py-3 px-4 flex text-center rounded-[100px] bg-white text-[#0f0f0f] font-raleway font-normal text-[15px] border border-[#d8d8d8] cursor-pointer"
            >
              <span className="">{data?.buttons[1]?.text}</span>
              <svg
                className="mt-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 3H3.125C2.4375 3 1.88125 3.5625 1.88125 4.25L1.875 11.75C1.875 12.4375 2.4375 13 3.125 13H13.125C13.8125 13 14.375 12.4375 14.375 11.75V4.25C14.375 3.5625 13.8125 3 13.125 3ZM13.125 5.5L8.125 8.625L3.125 5.5V4.25L8.125 7.375L13.125 4.25V5.5Z"
                  fill="#0F0F0F"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          {/* {heroFeatureImageBlock?.features?.[0]?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              className="w-full md:w-[calc(66%-8px)] aspect-[928/545] rounded-2xl md:rounded-[32px] overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${urlFor(heroFeatureImageBlock?.features?.[0]?.image)})`,
                }}
              />
            </motion.div>
          )}

          {heroFeatureImageBlock?.features?.[1]?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
              className="w-full md:w-[calc(34%-8px)] aspect-[456/545] rounded-2xl md:rounded-[32px] overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${urlFor(heroFeatureImageBlock?.features?.[1]?.image)})`,
                }}
              />
            </motion.div>
          )} */}

          {heroFeatureImageBlock?.features?.[0]?.image && (
            <div className="w-full md:w-[calc(66%-8px)] aspect-[928/545] rounded-2xl md:rounded-[32px] overflow-hidden relative">
              <Image
                src={urlFor(heroFeatureImageBlock?.features?.[0]?.image).url()}
                alt={heroFeatureImageBlock?.features?.[0]?.alt || 'Hero Image 1'}
                layout="fill"
                objectFit="cover"
                priority // Add priority for the first important image
              />
            </div>
          )}

          {heroFeatureImageBlock?.features?.[1]?.image && (
            <div className="w-full md:w-[calc(34%-8px)] aspect-[456/545] rounded-2xl md:rounded-[32px] overflow-hidden relative">
              <Image
                src={urlFor(heroFeatureImageBlock?.features?.[1]?.image).url()}
                alt={heroFeatureImageBlock?.features?.[1]?.alt || 'Hero Image 2'}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}


          {!heroFeatureImageBlock?.features?.[0]?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              className="w-full md:w-[calc(66%-8px)] aspect-[928/545] rounded-2xl md:rounded-[32px] overflow-hidden bg-gray-100 flex items-center justify-center"
            >
              <span>Placeholder Image 1</span>
            </motion.div>
          )}

          {!heroFeatureImageBlock?.features?.[1]?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
              className="w-full md:w-[calc(34%-8px)] aspect-[456/545] rounded-2xl md:rounded-[32px] overflow-hidden bg-gray-100 flex items-center justify-center"
            >
              <span>Placeholder Image 2</span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
