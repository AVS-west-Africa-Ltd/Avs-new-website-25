"use client";

import { usePathname } from "next/navigation";
import { HeaderSection } from "@/app/sections/MainContentSection/MainContentSection";
import { CallToActionSection } from "@/app/sections/CallToActionSection";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const isWorkspace = usePathname().startsWith("/kyp");
  return <><HeaderSection />{children}{!isWorkspace && <CallToActionSection />}</>;
}
