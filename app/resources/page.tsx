import { CaseStudiesSection } from "./CaseStudiesSection";
import { AIFeatureSection } from "./IntroductionSection";
import { ResourceSection } from "./Resources";


export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full mx-auto">
        <CaseStudiesSection />
        <AIFeatureSection />
        <ResourceSection />
      </div>
    </div>
  );
}
