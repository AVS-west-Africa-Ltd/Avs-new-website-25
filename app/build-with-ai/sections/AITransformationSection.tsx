"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo-gen.svg"; // Logo stays as is
import AutomationIcon from "@/public/icons/automation.svg";
import DesignIcon from "@/public/icons/design.svg";
import DataIcon from "@/public/icons/data.svg";
import ClockIcon from "@/public/icons/clock.svg";
import GrowthIcon from "@/public/icons/growth.svg";
import AccessIcon from "@/public/icons/access.svg";

export const AITransformationSection = () => {
  const transformationCards = [
    {
      icon: <Image src={AutomationIcon} alt="Automation Icon" width={40} height={40} />,
      title: "Automation & Efficiency",
      description: "AI automates repetitive tasks, allowing teams to focus on innovation",
    },
    {
      icon: <Image src={DesignIcon} alt="Design Icon" width={40} height={40} />,
      title: "Creativity & Design",
      description: "AI-powered tools generate stunning logo designs, website layouts, and product designs",
    },
    {
      icon: <Image src={DataIcon} alt="Data Icon" width={40} height={40} />,
      title: "Data-Driven Decision Making",
      description: "Harness the vast amount of data to identify insights that drive business strategies",
    },
    {
      icon: <Image src={ClockIcon} alt="Clock Icon" width={40} height={40} />,
      title: "40/7 Assistance",
      description: "AI-powered chatbots provide customer service and engagement, increasing satisfaction",
    },
    {
      icon: <Image src={GrowthIcon} alt="Growth Icon" width={40} height={40} />,
      title: "Scalability & Growth",
      description: "AI infrastructure scales effortlessly, supporting your business as it grows",
    },
    {
      icon: <Image src={AccessIcon} alt="Access Icon" width={40} height={40} />,
      title: "Ease Of Access",
      description: "Our tools are built around the naturally conversational interface that anyone can use",
    },
  ];

  return (
    <section className="bg-[#F5D6D6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-2">How AI Transforms Modern Businesses</h2>
        <p className="text-gray-600 mb-12">
          AI is reshaping industries by improving efficiency, enhancing creativity, and reducing operational costs. Here's how businesses are leveraging it today:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformationCards.map((card, index) => (
            <div key={index} className="bg-[#FFF1EF] rounded-xl p-6 shadow-sm">
              <div className="bg-black rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
