import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const FooterSection = () => {
  // Service card data for mapping
  const serviceCards = [
    {
      id: 1,
      image: "/nsl7xhrkx7jy6t98ofw22rwbo-png.png",
      title: "Intuitive Mobile and website designs",
      description:
        "A great product isn't just functional—it's user-friendly and visually compelling. We design intuitive digital experiences that captivate users, drive engagement, and enhance brand credibility.",
      height: "419px",
    },
    {
      id: 2,
      image: "/nsl7xhrkx7jy6t98ofw22rwbo-png-1.png",
      title: "Funding Your Vision",
      description:
        "Securing the right financial backing is crucial for startup success. We guide you through investor connections, pitch deck creation, and financial planning to help you attract the right funding for growth.",
      height: "188px",
    },
    {
      id: 3,
      image: "/qddgwcutlubvc1brjivgopmulw-jpg.png",
      title: "Building a strong brand strategy",
      description:
        "Your brand is more than a logo—it's your identity. We craft cohesive brand strategies that align with your mission, differentiate you from competitors, and create a lasting impression in the market.",
      height: "419px",
    },
    {
      id: 4,
      image: "/q3mzsavj01trph6szlco2wuty-jpg.png",
      title: "Product Development & Innovation",
      description:
        "From ideation to launch, we focus on building high-quality, scalable products. Our structured approach ensures seamless development, robust architecture, and efficient execution tailored to your business needs.",
      height: "335px",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container">
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
      </div>
    </section>
  );
};
