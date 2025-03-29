"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export const MainContentSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Our Process", active: false },
    { label: "Services", active: false },
    { label: "Our Work", active: false },
    { label: "Build with AI", active: false },
  ];

  return (
    <header
      className={`fixed top-2 left-2 right-2 z-50 transition-all duration-300 bg-whit ${
        scrolled ? "py- top-1 shadow-m" : ""
      }`}
    >
      <div
        className={`py-4 relative rounded-[0px_0px_26px_26px] bg-[#f0f0f0] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] overflow-hidden ${
          scrolled ? "" : "mx-0"
        }`}
      >
        <div className="flex items-cente justify-between h-full px-5">
          <div className="flex items-center gap-[150px]">
            {/* Navigation Menu */}
            <NavigationMenu className="">
              <NavigationMenuList className="flex items-center gap-[19px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={`relative w-fit [font-family:'Raleway',Helvetica] font-normal text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap ${
                        item.active ? "text-[#0f0f0f]" : "text-[#0f0f0fa6]"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Logo */}
            <div className="flex items-center w-full">
              <img
                src="/assets/AVS Logo.svg"
                alt="Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button className="h-10 rounded-[100px] [font-family:'Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] bg-[#0f0f0f]">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
