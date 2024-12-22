"use client";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Promote from "../components/Promote";
import { whoWeAre } from "../data/whoWeAreData";
import Partners from "../components/Partners";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import { IData } from "../utils/data";
import { useEffect, useState } from "react";


export default function Technical() {

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
            service?.link?.toLowerCase().includes("technical")
          )
        );
  
        const technicalServices =
          jsonData.data[0].services?.filter((service) =>
            service?.link?.toLowerCase().includes("technical")
          ) || [];
  
        console.log("technical Services:", technicalServices[0]);
  
        setData(technicalServices[0]);
      } catch (error) {
        setIsLoading(false);
        const response = IData;
   
        setData(response[0]);
        const technicalServices =
          response[0]?.services?.filter((service) =>
            service?.link?.toLowerCase().includes("technical")
          ) || [];
  
        console.log("technical Services:", technicalServices[0]);
  
        setData(technicalServices[0]);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Ensure loading is stopped in both success and error cases
      }
    };
  
    if (isLoading) {
      return (
        <div className="w-screen h-screen bg-gradient-to-b from-[#67594F] via-[#243129] to-[#121212] flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl">Please wait...</h1>
        </div>
      );
    }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="w-full h-full bg-black"
    >
      <Hero
        backgroundImage={data?.bgImage}
        header={"Technical Activation"}
        subHeader={
          data?.subTitle
        }
        description={
          data?.subDescription
        }
        description_2={data?.subHeroTitle || ""}
        btnTxt={data?.subHeroButtonText || "Let’s Connect Now!"}
      />
      <AboutUs  content={data?.whoDescription || []} title={data?.whoTitle} />
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
        callToAction={data?.stepHeroDescription}
        steps={data?.steps}
      />
      <Partners />
      <Footer pageLink={"/technical"} />
    </motion.div>
  );
}
