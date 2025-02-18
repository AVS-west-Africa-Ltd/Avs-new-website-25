"use client";
import Link from "next/link";
import Logo from "./components/Logo";
import { useState, useEffect, useClient } from "react"; // Import useClient
import { motion } from "framer-motion";
import TestimonialSlider from "./components/TestimonialSlider";
import { IData, fetchLandingPages } from "./utils/data";
import Maintenance from "./components/Maintenance";
// import fetchLandingPages from './api/api';

const MobileView = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const info = await fetchLandingPages();
      // console.log("New info ",info);
      const response = IData;
      console.log(response[0]);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#67594F] via-[#243129] to-[#121212]">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${"/sea.png"})` }}
      >
        <div className="h-20 p-4 w-40 ">
          <Logo />
        </div>

        {/* main content  */}
        <div className="text-white">
          <div className="text-5xl font-semibold px-4 pb-4">
            <h1 className="">Discovering New Ventures,</h1>
            <h1>One Adventure at a Time</h1>
          </div>
          <p className="px-4 pb-12">
            We are A Venture Studio connecting you with the right expertise for
            your product or business idea. We support you and the growth of your
            business through strategic guidance and empowerment.
          </p>
          <div className="relative mx-2 p-6 border-y-[0.5px] border-line">
            <Link href="/partnership">
              <span>Looking for</span>
              <p>Partnerships & Advisory</p>
              <span className="h-full absolute right-0 top-0  flex items-center">
                &rarr;
              </span>
            </Link>
          </div>
          <div className="relative mx-2 p-6 border-y-[0.5px] border-line">
            <Link href="/technical">
              <span>Looking for</span>
              <p>Technical Activation</p>
              <span className="h-full absolute right-0 top-0  flex items-center">
                &rarr;
              </span>
            </Link>
          </div>
          <div className="relative mx-2 p-6 border-y-[0.5px] border-line">
            <Link href="/digital">
              <span>Looking for</span>
              <p>Digital Activation</p>
              <span className="h-full absolute right-0 top-0  flex items-center">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopView = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://avswebapi.onthegoafrica.com/api/v1/landing");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const jsonData = await response.json();
      console.log("Fetched data:", jsonData);
  
      setData(jsonData.data[0]); // Update the state with fetched data
    } catch (err) {
      console.error("Error fetching data:", err);
      setData(IData[0]); // Set fallback data in case of an error
    } finally {
      setLoading(false); // Ensure loading is stopped in both success and error cases
    }
  };
  

  if(loading){
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
      transition={{ delay: 0.2 }}
      className="w-screen overflow-hidden md:h-screen bg-gradient-to-b from-[#67594F] via-[#243129] to-[#121212]"
    >
      <div className=" md:absolute top-0 h-20 p-4 pl-6 md:pl-20 w-40 md:w-60">
        <Logo />
      </div>

      <div className="md:grid grid-cols-1 grid-rows-10 md:grid-cols-6 md:grid-rows-5 w-full h-full md:border-[0.5px] border-line">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-3 md:row-span-3 row-span-4 xl:text-5xl lg:text-4xl md:text-4xl text-3xl md:w-[80%] m-auto font-semibold text-white space-y-2 max-md:px-6 max-md:py-4"
        >
          <h1 className="my-4">{data?.title}</h1>
          {/* <h1 className=""> your Adventure?</h1> */}
          {/* <h1>One Adventure at a Time</h1> */}

          <br />
          <p className="lg:text-md  md:text-sm max-md:pb-10 font-normal">
            {data?.description}
          </p>
        </motion.div>
        <div className="md:col-span-3 md:col-start-1 md:row-start-4 row-span-3 row-start-5 text-white md:px-16  md:py-8 md:border-[0.5px] border-line max-md:px-6">
          <p className="lg:text-md md:text-sm max-md:pb-10">{data?.about}</p>

          <p className="lg:text-md md:text-sm mt-9 max-md:py-10">
            {data?.about2}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-3 md:row-span-3 md:col-start-4 row-start-1 md:border-[0.5px] border-line max-md:absolute max-md:top-0 max-md:w-full max-md:h-full max-md:opacity-40"
          style={{ backgroundImage: `url(${"/sea.png"})` }}
        >
          {/* <TestimonialSlider /> */}
        </motion.div>

        {data?.services?.map((service, index) => (
          <div
            key={index}
            className={`
      md:col-start-${4 + index} 
      md:row-start-4 
      row-start-${8 + index} 
      md:pb-56 pt-6 md:h-full md:flex 
      hover:bg-gradient-to-t from-green transition-all duration-300 
      max-md:border-y-[0.5px] md:border-[0.5px] border-line
    `}
          >
            <div className="w-full h-full flex">
              <Link href={service.link || "#"} className="flex w-full">
                <div className="md:max-w-[170px] md:m-auto md:pb-6 max-md:p-6">
                  <span className="font-khand text-grey">Looking for</span>
                  <p className="text-white italic lg:text-lg w-1/2">
                    {service.title || "Default Title"}
                  </p>
                  <span className="text-white">&rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMaintenance, setIsMaintenance] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
    
  //   fetch("/api/maintenance-status") 
  //     .then((res) => res.json())
  //     .then((data) => setIsMaintenance(data.maintenance))
  //     .catch(() => setIsMaintenance(false));
  // }, []);

  if (isMaintenance) {
    return <Maintenance />;
  }

  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
}