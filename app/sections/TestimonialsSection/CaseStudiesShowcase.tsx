"use client";
import * as React from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { ActionCard } from "./ActionCard";
import { urlFor } from "@/sanity";

export default function CaseStudiesShowcase({ data, caseStudiesBlock }: any) {
  // const { title, ctaLinks, featuredStudies } = data;

  console.log("data", data);
  console.log("caseStudiesBlock", caseStudiesBlock[0]);
  return (
    <section className="container overflow-hidden px-4 sm:px-6 lg:px-4 py-12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Content */}
        <div className="lg:w-1/3 w-full flex items-end md:w-1/2">
          <div className="lg:mt-12 w-full">
            <div className="max-w-full">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-stone-950">
                {data?.title}
              </h2>
              {/* <p className="mt-4 text-base text-stone-950">
                Lorem ipsum dolor sit amet consectetur. A elit elit diam pretium
                habitant.
              </p> */}
            </div>
            <div className="flex flex-row sm:flex-row lg:flex-col xl:flex-row gap-4 items-start mt-8 text-xl sm:text-2xl font-medium tracking-tight leading-7">
              {data?.ctaLinks[0] && <ActionCard
                variant="light"
                imageSrc="/assets/b1.svg"
                backgroundImage="/assets/b1.svg"
                text={data?.ctaLinks[0].label}
                url={data?.ctaLinks[0].link}
              
              />}

              {data?.ctaLinks[1] && <ActionCard
                variant="dark"
                imageSrc="/assets/b2.svg"
                backgroundImage={urlFor(data?.ctaLinks[1].backgroundImage).url()}
                text={data?.ctaLinks[1].label}
                url={data?.ctaLinks[1].link}
                multiline
              />}

            </div>
          </div>
        </div>

        {/* Right Column - Case Studies */}
        <div className="lg:w-2/3 lg:pl-5 md:w-full w-full flex items-end">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-4 xl:gap-6 items-stretch w-full he">
            {caseStudiesBlock[0] && <CaseStudyCard data={caseStudiesBlock[0]}
              // imageSrc={urlFor(caseStudiesBlock[0].thumbnailImage).url()}
              // title={caseStudiesBlock[0].title}
              // subtitle={caseStudiesBlock[0].subtitle}
              // className="bottom-3"
              // url={`case-studies/${caseStudiesBlock[0]._key}`}
            />}
            {caseStudiesBlock[1] && <CaseStudyCard data={caseStudiesBlock[1]}
              // imageSrc={urlFor(caseStudiesBlock[1].thumbnailImage).url()}
              // title={caseStudiesBlock[1].title}
              // subtitle={caseStudiesBlock[1].subtitle}
              // className="bottom-3"
              // url={`case-studies/${caseStudiesBlock[1]._key}`}
            />}
          </div>
        </div>
      </div>
    </section>
  );
}
