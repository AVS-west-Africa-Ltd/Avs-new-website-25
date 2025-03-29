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
        "/assets/img1.svg",
      altText: "Mobile and website design",
      title: "Intuitive Mobile and website designs",
      description:
        "A great product isn't just functional—it's user-friendly and visually compelling. We design intuitive digital experiences that captivate users, drive engagement, and enhance brand credibility.",
    },
    {
      image:
      "/assets/img2.svg",
      altText: "Funding",
      title: "Funding Your Vision",
      description:
        "Securing the right financial backing is crucial for startup success. We guide you through investor connections, pitch deck creation, and financial planning to help you attract the right funding for growth.",
    },
    {
      image:
      "/assets/img3.svg",
      altText: "Brand strategy",
      title: "Building a strong brand strategy",
      description:
        "Your brand is more than a logo—it's your identity. We craft cohesive brand strategies that align with your mission, differentiate you from competitors, and create a lasting impression in the market.",
    },
    {
      image:
      "/assets/img4.svg",
      altText: "Product development",
      title: "Product Development & Innovation",
      description:
        "From ideation to launch, we focus on building high-quality, scalable products. Our structured approach ensures seamless development, robust architecture, and efficient execution tailored to your business needs.",
    },
  ];

  return (
    <section className="w-full py-10">
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
