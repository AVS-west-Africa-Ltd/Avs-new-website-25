
// app/layout.tsx
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { HeaderSection } from "./sections/MainContentSection/MainContentSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContextLayouts from "@/components/context-layouts";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "A Venture Studio | AI-powered Tech and Digital Solutions",
  description: "A Venture Studio is a venture studio that builds and invests in tech and digital driven solutions. We are dedicated to creating innovative products and services that leverage the power of expert humans and artificial intelligence to solve real-world problems.",
  icons: {
    icon: '/assets/Dark.png', // This references your icon file in the public folder
    apple: '/assets/Dark.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.className}`}>
      <body
        className={`${raleway.variable} antialiased`}
      >
        <ContextLayouts>
          <HeaderSection />
          {children}
          <CallToActionSection />
        </ContextLayouts>
      </body>
    </html>
  );
}