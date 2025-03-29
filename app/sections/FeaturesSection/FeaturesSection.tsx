import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-3 px-4">
        {/* Left content column */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-8 max-w-[593px]">
            <h2 className="font-['Raleway',Helvetica] font-semibold text-[#1d1d1d] text-4xl md:text-5xl lg:text-[64px] leading-tight">
              Fuel Your Vision with Flexible Funding Options!
            </h2>

            <p className="font-['Raleway',Helvetica] font-normal text-[#0f0f0fa6] text-[15px] tracking-[-0.30px] leading-[19.5px] max-w-[509px]">
              We believe great ideas deserve the right support. Whether you're
              launching, growing, or scaling, we offer tailored payment
              solutions, and flexible, equitable commercial modelling to bring
              your vision to life—hassle-free and built for your success.
            </p>

            <div className="flex items-center gap-2.5">
              <Button className="h-[39.5px] rounded-[100px] bg-[#0f0f0f] text-white font-['Raleway',Helvetica] font-normal text-[15px] tracking-[-0.30px]">
                See our process
              </Button>

              <Button
                variant="outline"
                className="h-[39.5px] rounded-[100px] bg-white text-[#0f0f0f] font-['Raleway',Helvetica] font-normal text-[15px] tracking-[-0.30px] border-[#d8d8d8]"
              >
                Get in touch
                <ArrowRightIcon className="ml-2 h-[15px] w-[15px]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right image column */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Card className="w-full h-auto bg-[#f0f0f0] rounded-[26px] p-4 overflow-hidden">
            <img
              className="w-full h-[100%] object-cover"
              alt="Funding options illustration"
              src="/assets/link2.svg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
