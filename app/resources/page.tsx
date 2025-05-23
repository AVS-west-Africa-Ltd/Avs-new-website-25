import { CaseStudiesSection } from "./CaseStudiesSection";
// import { AIFeatureSection } from "./IntroductionSection";
import { FeatureCardsSection } from "./IntroductionSection/AIFeatureSection";
import { ResourceSection } from "./Resources";
import { ResourceSections } from "./Resources/Resources";

export default function Home() {
  return (
    <div className="max-w-[1500px] mx-auto overflow-hidden">
      <CaseStudiesSection />
      {/* <AIFeatureSection /> */}

      <FeatureCardsSection/>
      {/* <ResourceSection /> */}

      <ResourceSections />

    </div>
  );
}
