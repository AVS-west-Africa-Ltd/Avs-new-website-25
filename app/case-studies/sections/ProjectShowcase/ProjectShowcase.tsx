"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CaseDetails, OurProjects } from "@/constants/data";

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
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col gap-5 items-start mb-3"
    >
      <Link href={`/case-studies/${data?.id}`}>
        <img
          src={data?.appImage}
          alt={data?.appName}
          className="object-cover w-full rounded-3xl h-[549px] max-md:h-[400px] max-sm:h-[300px] shadow-lg"
        />
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
    </motion.article>
  );
}

export default function ProjectShowcase() {
  // const projects = [
  //   {
  //     id: 1,
  //     image: "/assets/rateo.svg",
  //     altText: "Rateo workplace platform",
  //     title: "Rateo",
  //     description: "Redefining Workplace",
  //   },
  //   {
  //     id: 2,
  //     image: "/assets/onetouch.svg",
  //     altText: "One Touch Football platform",
  //     title: "One Touch Football",
  //     description: "Digital home for grassroots football",
  //   },
  //   {
  //     id: 3,
  //     image: "/assets/onthego.svg",
  //     altText: "On The Go platform",
  //     title: "On The Go",
  //     description: "Get free wifi, On the Go!",
  //   },
  //   {
  //     id: 4,
  //     image: "/assets/onetouch.svg",
  //     altText: "Gemstone platform",
  //     title: "Gemstone",
  //     description: "Redefining Workplace",
  //   },
  //   {
  //     id: 5,
  //     image: "/assets/onthego.svg",
  //     altText: "Kijiji platform",
  //     title: "Kijiji",
  //     description: "Redefining Workplace",
  //   },
  //   {
  //     id: 6,
  //     image: "/assets/onetouch.svg",
  //     altText: "Plantec platform",
  //     title: "Plantec",
  //     description: "Redefining Workplace",
  //   },
  // ];

  return (
    <section className="mx-auto max-w-[1335px] p-5 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-md:flex max-md:flex-col">
        {OurProjects.map((project: CaseDetails, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </section>
  );
}
