"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArrowIconProps {
  color?: "white" | "black";
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ color = "black" }) => {
  const fillColor = color === "white" ? "#FFFFFF" : "#333333";

  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
    >
      <path
        d="M7.50016 4.67627V6.34294H12.9918L3.3335 16.0013L4.5085 17.1763L14.1668 7.51794V13.0096H15.8335V4.67627H7.50016Z"
        fill={fillColor}
      />
    </svg>
  );
};

export const FooterSection = () => {
  const services = [
    {
      image: "/assets/img1.svg",
      altText: "Mobile and website design",
      title: "Intuitive Mobile and Website Designs",
      description:
        "A great product isn't just functional—it's user-friendly and visually compelling. We design intuitive digital experiences that captivate users, drive engagement, and enhance brand credibility.",
    },
    {
      image: "/assets/img2.svg",
      altText: "Funding",
      title: "Funding Your Vision",
      description:
        "Securing the right financial backing is crucial for startup success. We guide you through investor connections, pitch deck creation, and financial planning to help you attract the right funding for growth.",
    },
    {
      image: "/assets/img3.svg",
      altText: "Brand strategy",
      title: "Building a Strong Brand Strategy",
      description:
        "Your brand is more than a logo—it's your identity. We craft cohesive brand strategies that align with your mission, differentiate you from competitors, and create a lasting impression in the market.",
    },
    {
      image: "/assets/img4.svg",
      altText: "Product development",
      title: "Product Development & Innovation",
      description:
        "From ideation to launch, we focus on building high-quality, scalable products. Our structured approach ensures seamless development, robust architecture, and efficient execution tailored to your business needs.",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center mb-12 flex-col sm:flex-row text-center sm:text-left"
        >
          <h2 className="text-3xl font-bold text-stone-950 sm:text-2xl">
            Everything you need, all in one place...
          </h2>
          <button className="flex gap-2.5 items-center px-4 py-2 text-base bg-white border border-zinc-300 rounded-full text-stone-950 hover:bg-gray-200 transition-all">
            <span>See all our services</span>
            <ArrowIcon />
          </button>
        </motion.header>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="max-w-full"
            >
              {/* Image Wrapper */}
              <div className="relative mb-4">
                <img
                  src={service.image}
                  alt={service.altText}
                  className="object-cover w-full rounded-2xl"
                />
                <div className="absolute top-[15px] right-[15px] flex items-center justify-center w-10 h-10 border border-white backdrop-blur-sm rounded-full">
                  <ArrowIcon color="white" />
                </div>
              </div>

              {/* Service Details */}
              <div className="px-0 py-5">
                <h3 className="mb-1.5 text-lg font-semibold text-stone-950">
                  {service.title}
                </h3>
                <p className="text-sm leading-5 text-stone-950 text-opacity-70">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
