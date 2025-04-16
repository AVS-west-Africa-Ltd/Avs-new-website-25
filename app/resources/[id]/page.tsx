"use client";

import React, { useRef } from "react";
import { useState } from "react";

interface TemplateCardProps {
  name: string;
  creator: string;
  type: string;
  downloads: string;
  description: string;
}
const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  creator,
  type,
  downloads,
  description,
}) => {
  return (
    <div className="max-w-s rounded-lg bg-white p-4  md:px-[140px] mx-auto flex flex-col justify-center gap-4">
      <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
      <div className="mt-1 text-sm text-gray-600">
        by {creator} • {type} • {downloads} downloads
      </div>
      <div className="mt-4">
        <button className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16L12 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13L12 16L15 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download
        </button>
      </div>
      <div className="mt-6">
        <h3 className="font-bold text-gray-900">Overview</h3>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "next/navigation";
import Image from "next/image";

const TemplateSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  return (
    <>
      {Number(id) === 1 && (
        <div className="flex flex-col gap-4 bg-[#f8fefd] p-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/1.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/2.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            {/* Repeat for other slides */}
          </Swiper>
          <Swiper
            //@ts-ignore
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/1.png"
                  alt="Thumbnail 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/2.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/Peaches/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            {/* Repeat for other thumbnails */}
          </Swiper>
        </div>
      )}

      {Number(id) === 2 && (
        <div className="flex flex-col gap-4 bg-[#f8fefd] p-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/1.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/2.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/5.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/6.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/7.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/8.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            {/* Repeat for other slides */}
          </Swiper>
          <Swiper
            //@ts-ignore
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/1.png"
                  alt="Thumbnail 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/2.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            {/* Repeat for other thumbnails */}
          </Swiper>
        </div>
      )}

      {Number(id) === 3 && (
        <div className="flex flex-col gap-4 bg-[#f8fefd] p-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/1.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/2.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            {/* Repeat for other slides */}
          </Swiper>
          <Swiper
            //@ts-ignore
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/1.png"
                  alt="Thumbnail 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/2.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/le/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/3.png"
                  alt="Slide 1"
                  // width={1000}
                  // height={1000}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
              // style={{ width: "100%", height: "600px", position: "relative" }}
              >
                <Image
                  src="/assets/resources/los/4.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            {/* Repeat for other thumbnails */}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default function Home() {
  const { id } = useParams();
  const templates = [
    {
      id: 1,
      name: "Classic Ecosystem Mapping Template",
      creator: "A Venture Studio",
      type: "Figma",
      downloads: "3.3k",
      description:
        "A collaborative session where participants work together to visually identify and map stakeholders, resources, and map their relationships. Helps create a shared understanding of the system's dynamics and identify opportunities or challenges within the ecosystem.",
    },
    {
      id: 2,
      name: "Le Orange Pitch Deck Template",
      creator: "A Venture Studio",
      type: "Figma Slide Deck",
      downloads: "3.4k",
      description:
        "A pitch deck is a concise, visually engaging presentation that effectively highlights the key aspects of a business, product, or project to potential investors, partners, or stakeholders. Its primary goal is to generate interest and secure funding or support.",
    },
    {
      id: 3,
      name: "Ultimate User Flow Chart Template",
      creator: "A Venture Studio",
      type: "Figma",
      downloads: "2.5k",
      description:
        "A visual representation of the steps a user takes to complete a specific task or reach a goal within a website or digital product. It helps designers, developers, and stakeholders understand the user's journey, identify friction points, and create intuitive, user-friendly interfaces.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[100px] container mx-auto px-4 py-[100px]">
        {Number(id) === 1 && (
          <TemplateCard
            name="Classic Ecosystem Mapping Template"
            creator="A Venture Studio"
            type="Figma"
            downloads="3.3k"
            description="An ecosystem mapping workshop is a collaborative session where participants work together to visually identify and map stakeholders, resources within a specific system, and map their relationships. It helps create a shared understanding of the system's dynamics and identify opportunities or challenges within the ecosystem. This process results in alignments, co-commitments, solutions, insights, and ideas that could help lead to better strategies and collaborations."
          />
        )}

        {Number(id) === 2 && (
          <TemplateCard
            name="Le Orange Pitch Deck Template"
            creator="A Venture Studio"
            type="Figma Slide Deck"
            downloads="3.4k"
            description="A pitch deck is a concise, visually engaging presentation that effectively highlights the key aspects of a business, product, or project to potential investors, partners, or stakeholders. Its primary goal is to generate interest and secure funding or support. This template provides a clean, modern design that helps you present your business case clearly and professionally."
          />
        )}

        {Number(id) === 3 && (
          <TemplateCard
            name="Ultimate User Flow Chart Template"
            creator="A Venture Studio"
            type="Figma"
            downloads="2.5k"
            description="A visual representation of the steps a user takes to complete a specific task or reach a goal within a website or digital product. It helps designers, developers, and stakeholders understand the user's journey, identify friction points, and create intuitive, user-friendly interfaces. This template includes common flow patterns and is fully customizable for your specific needs."
          />
        )}

        <TemplateSection />
      </div>
    </>
  );
}
