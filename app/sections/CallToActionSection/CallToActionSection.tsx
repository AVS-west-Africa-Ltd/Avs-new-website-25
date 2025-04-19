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
                {/* <h2 className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px] mb-[11px]">
                  Navigation
                </h2> */}
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
                      href="/our-process"
                      className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Our process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="text-white text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Case studies
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/about"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      About
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/services"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Services
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/work"
                      className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                    >
                      Our work
                    </Link>
                  </li> */}
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
                  {/* <PhoneIcon color="white" size={10} aria-hidden="true" /> */}
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.57943 1.74976C5.68401 1.74973 5.78667 1.77781 5.87668 1.83108C5.96668 1.88434 6.04071 1.96082 6.09101 2.05251L6.12076 2.11667L7.28743 5.03334C7.33441 5.15068 7.34202 5.28011 7.30909 5.40215C7.27616 5.52419 7.20448 5.63223 7.10484 5.71001L7.04651 5.74967L6.07001 6.33534L6.10676 6.39542C6.57154 7.13333 7.19585 7.75765 7.93376 8.22242L7.99326 8.25859L8.57951 7.28326C8.64448 7.1748 8.74292 7.09039 8.86002 7.04274C8.97711 6.99508 9.10652 6.98675 9.22876 7.01901L9.29584 7.04176L12.2125 8.20842C12.3096 8.24717 12.3945 8.31131 12.4584 8.39412C12.5222 8.47694 12.5626 8.57539 12.5753 8.67917L12.5794 8.74976V11.0831C12.5794 12.0497 11.796 12.8331 10.7944 12.8319C5.79001 12.528 1.80059 8.53859 1.49609 3.49976C1.49607 3.05338 1.66662 2.62387 1.97284 2.2991C2.27907 1.97434 2.69782 1.77886 3.14343 1.75267L3.24609 1.74976H5.57943Z"
                      fill="#EFF0F4"
                    />
                  </svg>

                  <Link
                    href="tel:1-665-671-1216"
                    className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px] hover:underline"
                  >
                    +44-778-222-1344
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  {/* <MapPinIcon color="white" size={20} aria-hidden="true" /> */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8301 2.99976H2.83008C2.14258 2.99976 1.58633 3.56226 1.58633 4.24976L1.58008 11.7498C1.58008 12.4373 2.14258 12.9998 2.83008 12.9998H12.8301C13.5176 12.9998 14.0801 12.4373 14.0801 11.7498V4.24976C14.0801 3.56226 13.5176 2.99976 12.8301 2.99976ZM12.8301 5.49976L7.83008 8.62476L2.83008 5.49976V4.24976L7.83008 7.37476L12.8301 4.24976V5.49976Z"
                      fill="white"
                    />
                  </svg>

                  <span className="text-[#F9F6F6] text-[15px] leading-[19.5px] tracking-[-0.3px]">
                    dm@aventurestud.io
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
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-2 py-1 md:px-4 md:py-2 rounded-[33px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              Facebook
            </button>
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-2 py-1 md:px-4 md:py-2 rounded-[36px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              Twitter
            </button>
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-2 py-1 md:px-4 md:py-2 rounded-[69px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              TikTok
            </button>
            <button className="text-[#EDE5E5] text-[15px] leading-[19.5px] tracking-[-0.3px] border px-2 py-1 md:px-4 md:py-2 rounded-[56px] border-[#EFF0F4] hover:bg-[#EFF0F4] hover:text-[#131211] transition-colors">
              Instagram
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
