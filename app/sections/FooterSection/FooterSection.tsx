import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ArrowIconProps {
  color?: "white" | "black";
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ color = "black" }) => {
  const fillColor = color === "white" ? "#FFFFFF" : "#333333";

  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
      style={{ width: "20px", height: "20px" }}
    >
      <path
        d="M7.50016 4.67627V6.34294H12.9918L3.3335 16.0013L4.5085 17.1763L14.1668 7.51794V13.0096H15.8335V4.67627H7.50016Z"
        fill={fillColor}
      />
    </svg>
  );
};

export const FooterSection = () => {
  // Service card data for mapping
  const services = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac422dbf74768f2404379a63b6efefa6550051b2",
      altText: "Mobile and website design",
      title: "Intuitive Mobile and website designs",
      description:
        "A great product isn't just functional—it's user-friendly and visually compelling. We design intuitive digital experiences that captivate users, drive engagement, and enhance brand credibility.",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/36c284694a5b8949d70493e5a2ab4e703ba21924",
      altText: "Funding",
      title: "Funding Your Vision",
      description:
        "Securing the right financial backing is crucial for startup success. We guide you through investor connections, pitch deck creation, and financial planning to help you attract the right funding for growth.",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e4675af08ba04ce0752159b8bddabea66269a653",
      altText: "Brand strategy",
      title: "Building a strong brand strategy",
      description:
        "Your brand is more than a logo—it's your identity. We craft cohesive brand strategies that align with your mission, differentiate you from competitors, and create a lasting impression in the market.",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/20719b0ef19008644f273a1de6ef047edee496e3",
      altText: "Product development",
      title: "Product Development & Innovation",
      description:
        "From ideation to launch, we focus on building high-quality, scalable products. Our structured approach ensures seamless development, robust architecture, and efficient execution tailored to your business needs.",
    },
  ];

  return (
    <section className="w-full py-10">
      {/* <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-['Raleway',Helvetica] font-semibold text-[32px] text-[#0f0f0f]">
            Everything you need, all in one place...
          </h2>

          <Button
            variant="outline"
            className="rounded-[100px] h-10 px-4 border-[#d8d8d8] font-['Raleway',Helvetica] font-normal text-[15px] text-[#0f0f0f] tracking-[-0.30px]"
          >
            <span>See all our services</span>
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="w-full">
          <div className="flex space-x-5 pb-4">
            {serviceCards.map((card) => (
              <Card
                key={card.id}
                className="flex-none w-[335px] rounded-[18px] border-none shadow-none"
              >
                <div className="relative">
                  <div
                    className="rounded-[18px] overflow-hidden"
                    style={{ height: card.height }}
                  >
                    <div
                      className="h-full w-full bg-cover bg-center rounded-[18px]"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-[15px] right-[15px] w-10 h-10 rounded-full bg-[#ffffff1a] backdrop-blur-[2.5px] border-white"
                  >
                    <img className="w-5 h-5" alt="Svg" src="/svg.svg" />
                  </Button>
                </div>
                <CardContent className="pt-4 px-0">
                  <h3 className="font-['Raleway',Helvetica] font-medium text-lg text-[#0f0f0f] tracking-[-0.36px] leading-[21.6px] mb-[26px]">
                    {card.title}
                  </h3>
                  <p className="font-['Raleway',Helvetica] font-normal text-[13px] text-[#0f0f0fa6] tracking-[-0.26px] leading-[16.9px]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div> */}
      <section className="px-5 mx-auto">
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <header className="flex justify-between items-center mb-12 max-sm:flex-col max-sm:gap-5 max-sm:text-center">
          <h2 className="text-3xl font-bold text-stone-950 max-sm:text-2xl">
            Everything you need, all in one place...
          </h2>
          <button className="flex gap-2.5 items-center px-3.5 py-2.5 text-base bg-white border border-solid cursor-pointer border-zinc-300 rounded-[100px] text-stone-950">
            <span>See all our services</span>
            <ArrowIcon />
          </button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
          {services.map((service, index) => (
            <div key={index} className=" max-md:w-full max-sm:w-full">
              <div className="relative mb-4">
                <img
                  src={service?.image}
                  alt={service?.altText}
                  className="object-cover w-full rounded-2xl"
                />
                <div className="flex absolute justify-center items-center w-10 h-10 border border-white border-solid backdrop-blur-[2.5px] right-[15px] rounded-[100px] top-[15px]">
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_411_1023)">
                      <rect
                        y="0.0996094"
                        width="40"
                        height="40"
                        rx="20"
                        fill="white"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M17.5002 14.2661V15.9328H22.9918L13.3335 25.5911L14.5085 26.7661L24.1668 17.1078V22.5994H25.8335V14.2661H17.5002Z"
                        fill="white"
                      />
                      <rect
                        x="0.5"
                        y="0.599609"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_411_1023">
                        <rect
                          y="0.0996094"
                          width="40"
                          height="40"
                          rx="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="px-0 py-5">
                <h3 className="mb-1.5 text-lg text-stone-950">
                  {service?.title}
                </h3>
                <p className="text-sm leading-4 text-stone-950 text-opacity-70">
                  {service?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
