"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export interface TemplateCardProps {
  imageSrc: string;
  title: string;
  author: string;
  downloads: string;
  className?: string;
  imageClassName?: string;
  hasOverlayText?: boolean;
  overlayText?: string;
  link: string;
}
export interface TemplateHeaderProps {
  title: string;
  description: string;
}

export const TemplateHeader: React.FC<TemplateHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className="max-w-full w-[484px]">
      <h1 className="text-xl font-semibold text-black max-md:max-w-full">
        {title}
      </h1>
      <p className="mt-3 text-sm text-zinc-600 max-md:max-w-full">
        {description}
      </p>
    </header>
  );
};

export const TemplateCard: React.FC<TemplateCardProps> = ({
  imageSrc,
  title,
  author,
  downloads,
  className = "",
  imageClassName = "",
  hasOverlayText = false,
  overlayText,
  link,
}) => {
  return (
    <Link href={link} className="flex flex-col grow shrink justify-center self-stretch my-auto min-w-60 w-[344px] max-md:w-full max-md:min-w-full">
      <div>
        <div
          className={`overflow-hidden rounded-3xl w-[430px] max-md:w-full ${className}`}
        >
          {hasOverlayText ? (
            <div className="flex relative flex-col px-9 pt-40 pb-12 w-full min-h-[313px] max-md:px-5 max-md:pt-24 max-md:max-w-full max-md:text-4xl">
              <div className="absolute inset-0">
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 430px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="relative text-5xl text-white max-md:text-4xl">
                {overlayText}
              </span>
            </div>
          ) : (
            <div
              className={`relative ${imageClassName}`}
              style={{
                aspectRatio: imageClassName.includes("aspect-")
                  ? undefined
                  : "1.4",
              }}
            >
              <Image
                src={imageSrc}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 430px"
                className="object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex gap-5 justify-between mt-2.5 max-w-full w-[429px] max-md:w-full">
          <div className="text-black">
            <h2 className="text-base">{title}</h2>
            <p className="mt-1.5 text-sm">
              by <span className="font-semibold">{author}</span>
            </p>
          </div>
          <p className="self-start text-sm font-semibold text-zinc-600">
            {downloads}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const ResourceSection: React.FC = () => {
  return (
    <section className="container mx-auto my-10 px-4 md:px-0">
      <TemplateHeader
        title="Ecosystem Mapping Templates"
        description="Identify key players, relationships, and opportunities in your industry to position your startup strategically."
      />
      <div className="flex flex-wrap gap-4 items-center mt-6 w-full max-md:max-w-full max-md:flex-col">
        <TemplateCard
          imageSrc="/api/placeholder/430/313" // Replace with your actual image path
          title="Classic naming workshop"
          author="A Venture Studio"
          downloads="2.3k downloads"
          className="pt-5 text-5xl text-white bg-teal-900"
          hasOverlayText={true}
          overlayText="Ecosystem Mapping"
          link="/templates/Classic%20Naming%20Workshop"
        />
        <TemplateCard
          imageSrc="/api/placeholder/430/307" // Replace with your actual image path
          title="Classic naming workshop"
          author="A Venture Studio"
          downloads="2.3k downloads"
          className="pt-6 bg-orange-200"
          imageClassName="aspect-[1.4]"
          link="/templates/Classic%20Naming%20Workshop"
        />
        <TemplateCard
          imageSrc="/api/placeholder/430/286" // Replace with your actual image path
          title="Classic naming workshop"
          author="A Venture Studio"
          downloads="2.3k downloads"
          className="pt-11 bg-neutral-400"
          imageClassName="aspect-[1.5]"
          link="/templates/Classic%20Naming%20Workshop"
        />
      </div>
    </section>
  );
};
export default ResourceSection;
