'use client';

import { useQuery } from "@tanstack/react-query";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import ProjectShowcase from "./sections/ProjectShowcase/ProjectShowcase";
import { sanityPageConfig } from "@/constants/constants";
import client from "@/sanity";

// ✅ Move it outside the component
const fetchPageData = async (pageId: string) => {
  const query = `*[_type == "page" && _id == "${pageId}"][0]`;
  const result = await client.fetch(query);
  return result;
};

export default function Home() {
  const {
    data: pageData2,
    isLoading: isLoading2,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.caseStudyPageId],
    queryFn: () => fetchPageData(sanityPageConfig.caseStudyPageId),
  });

  if (isLoading2) {
    return <div>Loading...</div>;
  }

  const { contentBlocks } = pageData2 || {};

  const heroTextBlock = contentBlocks?.find(
    (block: any) => block._type === 'pageHeroBlock'
  );
  const caseStudiesBlock = contentBlocks?.filter(
    (block: any) => block._type === 'caseStudy'
  );
 

  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full mx-auto">
        <CaseStudiesSection data={heroTextBlock} />
        <ProjectShowcase data={caseStudiesBlock} />
      </div>
    </div>
  );
}
