import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const CaseStudiesSection = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto flex flex-col items-center gap-[72px]">
        {/* Heading and CTA Section */}
        <div className="flex flex-col items-center gap-6 max-w-[1040px] text-center">
          <h2 className="font-raleway text-[56px] leading-tight text-[#0f0f0f]">
            <span className="font-semibold">Take charge of</span>
            <span className="font-bold"> </span>
            <span className="font-medium italic">your business growth</span>
            <span className="font-semibold">—We'll handle the operations!</span>
          </h2>

          <p className="font-raleway text-base text-[#0f0f0fa6] tracking-[-0.30px] leading-[19.5px]">
            Focus on building your vision while we take care of the day-to-day
            operations, ensuring seamless growth.
          </p>

          <div className="flex items-center gap-2.5">
            <Button className="h-10 w-[184px] rounded-[100px] bg-[#0f0f0f] text-white font-raleway font-normal text-[15px] tracking-[-0.30px]">
              View our case studies
            </Button>

            <Button
              variant="outline"
              className="h-10 w-[147px] rounded-[100px] bg-white text-[#0f0f0f] font-raleway font-normal text-[15px] tracking-[-0.30px] border-[#d8d8d8]"
            >
              Get in touch
              <ArrowRightIcon className="ml-2 h-[15px] w-[15px]" />
            </Button>
          </div>
        </div>

        {/* Case Studies Images */}
        <div className="flex w-full justify-between gap-4">
          <Card className="w-[928px] h-[545px] rounded-[32px] overflow-hidden border-none">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url(..//frame-1430101754.png)" }}
            />
          </Card>

          <Card className="w-[456px] h-[545px] rounded-[32px] overflow-hidden border-none">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url(..//frame-1430101755.png)" }}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
