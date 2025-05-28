import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface CaseStudyCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  className?: string;
  url?: string;
}

export function CaseStudyCard({
  imageSrc,
  title,
  subtitle,
  className,
  url,
}: CaseStudyCardProps) {
  const router = useRouter();
  return (
    <div className="relative h-[550px] w-full rounded-3xl overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        className="object-cover" 
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        priority
      />
      <div
        className={`absolute bottom-0 z-10 flex justify-between items-center w-full p-4 ${className}`}
      >
        <div className="self-stretch my-auto">
          <h3 className="text-[rgba(255,255,255,0.80)] font-raleway text-[15px] font-normal leading-[19.5px] tracking-[-0.3px]">
            {title}
          </h3>
          <p className="mt-1 text-[rgba(255,255,255,0.80)] font-raleway text-[12px] font-normal leading-[14.5px] tracking-[-0.3px]">
            {subtitle}
          </p>
        </div>
        <button
          onClick={() => router.push(`/${url}`)}
          className="flex overflow-hidden gap-3 self-stretch px-3 py-1 my-auto text-base tracking-tight leading-tight bg-white rounded-full text-zinc-800"
        >
          <span className="my-auto text-[11px]">View more</span>
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
      </div>
    </div>
  );
}