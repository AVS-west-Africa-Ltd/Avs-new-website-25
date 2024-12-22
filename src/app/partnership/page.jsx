"use client";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Promote from "../components/Promote";
import Steps from "../components/Steps";
import { whoWeAre } from "../data/whoWeAreData";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IData } from "../utils/data";

export default function Partnership() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const info = await fetch("https://avswebapi.onthegoafrica.com/api/v1/landing");
      if (!info.ok) {
        setIsLoading(false);
        throw new Error(`Error: ${info.status}`);
      }

      const jsonData = await info.json();
      console.log(
        "Fetched data:",
        jsonData.data[0].services?.filter((service) =>
          service?.link?.toLowerCase().includes("partnership")
        )
      );

      const partnershipServices =
        jsonData.data[0].services?.filter((service) =>
          service?.link?.toLowerCase().includes("partnership")
        ) || [];

      console.log("Partnership Services:", partnershipServices[0]);

      setData(partnershipServices[0]);
    } catch (error) {
      setIsLoading(false);
      const response = IData;
      console.log(response[0]);
      setData(response[0]);
      const partnershipServices =
        response[0]?.services?.filter((service) =>
          service?.link?.toLowerCase().includes("partnership")
        ) || [];

      console.log("Partnership Services:", partnershipServices[0]);

      setData(partnershipServices[0]);
      console.error("Error fetching data:", error);
    }
    finally {
      setIsLoading(false);
    }
  };

  if(isLoading){
    return (
      <div className="w-screen h-screen bg-gradient-to-b from-[#67594F] via-[#243129] to-[#121212] flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl">Please wait...</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Hero
        backgroundImage={data?.bgImage}
        header="Strategy, Partnerships & Advisory"
        subHeader={
          data?.subTitle ||
          "Your Journey, Our Expert Support; Navigating Entrepreneurship with Ease"
        }
        description={
          data?.subDescription ||
          "We can help you build an agile leadership team, and help you become more flexible in assembling a collective of experts that allow you to scale and grow your business."
        }
        description_2={
          data?.subHeroTitle || "The right people at the right time."
        }
        btnTxt={data?.subHeroButtonText || "Let’s Connect Now!"}
      />
      <AboutUs content={data?.whoDescription || []} title={data?.whoTitle} />
      <Promote
        backgroundImage={data?.promoteImage}
        slogan={
          data?.promoteTitle
        }
        paragraph={
          data?.promoteDescription
        }
      />
      <Steps
        slogan={
          data?.stepHeroTitle
        }
        callToAction={
          data?.stepHeroDescription}
        steps={data?.steps}
      />
      <Partners />
      <Footer pageLink={"/partnership"} />
    </div>
  );
}
