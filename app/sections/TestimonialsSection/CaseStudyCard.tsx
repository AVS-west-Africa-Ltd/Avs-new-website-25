import { urlFor } from "@/sanity";
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

export function CaseStudyCard({ data }: any) {
  const router = useRouter();
  return (
    <div className="relative h-[550px] w-full rounded-3xl overflow-hidden">
      <Image
        src={data.thumbnailImage && urlFor(data?.thumbnailImage).url()}
        alt={data?.appName}
        className="object-cover" 
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        priority
      />
     <div className="absolute bottom-0 z-10 w-full p-">
  {/* Overlay background */}
  <div className="bg-[rgba(0,0,0,0.4)] rounded-xl p-4 flex justify-between items-center w-full">
    <div className="self-stretch my-auto">
      <h3 className="text-white font-raleway text-[15px] font-normal leading-[19.5px] tracking-[-0.3px]">
        {data?.appName}
      </h3>
      <p className="mt-1 text-white font-raleway text-[12px] font-normal leading-[14.5px] tracking-[-0.3px]">
        {data?.shortDescription}
      </p>
    </div>

    <button
      onClick={() => router.push(`/case-studies/${data?._key}`)}
      className="flex gap-3 px-3 py-1 text-base tracking-tight leading-tight bg-white rounded-full text-zinc-800"
    >
      <span className="my-auto text-[11px]">View more</span>
      <img
        src={
          data?.appName === "Rateo"
            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/deb11fede1716f134b16d141d715d872a883fd8d?placeholderIfAbsent=true&apiKey=d04567b451d44aeeb521d608f01f78f3"
            : "https://cdn.builder.io/api/v1/image/assets/TEMP/b15e7e28fc11231334a0fd369d228144ed4c8ee1?placeholderIfAbsent=true&apiKey=d04567b451d44aeeb521d608f01f78f3"
        }
        alt=""
        className="object-contain shrink-0 aspect-square w-[15px]"
      />
    </button>
  </div>
</div>

    </div>
  );
}