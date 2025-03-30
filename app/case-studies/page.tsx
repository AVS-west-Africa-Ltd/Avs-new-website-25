import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import ProjectShowcase from "./sections/ProjectShowcase/ProjectShowcase";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full mx-auto">
        <CaseStudiesSection />
        <ProjectShowcase />
      </div>
    </div>
  );
}
