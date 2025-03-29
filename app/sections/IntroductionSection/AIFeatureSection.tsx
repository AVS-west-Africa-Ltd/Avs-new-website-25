import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const AIFeatureSection = () => {
  return (
    <section className="relative w-full h-[590px] flex justify-center">
      <Card className="relative w-[1385px] h-[456px] mt-[67px] mx-7 rounded-[28px] overflow-hidden [background:linear-gradient(212deg,rgba(252,1,1,1)_0%,rgba(3,43,15,1)_100%),linear-gradient(212deg,rgba(252,194,1,1)_0%,rgba(2,146,203,1)_100%),linear-gradient(0deg,rgba(2,24,18,1)_0%,rgba(2,24,18,1)_100%)] border-none">
        <CardContent className="p-0">
          <div className="absolute w-[439px] h-[78px] top-[319px] left-[72px] [font-family:'Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px]">
            Unlock the power of artificial intelligence to transform your
            products. From automation to intelligent insights, we&apos;re
            crafting next-gen AI solutions to drive your success. Stay
            tuned—exciting advancements are on the horizon!
          </div>

          <Badge className="absolute top-[37px] left-[72px] bg-[#ffffff4c] text-white rounded-[47px] border border-solid border-white backdrop-blur-[35.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35.5px)_brightness(100%)] px-5 py-2.5">
            <span className="[font-family:'Raleway',Helvetica] font-semibold text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Coming soon on A Venture Studio
            </span>
          </Badge>
        </CardContent>
      </Card>
    </section>
  );
};
