import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const VisionSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-14"
      style={{
        backgroundImage: `url(/assets/bgs1.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto max-w-[1440px]">
        {/* Background elements */}

        {/* Main content container */}
        <div className="relative flex flex-col items-center px-4 py-24">
          {/* Heading */}
          <h2 className="font-['Raleway',Helvetica] font-semibold text-white text-6xl text-center max-w-[1062px] mb-14">
            Your Success Starts Here – Let&apos;s Build the Future Together!
          </h2>

          {/* Main card */}
          <div className="w-full max-w-[1400px] bg-[rgba(255,255,255,0.40)] backdrop-blur-[2.5px] rounded-[26px] backdrop-brightness-[100%] border-none">
            <div className="p-0">
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
                <div
                  style={{
                    backgroundImage: `url(/assets/link.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full md:w-[640px] h-[436px] rounded-[26px]"
                >
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
