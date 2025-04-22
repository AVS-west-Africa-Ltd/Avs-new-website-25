import { CaseStudiesSection } from "./CaseStudiesSection";
import { AIFeatureSection } from "./IntroductionSection";
import { ResourceSection } from "./Resources";

export default function Home() {
  return (
    <div className="max-w-[1500px] mx-auto overflow-hidden">
      <CaseStudiesSection />
      <AIFeatureSection />
      <ResourceSection />
    </div>
  );
}
