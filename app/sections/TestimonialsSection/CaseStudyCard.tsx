import * as React from "react";

interface CaseStudyCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  className?: string;
}

export function CaseStudyCard({
  imageSrc,
  title,
  subtitle,
  className,
}: CaseStudyCardProps) {
  return (
    <article className="relative">
      <img
        src={imageSrc}
        alt={title}
        className="object-contain z-0 my-auto rounded-3xl aspect-[0.8] min-w-60 w-full max-md:max-w-full"
      />
      {/* <div
        className={`flex absolute z-0 gap-10 items-center self-start min-w-60 ${className}`}
      >
        <div className="self-stretch my-auto">
          <h3 className="text-2xl font-semibold tracking-tight leading-none text-white">
            {title}
          </h3>
          <p className="mt-1 text-base tracking-tight leading-tight text-white">
            {subtitle}
          </p>
        </div>
        <button className="flex overflow-hidden gap-3 self-stretch px-5 py-3 my-auto text-base tracking-tight leading-tight bg-white rounded-[100px] text-zinc-800 w-[138px]">
          <span className="my-auto">View more</span>
          <img
            src={
              title === "Rateo"
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/deb11fede1716f134b16d141d715d872a883fd8d?placeholderIfAbsent=true&apiKey=d04567b451d44aeeb521d608f01f78f3"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/b15e7e28fc11231334a0fd369d228144ed4c8ee1?placeholderIfAbsent=true&apiKey=d04567b451d44aeeb521d608f01f78f3"
            }
            alt=""
            className="object-contain shrink-0 aspect-square w-[15px]"
          />
        </button>
      </div> */}
    </article>
  );
}
