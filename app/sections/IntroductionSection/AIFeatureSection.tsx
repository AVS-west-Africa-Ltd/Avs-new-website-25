import React from "react";

export const AIFeatureSection = () => {
  return (
    <>
      <div
        className="overflow-hidden px-4 md:pl-16 rounded-3xl py-14 mb-12"
        style={{
          backgroundImage: `url(/assets/bg-s.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full lg:w-[40%]">
            <section className="flex flex-col items-start self-stretch my-auto w-full font-semibold text-white py-8 md:py-0">
              <div className="rounded-[47px] border border-white bg-[rgba(255,255,255,0.30)] backdrop-blur-[35.5px] py-2.5 px-3.5">
                Coming soon on A Venture Studio
              </div>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-6xl">
                <span style={{ fontWeight: 500 }}>
                  Build Smarter, Innovate Faster with
                </span>{" "}
                <span style={{ color: "rgba(255,255,255,1)" }}>AI</span>
              </h1>
              <p className="self-stretch mt-4 md:mt-7 text-sm md:text-base tracking-tight leading-5 md:leading-6">
                Unlock the power of artificial intelligence to transform your
                products. From automation to intelligent insights, we're
                crafting next-gen AI solutions to drive your success. Stay
                tuned—exciting advancements are on the horizon!
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
