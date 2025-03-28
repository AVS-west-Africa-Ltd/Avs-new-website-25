import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export const CallToActionSection = () => {
  // Navigation links data
  const navigationLinks = [
    { title: "Homepage" },
    { title: "About" },
    { title: "Services" },
    { title: "Our work" },
    { title: "Contact" },
  ];

  // Legal links data
  const legalLinks = [
    { title: "Legal" },
    { title: "Privacy Policy" },
    { title: "Term and Conditions" },
  ];

  // Social media links data
  const socialLinks = [
    { title: "Facebook" },
    { title: "Twitter" },
    { title: "TikTok" },
    { title: "Instagram" },
  ];

  return (
    <div className="relative w-full">
      <div className="relative">
        <footer className="relative w-full bg-transparent [background:linear-gradient(180deg,rgba(19,18,17,1)_0%,rgba(26,24,22,1)_100%)] py-24">
          {/* Top rounded white section */}
          <div className="absolute w-full h-[26px] top-0 left-0 bg-white rounded-[0px_0px_26px_26px]" />

          <div className="container mx-auto px-14">
            {/* Logo and description section */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center">
                <div className="relative w-[28.64px] h-[30.38px] overflow-hidden">
                  <div className="relative w-[33px] h-9 -top-px left-[-3px]">
                    <div className="relative h-9">
                      <div className="absolute w-2 h-8 top-0 left-[19px] bg-[#e6e6e6] rounded-[5.68px] rotate-[25.45deg]" />
                      <img
                        className="absolute w-[31px] h-9 top-0 left-0"
                        alt="Group"
                        src="/group-1-1.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative w-[28.64px] h-[30.38px] ml-[-5.59px] overflow-hidden">
                  <div className="relative w-[33px] h-9 -top-px left-[-3px]">
                    <div className="relative h-9">
                      <div className="absolute w-2 h-8 top-0 left-[19px] bg-[#e6e6e6] rounded-[5.68px] rotate-[25.45deg]" />
                      <img
                        className="absolute w-[31px] h-9 top-0 left-0"
                        alt="Group"
                        src="/group-1-2.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="[font-family:'Raleway',Helvetica] font-medium text-avswhite text-[29.5px] tracking-[0] leading-[normal] whitespace-nowrap">
                  enture studio
                </div>
              </div>

              <div className="max-w-[579px] [font-family:'Raleway',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
                <span className="text-white leading-[25.9px]">At </span>
                <span className="font-bold text-[#b3f4ef] leading-[25.9px]">
                  AVS
                </span>
                <span className="text-white leading-[25.9px]">
                  , we carefully choose who we collaborate with. We work with
                  businesses that value quality, precision, and long-term
                  results. Our ideal partners are those who are serious about
                  growth, committed to excellence, and ready to invest in
                  building something truly impactful.
                </span>
              </div>
            </div>

            {/* Main footer content */}
            <div className="flex justify-between mt-16">
              {/* Left side - already rendered above */}
              <div className="flex-1"></div>

              {/* Right side - navigation columns */}
              <div className="flex gap-[84px]">
                {/* Navigation links */}
                <div className="flex flex-col gap-[11px]">
                  {navigationLinks.map((link, index) => (
                    <div key={index} className="h-[19px]">
                      <div
                        className={`[font-family:'Inter',Helvetica] font-normal ${index === 0 ? "text-white" : "text-[#f9f6f6]"} text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap`}
                      >
                        {link.title}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legal links */}
                <div className="flex flex-col gap-[11px] w-[142px]">
                  {legalLinks.map((link, index) => (
                    <div
                      key={index}
                      className={`${index === 0 ? "h-[19px]" : ""}`}
                    >
                      <div
                        className={`[font-family:'Inter',Helvetica] font-normal ${index === 0 ? "text-white" : "text-[#f9f6f6]"} text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap`}
                      >
                        {link.title}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact information */}
                <div className="flex flex-col gap-[11px]">
                  <div className="h-[19px]">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap">
                      Contact
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <PhoneIcon className="w-3.5 h-3.5 text-[#f9f6f6]" />
                    <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f9f6f6] text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap">
                      1-665-671-1216
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#f9f6f6]" />
                    <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f9f6f6] text-[15px] tracking-[-0.30px] leading-[19.5px] whitespace-nowrap">
                      218 Conroy Ford, Delilahshire 48067
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <Separator className="my-16 bg-white/20" />

            {/* Social media section */}
            <div className="flex flex-col items-center gap-3.5 mx-auto max-w-[391px]">
              <div className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffa6] text-[15px] text-center tracking-[-0.30px] leading-[19.5px]">
                Connect with us
              </div>

              <div className="flex items-center gap-[11px] justify-center">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    // variant="outline"
                    className="rounded-full border-[#eff0f3] bg-transparent hover:bg-[#eff0f3]/10"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#ece4e4] text-[15px] tracking-[-0.30px] leading-[19.5px]">
                      {social.title}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
