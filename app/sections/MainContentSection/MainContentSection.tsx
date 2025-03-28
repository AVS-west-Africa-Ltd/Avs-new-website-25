import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const MainContentSection = () => {
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
    <header className="w-full py-5 px-5">
      <div className="relative h-20 rounded-[0px_0px_26px_26px] bg-[#f0f0f0] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] overflow-hidden">
        <div className="flex items-center justify-between h-full px-5">
          {/* Navigation Menu */}
          <NavigationMenu className="max-w-none">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[35px] flex items-center">
            <div className="relative h-[35px]">
              <div className="inline-flex items-center">
                <div className="relative w-[28.64px] h-[30.38px] overflow-hidden">
                  <div className="relative w-[33px] h-9 -top-px left-[-3px]">
                    <div className="relative h-9">
                      <div className="absolute w-2 h-8 top-0 left-[19px] bg-[#999999] rounded-[5.68px] rotate-[25.45deg]" />
                      <img
                        className="absolute w-[31px] h-9 top-0 left-0"
                        alt="Group"
                        src="/group-1-3.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative w-[28.64px] h-[30.38px] ml-[-5.59px] overflow-hidden">
                  <div className="relative w-[33px] h-9 -top-px left-[-3px]">
                    <div className="relative h-9">
                      <div className="absolute w-2 h-8 top-0 left-[19px] bg-[#999999] rounded-[5.68px] rotate-[25.45deg]" />
                      <img
                        className="absolute w-[31px] h-9 top-0 left-0"
                        alt="Group"
                        src="/group-1-4.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="[font-family:'Raleway',Helvetica] font-medium text-avsblack text-[29.5px] tracking-[0] leading-[normal] whitespace-nowrap">
                  enture studio
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="h-10 rounded-[100px] [font-family:'Raleway',Helvetica] font-normal text-[#0f0f0f] text-[15px] tracking-[-0.30px] leading-[19.5px] bg-white border-[#f0f0f0]"
            >
              Join Newsletter
            </Button>
            <Button className="h-10 rounded-[100px] [font-family:'Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] bg-[#0f0f0f]">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
