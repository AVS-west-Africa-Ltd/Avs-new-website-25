import Image from "next/image";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { VisionSection } from "./sections/VisionSection";
import { PartnershipSection } from "./sections/PartnershipSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { CallToActionSection } from "./sections/CallToActionSection";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full mx-auto">
       
        <CaseStudiesSection />
        <HeroSection />
        {/* <TestimonialsSection /> */}
        {/* <IntroductionSection /> */}
        {/* <VisionSection /> */}
        {/* <PartnershipSection /> */}
        {/* <FooterSection /> */}
        {/* <FeaturesSection /> */}
        {/* <CallToActionSection /> */}
      </div>
    </div>
  );
}
