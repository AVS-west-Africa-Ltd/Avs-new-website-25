import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  // Case study data for mapping
  const caseStudies = [
    {
      id: 1,
      title: "Rateo",
      subtitle: "Redefining Workplace",
      backgroundImage: "/sv6o5l3wu5qyd69fbgnepaqyrq-png.png",
      position: { top: "463px", left: "27px" },
    },
    {
      id: 2,
      title: "One Touch Football",
      subtitle: "Digital home for grassroots football",
      backgroundImage: "/ylrwhlaxczlf6r14pytevupo48-jpg.png",
      position: { top: "468px", left: "473px" },
      titleClass: "font-normal text-xl",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Heading Section */}
      <div className="flex flex-col w-[401px] items-start gap-4  top-[287px] 5">
        <h2 className="relative self-stretch mt-[-1.00px] font-['Raleway',Helvetica] font-semibold text-[#0f0f0f] text-[32px] tracking-[-0.92px] leading-[normal]">
          Latest case studies
        </h2>
        <p className="relative self-stretch font-['Raleway',Helvetica] font-normal text-[#0f0f0fa6] text-[15px] tracking-[0] leading-[normal]">
          Lorem ipsum dolor sit amet consectetur. A elit elit diam pretium
          habitant.
        </p>
      </div>

      {/* Bottom Cards Row */}
      <div className="inline-flex items-center gap-4  top-[412px] 5">
        {/* View All Card */}
        <Card className="relative w-[218.34px] h-[218.34px] bg-[#f0f0f0] rounded-[15px] overflow-hidden">
          <CardContent className="p-0">
            <div className=" w-[188px] h-[58px] top-[146px] [15px]">
              <div className=" w-[163px] h-[58px] -top-0.5 0 font-['Raleway',Helvetica] font-medium text-[#0f0f0f] text-2xl tracking-[-0.48px] leading-[28.8px]">
                View all case studies
              </div>
            </div>

            <div className=" w-10 h-10 top-[15px] [163px] rounded-[100px] overflow-hidden">
              <div className="relative h-10 rounded-[100px]">
                <img
                  className=" w-5 h-5 top-2.5 2.5"
                  alt="Svg"
                  src="/svg.svg"
                />
                <div className="w-10 border-[#0f0f0fa6]  h-10 top-0 0 rounded-[100px] border border-solid" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Get in Touch Card */}
        <Card className="relative w-[218.34px] h-[218.34px] bg-[#032218] rounded-[15px] overflow-hidden">
          <CardContent className="p-0">
            <div className="relative w-[466px] h-[233px] top-[-11px] [-115px]">
              <div className=" w-10 h-10 top-[26px] [279px] rounded-[100px] overflow-hidden">
                <div className="relative h-10 rounded-[100px]">
                  <img
                    className=" w-5 h-5 top-2.5 2.5"
                    alt="Svg"
                    src="/svg.svg"
                  />
                  <div className="w-10 border-[#ffffffcc]  h-10 top-0 0 rounded-[100px] border border-solid" />
                </div>
              </div>

              <img
                className=" w-[466px] h-[233px] top-0 0"
                alt="Sound wave"
                src="/sound-wave-2024-10-22-23-06-32-utc-1.png"
              />

              <div className=" w-[188px] h-[58px] top-[156px] [130px]">
                <div className=" w-[189px] h-[58px] -top-0.5 0 font-['Raleway',Helvetica] font-medium text-white text-2xl tracking-[-0.48px] leading-[28.8px]">
                  Get in touch <br />
                  with us
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Case Studies */}
      <div className="inline-flex items-center gap-4  top-20">
        {/* Case Study Cards */}
        {caseStudies.map((study, index) => (
          <Card
            key={study.id}
            className={`relative w-[439.17px] h-[548.95px] rounded-[26px] bg-[url(${study.backgroundImage})] bg-cover bg-[50%_50%]`}
          />
        ))}

        {/* Case Study 1 Details */}
        {/* <div className="inline-flex items-center gap-[98px]  top-[463px] [27px]">
          <div className="flex flex-col w-[149px] items-start gap-1 relative">
            <h3 className="relative self-stretch h-[26px] mt-[-1.00px] font-['Raleway',Helvetica] font-semibold text-white text-2xl tracking-[-0.40px] leading-[26px] whitespace-nowrap">
              Rateo
            </h3>
            <p className="relative self-stretch font-['Raleway',Helvetica] font-normal text-[#ffffffcc] text-[15px] tracking-[-0.30px] leading-[19.5px]">
              Redefining Workplace
            </p>
          </div>

          <Button className="relative w-[137.53px] h-[39.5px] bg-white rounded-[100px] overflow-hidden">
            <div className="w-[142px] bg-[#9a9897]  h-px top-10 -0.5 rounded-[100px]" />
            <span className=" w-[73px] h-5 top-[9px] 5 font-['Raleway',Helvetica] font-normal text-dark text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap">
              View more
            </span>
            <img
              className=" w-[15px] h-[15px] top-3 [103px]"
              alt="Svg"
              src="/svg.svg"
            />
          </Button>
        </div> */}

        {/* Case Study 2 Details */}
        {/* <div className="inline-flex items-center gap-[62px]  top-[468px] [473px]">
          <div className="flex flex-col w-[200.04px] items-start gap-1 relative">
            <h3 className="relative self-stretch mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-white text-xl tracking-[-0.40px] leading-[26px]">
              One Touch Football
            </h3>
            <p className="relative w-fit mr-[-32.96px] font-['Raleway',Helvetica] font-normal text-[#ffffffcc] text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap">
              Digital home for grassroots football
            </p>
          </div>

          <Button className="relative w-[137.53px] h-[39.5px] bg-white rounded-[100px] overflow-hidden">
            <div className="w-[142px] bg-[#9a9897]  h-px top-10 -0.5 rounded-[100px]" />
            <span className=" w-[73px] h-5 top-[9px] 5 font-['Raleway',Helvetica] font-normal text-dark text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap">
              View more
            </span>
            <img
              className=" w-[15px] h-[15px] top-3 [103px]"
              alt="Svg"
              src="/svg.svg"
            />
          </Button>
        </div> */}
      </div>
    </section>
  );
};
