"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "next/navigation";
import Image from "next/image";

interface TemplateCardProps {
  name: string;
  creator: string;
  type: string;
  downloads: string;
  description?: string;
  link: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  creator,
  type,
  downloads,
  description,
  link: downloadUrl,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full p-4 md:p-6 flex flex-col justify-center gap-2 md:gap-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        {name}
      </h2>
      <div className="text-sm md:text-base text-gray-600">
        by <strong>{creator}</strong>
      </div>
      <div className="flex flex-col gap-2 font-sans">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <span>File format:</span>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold flex items-center gap-1 text-sm font-raleway text-[#636363]">
              <span>
                <Image
                  src="/assets/figma-icon.png"
                  alt="Figma Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </span> 
              <span>{type}</span>
              {type=='Figma'||'Figma Slide Deck'?(<span className="mx-2">You’ll need Figma to open this file.</span>):null}
            </span>
            <span className="mx-2">•</span>
            <span className="font-semibold font-raleway text-[#636363]">{downloads} downloads</span>
          </div>
         
        </div>
      </div>
      <div className="mt-2 flex gap-4">
        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 rounded-full bg-gray-900 w-full md:w-[140px] px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-gray-800 transition-colors"
        >
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
          <span className="text-sm font-medium text-white">Download</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-50 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.5 5.25H5.25C4.78587 5.25 4.34075 5.43437 4.01256 5.76256C3.68437 6.09075 3.5 6.53587 3.5 7V15.75C3.5 16.2141 3.68437 16.6592 4.01256 16.9874C4.34075 17.3156 4.78587 17.5 5.25 17.5H14C14.4641 17.5 14.9092 17.3156 15.2374 16.9874C15.5656 16.6592 15.75 16.2141 15.75 15.75V10.5M9.625 11.375L17.5 3.5M17.5 3.5H13.125M17.5 3.5V7.875" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <span className="text-sm font-medium">Preview</span>
        </button>
      </div>
      {description && (
        <div className="mt-4 md:mt-6">
          <h3 className="font-bold text-gray-900">Overview</h3>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

const TemplateSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();

  return (
    <div className="resources-page">
      {Number(id) === 1 && (
        <div className="flex flex-col gap-2 p-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/resources/Resources/visionstatement.png"
                    alt="Slide 1"
                    fill
                    style={{ objectFit: "contain", padding: "20px" }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/Vision-Statement-Template/KYP2.PNG"
                    alt="Slide 2"
                    fill
                    style={{ objectFit: "contain", padding: "20px" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            //@ts-expect-error Missing type definitions for external library
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
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/resources/Resources/visionstatement.png"
                    alt="Thumbnail 1"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5 ">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/Vision-Statement-Template/KYP2.PNG"
                    alt="Slide 2"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}

      {Number(id) === 2 && (
        <div className="flex flex-col gap-2  p-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <Image
                  src="/assets/resources/Resources/knowyourproduct.png"
                  alt="Slide 1"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <Image
                  src="/assets/Know-Your-Product/KYP.PNG"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            //@ts-expect-error Missing type definitions for external library
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
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5">
                <Image
                  src="/assets/resources/Resources/knowyourproduct.png"
                  alt="Thumbnail 1"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5">
                <Image
                  src="/assets/Know-Your-Product/KYP.PNG"
                  alt="Thumbnail 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}

      {Number(id) === 3 && (
        <div className="flex flex-col gap-2  p-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <Image
                  src="/assets/resources/Resources/feature_prioritisationavs.png"
                  alt="Slide 1"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <Image
                  src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix 1.PNG"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <Image
                  src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix 3.PNG"
                  alt="Slide 3"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            //@ts-expect-error Missing type definitions for external library
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
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5">
                <Image
                  src="/assets/resources/Resources/feature_prioritisationavs.png"
                  alt="Thumbnail 1"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5">
                <Image
                  src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix 1.PNG"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}



{Number(id) === 4 && (
        <div className="flex flex-col gap-2  p-1">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <Image
                  src="/assets/resources/Resources/ecosystemmapping.png"
                  alt="Slide 1"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
                <Image
                  src="/assets/resources/Resources/ecosystemmapping.png"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative cursor-pointer rounded-lg md:rounded-3xl overflow-hidden ">
              {/* bg-[#F0F0F0] this was bg i remove */}
                <Image
                  src="/assets/resources/Resources/ecosystemmapping.png"
                  alt="Slide 3"
                  fill
                  style={{ objectFit: "contain", padding: "20px" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            //@ts-expect-error Missing type definitions for external library
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
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5">
                <Image
                  src="/assets/resources/Resources/ecosystemmapping.png"
                  alt="Thumbnail 1"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-16 sm:h-20 md:h-24 relative cursor-pointer ml-5">
                <Image
                  src="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix 1.PNG"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}

    </div>
  );
};
interface ResourceCardProps {
  id: number
  name: string
  image: string
}

const ResourceCard: React.FC<ResourceCardProps> = ({ id, name, image }) => {
  return (
    <a href={`/resources/${id}`} className="block group">
      <div className="overflow-hidden rounded-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </a>
  )
}

const SimilarResources = ({ currentId }: { currentId: number }) => {
  const allResources = [
    {
      id: 1,
      name: "Vision Statement Template",
      image: "/assets/resources/Resources/visionstatement.png",
    },
    {
      id: 2,
      name: "Know Your Product Template",
      image: "/assets/resources/Resources/knowyourproduct.png",
    },
    {
      id: 3,
      name: "Feature Prioritisation Matrix Template",
      image: "/assets/resources/Resources/feature_prioritisationavs.png",
    },
    {
      id: 4,
      name: "Ecosystem Mapping Template",
      image: "/assets/resources/Resources/ecosystemmapping.png",
    },
  ]

  // Filter out the current active resource
  const similarResources = allResources.filter((resource) => resource.id !== currentId)

  return (
    <div className="mt-16">
     
      <div className="flex items-center mb-8">
          <div className="h-px bg-gray-300 flex-1" />
          <h2 className="px-4 text-lg font-medium">Explore similar resources</h2>
          <div className="h-px bg-gray-300 flex-1" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarResources.map((resource) => (
          <ResourceCard key={resource.id} id={resource.id} name={resource.name} image={resource.image} />
        ))}
      </div>
    </div>
  )
}
export default function Home() {
  const { id } = useParams();
  const currentId = id ? Number(id) : 1

  return (
    <div className="min-h-screen bg-gray- mt-16">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:order-last">
            <TemplateSection />
          </div>
          <div className="flex items-center">
            {Number(id) === 1 && (
              <TemplateCard
                name="Vision Statement Template"
                creator="A Venture Studio"
                type="Figma"
                downloads="510+"
                link="/assets/Vision-Statement-Template/Vision-Statement-Template.jam"
                description="An ecosystem mapping workshop is a collaborative session where participants work together to visually represent the various entities (organisations, individuals, resources) within a specific ecosystem and map their interconnections and relationships. The goal is to gain a shared understanding of the system's dynamics, identify key players, understand resource flows, and uncover opportunities or challenges within the ecosystem. This process often involves brainstorming, visualising connections, and analysing the resulting map to inform strategies and collaborations."
              />
            )}

            {Number(id) === 2 && (
              <TemplateCard
                name="Know Your Product Template"
                creator="A Venture Studio"
                type="Figjam"
                downloads="600+"
                link="/assets/Know-Your-Product/Know-Your-Product-Template.jam"
                description="An ecosystem mapping workshop is a collaborative session where participants work together to visually represent the various entities (organisations, individuals, resources) within a specific ecosystem and map their interconnections and relationships. The goal is to gain a shared understanding of the system's dynamics, identify key players, understand resource flows, and uncover opportunities or challenges within the ecosystem. This process often involves brainstorming, visualising connections, and analysing the resulting map to inform strategies and collaborations."
              />
            )}

            {Number(id) === 3 && (
              <TemplateCard
                name="Feature Prioritisation Matrix Template"
                creator="A Venture Studio"
                type="Figma"
                downloads="230+"
                link="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix.jam"
                description="An ecosystem mapping workshop is a collaborative session where participants work together to visually represent the various entities (organisations, individuals, resources) within a specific ecosystem and map their interconnections and relationships. The goal is to gain a shared understanding of the system's dynamics, identify key players, understand resource flows, and uncover opportunities or challenges within the ecosystem. This process often involves brainstorming, visualising connections, and analysing the resulting map to inform strategies and collaborations."
              />
            )}

{Number(id) === 4 && (
              <TemplateCard
                name="Ecosystem Mapping"
                creator="A Venture Studio"
                type="Figma"
                downloads="230+"
                link="/assets/Feature-Prioritization-Matrix-Template/Feature Prioritization Matrix.jam"
                description="An ecosystem mapping workshop is a collaborative session where participants work together to visually represent the various entities (organisations, individuals, resources) within a specific ecosystem and map their interconnections and relationships. The goal is to gain a shared understanding of the system's dynamics, identify key players, understand resource flows, and uncover opportunities or challenges within the ecosystem. This process often involves brainstorming, visualising connections, and analysing the resulting map to inform strategies and collaborations."
              />
            )}
          </div>
        </div>

        <SimilarResources currentId={currentId} />

      </div>
    </div>
  );
}



