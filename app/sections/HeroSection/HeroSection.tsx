import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const HeroSection = () => {
  // Partner logos data for mapping
  const partnerLogos = [
    {
      id: 1,
      component: (
        <div className="w-[169px] h-[45px] flex items-center">
          <img className="w-[26px] h-11" alt="Union" src="/union.svg" />
          <div className="flex flex-col w-[140px] h-[45px] items-center justify-center gap-[6.98px] ml-[3px]">
            <div className="relative w-[139.52px] h-[45.34px] overflow-hidden">
              <div className="w-[140px] h-[45px]">
                <div className="relative h-[45px]">
                  <img
                    className="absolute w-[140px] h-[27px] top-[18px] left-0"
                    alt="Group"
                    src="/group.png"
                  />
                  <img
                    className="absolute w-[140px] h-[37px] top-0 left-0"
                    alt="Group"
                    src="/group-1.png"
                  />
                  <img
                    className="absolute w-[107px] h-5 top-2 left-4"
                    alt="Group"
                    src="/group-2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      component: (
        <div className="w-[177px] h-[58px]">
          <img
            className="w-[164px] h-[45px] mx-auto my-1.5"
            alt="My dex full logo"
            src="/my-dex-full-logo-white.svg"
          />
        </div>
      ),
    },
    {
      id: 3,
      component: (
        <img
          className="w-[265px] h-[65px]"
          alt="Group"
          src="/group-1171275271.png"
        />
      ),
    },
    {
      id: 4,
      component: (
        <img
          className="w-[277px] h-16"
          alt="Group"
          src="/group-1171275274.png"
        />
      ),
    },
    {
      id: 5,
      component: (
        <img
          className="w-[271px] h-[62px]"
          alt="Group"
          src="/group-1171275275.png"
        />
      ),
    },
    {
      id: 6,
      component: (
        <div className="flex items-center gap-[11.28px]">
          <img
            className="w-[59.23px] h-[59.23px]"
            alt="Group"
            src="/group-7005.png"
          />
          <div className="w-28 h-[42px] font-['Raleway',Helvetica] font-bold text-white text-[18.8px] leading-normal">
            ONE TOUCH FOOTBALL
          </div>
        </div>
      ),
    },
    {
      id: 7,
      component: (
        <div className="w-[167px] h-[57px] relative">
          <img
            className="absolute w-11 h-[41px] top-[5px] left-0"
            alt="Group"
            src="/group-1171275284.png"
          />
          <div className="absolute top-0 left-[45px] font-['Raleway',Helvetica] font-semibold text-white text-[48.1px] leading-normal whitespace-nowrap">
            ate
          </div>
          <div className="absolute top-0 left-[126px] font-['Raleway',Helvetica] font-semibold text-white text-[48.1px] leading-normal whitespace-nowrap">
            Ò
          </div>
        </div>
      ),
    },
    {
      id: 8,
      component: (
        <img className="w-40 h-[50px]" alt="Logo" src="/logo--1--1.svg" />
      ),
    },
    {
      id: 9,
      component: (
        <img
          className="w-[187px] h-[63px]"
          alt="Group"
          src="/group-1171275277.png"
        />
      ),
    },
    {
      id: 10,
      component: (
        <img
          className="w-[139px] h-[74px]"
          alt="Group"
          src="/group-1171275283.png"
        />
      ),
    },
    {
      id: 11,
      component: (
        <img
          className="w-[334px] h-[50px]"
          alt="Group"
          src="/group-1171275285.png"
        />
      ),
    },
    {
      id: 12,
      component: (
        <img
          className="w-[159px] h-[59px]"
          alt="Group"
          src="/group-1171275273.png"
        />
      ),
    },
    {
      id: 13,
      component: (
        <img className="w-[217px] h-[74px]" alt="Ye logo" src="/ye-logo.png" />
      ),
    },
    {
      id: 14,
      component: (
        <img
          className="w-[281px] h-[65px]"
          alt="Group"
          src="/group-1171275276.png"
        />
      ),
    },
  ];

  return (
    <section className="w-full h-[313px] bg-[#021913] relative">
      <h2 className="text-xl text-[#dee0e4] text-center font-['Raleway',Helvetica] font-normal tracking-[-0.30px] leading-[19.5px] pt-[75px] mb-[62px]">
        Our Partners
      </h2>

      <Card className="w-full h-[74px] border-none rounded-none bg-transparent">
        <CardContent className="p-0 h-full relative">
          <ScrollArea className="w-full h-[74px] overflow-hidden whitespace-nowrap">
            <div className="flex items-center h-full px-4 gap-6">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 flex items-center justify-center h-full"
                >
                  {logo.component}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>

          {/* Gradient overlays for scroll indication */}
          <div className="absolute w-[90px] h-[74px] top-0 right-0 pointer-events-none bg-gradient-to-r from-transparent to-[#021913]" />
          <div className="absolute w-[90px] h-[74px] top-0 left-0 pointer-events-none bg-gradient-to-l from-transparent to-[#021913]" />
        </CardContent>
      </Card>
    </section>
  );
};
