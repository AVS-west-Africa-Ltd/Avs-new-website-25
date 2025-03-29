import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { HeaderSection } from "./sections/MainContentSection/MainContentSection";
import { CallToActionSection } from "./sections/CallToActionSection";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "AVS WEBSITE",
  description: "AVS WEBSITE",
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
        <HeaderSection />
        {children}
        <CallToActionSection />
      </body>
    </html>
  );
}
