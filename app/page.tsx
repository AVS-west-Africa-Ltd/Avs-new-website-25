'use client'

import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { VisionSection } from "./sections/VisionSection";
import { PartnershipSection } from "./sections/PartnershipSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import CaseStudiesShowcase from "./sections/TestimonialsSection/CaseStudiesShowcase";
import { AIFeatureSection } from "./sections/IntroductionSection/AIFeatureSection";
import { useQuery } from "@tanstack/react-query";
import { sanityPageConfig } from "@/constants/constants";
import client from "@/sanity";

export default function Home() {
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['page', sanityPageConfig.landingPageId],
    queryFn: () => fetchPageData(sanityPageConfig.landingPageId),
  });

  const {
    data: pageData2,
    isLoading: isLoading2,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.caseStudyPageId],
    queryFn: () => fetchPageData(sanityPageConfig.caseStudyPageId),
  });


  const fetchPageData = async (pageId: string) => {
    const query = `*[_type == "page" && _id == "${pageId}"][0]`;
    const result = await client.fetch(query);
    return result;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log("pageData2", pageData2);

  if (pageData?.contentBlocks && pageData2?.contentBlocks) {
    const heroTextBlock = pageData.contentBlocks.find(
      (block: any) => block._type === 'heroTextBlock'
    );
    const heroFeatureImageBlock = pageData.contentBlocks.find(
      (block: any) => block._type === 'heroFeatureImageBlock'
    );
    const homePartnersSection = pageData.contentBlocks.find(
      (block: any) => block._type === 'homePartnersSection'
    );
    const homeCaseStudiesSection = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeCaseStudiesSection'
    );
    const homeFeatureAnnouncement = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeFeatureAnnouncement'
    );

    const homeExpertiseShowcase = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeExpertiseShowcase'
    );

    const homeTextImageSection = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeTextImageSection'
    );
    const homeMissionStatement = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeMissionStatement'
    );
    const homeFeatureGrid = pageData.contentBlocks.find(
      (block: any) => block._type === 'homeFeatureGrid'
    );
    const homecCTAWithMedia = pageData.contentBlocks.find(
      (block: any) => block._type === 'homecCTAWithMedia'
    );

    const { contentBlocks } = pageData2;

    const caseStudiesBlock = contentBlocks?.filter(
      (block: any) => block._type === 'caseStudy'
    );

    // console.log("homeFeatureGrid", caseStudiesBlock);
    // console.log("homeCaseStudiesSection", homeCaseStudiesSection);
    return (
      <div className="bg-white w-full">
        <div className="bg-white w-full mx-auto">
          {heroTextBlock && (<CaseStudiesSection data={heroTextBlock} heroFeatureImageBlock={heroFeatureImageBlock} />)}
          {homePartnersSection && (<HeroSection data={homePartnersSection} />)}
          {homeCaseStudiesSection && (<CaseStudiesShowcase data={homeCaseStudiesSection} caseStudiesBlock={caseStudiesBlock} />)}
          {homeFeatureAnnouncement && <AIFeatureSection data={homeFeatureAnnouncement} />}
          {homeExpertiseShowcase && <VisionSection data={homeExpertiseShowcase} />}
          {homeMissionStatement && <PartnershipSection data={homeMissionStatement} />}
          {homeFeatureGrid && <FooterSection data={homeFeatureGrid} />}
          {homecCTAWithMedia && <FeaturesSection data={homecCTAWithMedia} />}
        </div>
      </div>
    );
  }

}
