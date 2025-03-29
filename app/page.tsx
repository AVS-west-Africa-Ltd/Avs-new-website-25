import Image from "next/image";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { VisionSection } from "./sections/VisionSection";
import { PartnershipSection } from "./sections/PartnershipSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import CaseStudiesShowcase from "./sections/TestimonialsSection/CaseStudiesShowcase";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full mx-auto">
       
        <CaseStudiesSection />
        <HeroSection />
        <CaseStudiesShowcase />
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
