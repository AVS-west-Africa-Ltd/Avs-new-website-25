"use client";
import * as React from "react";
import Link from "next/link";
import { CaseDetails, OurProjects } from "@/constants/data";
import Image from "next/image";
import { urlFor } from "@/sanity";

interface ProjectCardProps {
  image: string;
  altText: string;
  title: string;
  description: string;
  id: number;
}

export function ArrowIcon() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.95" width="53" height="53" rx="26.5" fill="black" />
      <path
        d="M25.1782 22.3156V23.9719H30.6356L21.0376 33.5698L22.2053 34.7375L31.8032 25.1395V30.5969H33.4595V22.3156H25.1782Z"
        fill="white"
      />
    </svg>
  );
}

export function ProjectCard({ data }: { data: CaseDetails }) {
  return (
    <article className="flex flex-col gap-5 items-start mb-3 w-full transition-transform duration-200 hover:scale-[1.02]">
      {data?.id === 4 ? (
        // When data.id is 4, render without the Link wrapper
        <>
          <div className="w-full h-[549px] max-md:h-[400px] max-sm:h-[300px] relative rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={urlFor(data?.thumbnailImage).url() ?? ""}
              alt={data?.appName ?? ""}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full mt-">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-black max-sm:text-xl">
                {data?.appName}
              </h2>
              <p className="text-base text-black text-opacity-80 max-sm:text-sm">
                {data?.shortDescription}
              </p>
            </div>
          </div>
        </>
      ) : (
        // For all other data.id values, keep the Link wrapper
        <Link href={`/case-studies/${data?._key}`} className="w-full">
          <div className="w-full h-[549px] max-md:h-[400px] max-sm:h-[300px] relative rounded-3xl shadow-lg overflow-hidden">
            <Image
               src={urlFor(data?.thumbnailImage).url() ?? ""}
              alt={data?.appName ?? ""}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-black max-sm:text-xl">
                {data?.appName}
              </h2>
              <p className="text-base text-black text-opacity-80 max-sm:text-sm">
                {data?.shortDescription}
              </p>
            </div>
            <button
              className="flex justify-center items-center bg-black rounded-full h-[53px] w-[53px] max-sm:h-[45px] max-sm:w-[45px] transition-all hover:bg-gray-800"
              aria-label={`View ${data?.appName} project`}
            >
              <ArrowIcon />
            </button>
          </div>
        </Link>
      )}
    </article>
  );
}

export default function ProjectShowcase({ data }: { data: any[] }) {
  return (
    <section className="mx-auto max-w-[1500px] p-5 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-md:flex max-md:flex-col">
        {data?.map((project: CaseDetails, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </section>
  );
}