import { MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CallToActionSection = () => {
  return (
    <>
      <footer className="w-full bg-[linear-gradient(180deg,#131211_0%,#1A1816_100%)] min-h-[448px] flex flex-col px-[58px] py-[92px] max-md:px-10 max-sm:px-5">
        <div className="flex justify-between max-md:flex-col max-md:gap-10">
          <div className="flex flex-col gap-[17px] max-w-[579px]">
            <img
              src="/assets/AVS Logo2.svg"
              alt="AVS Logo"
              className="w-[220px] h-[40px] object-contain"
            />
            <div className="text-white text-base leading-[26px]">
              <span>At </span>
              <span className="text-[#B3F4EF] font-bold">AVS</span>
              <span>
                , we carefully choose who we collaborate with. We work with
                businesses that value quality, precision, and long-term results.
                Our ideal partners are those who are serious about growth,
                committed to excellence, and ready to invest in building
                something truly impactful.
              </span>
            </div>
          </div>
          <div className="flex gap-[84px] max-md:flex-wrap max-sm:gap-10">
            <div className="flex gap-[84px] max-md:flex-wrap max-sm:gap-10">
              <nav aria-label="Main navigation">
                <h2 className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px] mb-[11px]">
                  Navigation
                </h2>
                <ul className="flex flex-col gap-[11px]">
                  <li>
                    <Link
                      href="/"
                      className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Homepage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Our work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav aria-label="Legal navigation">
                <h2 className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px] mb-[11px]">
                  Legal
                </h2>
                <ul className="flex flex-col gap-[11px]">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex flex-col gap-[11px]">
              <h2 className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px]">
                Contact
              </h2>
              <address className="not-italic flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <PhoneIcon color="white" size={20} aria-hidden="true" />
                  <Link
                    href="tel:1-665-671-1216"
                    className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                  >
                    1-665-671-1216
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <MapPinIcon color="white" size={20} aria-hidden="true" />
                  <span className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px]">
                    218 Conroy Ford, Delilahshire 48067
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-[#818285] my-10" />
        <div className="flex flex-col items-center gap-3.5">
          <div className="text-[rgba(255,255,255,0.65)] text-center text-[15px] leading-[19.5px] tracking-[-0.3px]">
            Connect with us
          </div>
          <div className="flex items-center gap-[11px] flex-wrap justify-center">
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-4 py-2 rounded-[33px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              Facebook
            </button>
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-4 py-2 rounded-[36px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              Twitter
            </button>
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-4 py-2 rounded-[69px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              TikTok
            </button>
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-4 py-2 rounded-[56px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              Instagram
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
