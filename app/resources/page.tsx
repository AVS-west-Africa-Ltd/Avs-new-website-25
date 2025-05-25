'use client';

import { useQuery } from "@tanstack/react-query";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { AIFeatureSection } from "./IntroductionSection";
import { ResourceSection } from "./Resources";
import { sanityPageConfig } from "@/constants/constants";
import client from "@/sanity";

export default function Home() {
  const {
    data: pageData,
    isLoading: isLoading,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.resourcesPageId],
    queryFn: () => fetchPageData(sanityPageConfig.resourcesPageId),
  });

  const fetchPageData = async (pageId: string) => {
    const query = `*[_type == "page" && _id == "${pageId}"][0]`;
    const result = await client.fetch(query);
    return result;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!pageData) {
    return <div>No data found</div>;
  }
  const { contentBlocks } = pageData;

  // Filter content blocks based on their _type to pass to specific sections
  const pageHeroBlockData = contentBlocks?.find((block: any) => block._type === 'pageHeroBlock');
  const featureBannerData = contentBlocks?.find((block: any) => block._type === 'featureBanner');
  const templateCategoryData = contentBlocks?.filter((block: any) => block._type === 'templateCategory');

  console.log('pageData', templateCategoryData);
  return (
    <div className="max-w-[1500px] mx-auto overflow-hidden">
      <CaseStudiesSection data={pageHeroBlockData}/>
      <AIFeatureSection data={featureBannerData}/>
      <ResourceSection data={templateCategoryData}/>
    </div>
  );
}
