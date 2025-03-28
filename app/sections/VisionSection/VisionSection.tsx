import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const VisionSection = () => {
  return (
    <section className="relative w-full bg-[#021812] overflow-hidden py-14">
      <div className="relative mx-auto max-w-[1440px]">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url(/powxgofdlrm7yww82ksky5y8vuu-jpeg.png)] bg-cover bg-center opacity-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[#021b13]" />

        {/* Sound wave overlay */}
        <img
          className="absolute w-full h-auto min-w-[2439px] -translate-x-1/2 left-1/2"
          alt="Sound wave"
          src="/sound-wave-2024-10-22-23-06-32-utc-1-1.png"
        />

        {/* Main content container */}
        <div className="relative flex flex-col items-center px-4 py-24">
          {/* Heading */}
          <h2 className="font-['Raleway',Helvetica] font-semibold text-white text-6xl text-center max-w-[1062px] mb-14">
            Your Success Starts Here – Let&apos;s Build the Future Together!
          </h2>

          {/* Main card */}
          <Card className="w-full max-w-[1400px] bg-[#ffffff66] rounded-[26px] backdrop-blur-[2.5px] backdrop-brightness-[100%] border-none">
            <CardContent className="p-0">
              {/* Card header with text and button */}
              <div className="flex justify-between items-center p-[30px]">
                <p className="font-['Raleway',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] max-w-[382px]">
                  we think beyond design—we engineer solutions that solve real
                  business problems.
                </p>

                <Button
                  variant="outline"
                  className="h-10 rounded-[100px] bg-white text-[#0f0f0f] border-[#f0f0f0] font-['Raleway',Helvetica] font-normal text-[15px] tracking-[-0.30px]"
                >
                  <span>View our services</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Card content with image and text */}
              <div className="flex flex-col md:flex-row p-[30px] pt-0 gap-16">
                {/* Left side - Image */}
                <div className="w-full md:w-[640px] h-[436px] bg-[#f0f0f0] rounded-[26px]">
                  <div className="relative w-[calc(100%-36px)] h-[340px] mx-auto mt-[18px] rounded-[20px] bg-[url(/zfjevxaxqngnwcgdskfn8cse-png.png)] bg-cover bg-center" />
                </div>

                {/* Right side - Text content */}
                <div className="flex flex-col w-full md:w-[513px] gap-6 py-8">
                  <h3 className="font-['Raleway',Helvetica] font-semibold text-white text-4xl">
                    From concept to execution, we provide the expertise and
                    support needed to turn ideas into{" "}
                    <span className="italic">
                      successful market-ready products
                    </span>
                  </h3>

                  <p className="font-['Raleway',Helvetica] font-normal text-white text-[15px]">
                    Our strategic approach ensures seamless planning,
                    development, and launch—helping you stay ahead in a
                    competitive landscape. Whether you&#39;re refining a vision
                    or ready to scale, we&apos;ve got you covered.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
