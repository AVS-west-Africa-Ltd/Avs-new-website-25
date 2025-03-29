"use client"

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import React, { useState } from 'react'
import { Process } from './partials/Processes';
import { fundingSteps, processSteps } from '@/constants/constants';
import { FundSection } from './partials/FundSection';

function OurProcess() {
    const [activeTab, setActiveTab] = useState("build")

    return (
        <div className="bg-white flex flex-row justify-center w-full mt-[100px] py-16">
            <Tabs
                defaultValue="build"
                className="w-full"
                onValueChange={setActiveTab}
            >
                <TabsList className="mx-auto rounded-[43.54px] border-[1.12px] border-solid border-[#93969f] bg-transparent p-0 flex justify-center">

                    <TabsTrigger
                        value="build"
                        className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent"
                    >
                        <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
                            Build Your Vision
                        </span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="fund"
                        className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-[#333333] data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent"
                    >
                        <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
                            Fund Your Vision
                        </span>
                    </TabsTrigger>
                </TabsList>

                <div className='w-full mt-6 md:mt-12 flex flex-col items-center px-4 sm:px-6'>
                    {/* Main Heading */}
                    <h1 className="font-raleway text-[#0f0f0f] text-center leading-tight">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold">{activeTab === "build" ? "From" : "Fuel Your"} </span>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium italic">{activeTab === "build" ? "Idea to Reality" : "Startup’s Growth"}</span>
                    </h1>

                    {/* Subheading */}
                    <p className="font-inter text-[#0f0f0fa6] text-center mt-4 sm:mt-6 max-w-xs sm:max-w-sm md:max-w-xl mx-auto  text-sm sm:text-base leading-relaxed tracking-tight">
                        {
                            activeTab === "build" ? "Transform your vision into a market-ready product with a structured,expert-driven approach—research, branding, design, development, and beyond."
                                :
                                "Secure the right funding to scale your business. From crafting the perfect pitch to connecting with investors, we guide you every step of the way."
                        }
                    </p>

                    {/* Contact button */}
                    <Button className="mt-12 !rounded-full bg-gray-900 hover:bg-gray-800 px-6">
                        Get in touch <Mail className="ml-2 h-4 w-4" />
                    </Button>

                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "build" ? (
                        <motion.div
                            key="build"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <TabsContent value="build">
                                <Process processSteps={processSteps} />
                            </TabsContent>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="fund"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <TabsContent value="fund">
                                <FundSection processSteps={fundingSteps} />
                            </TabsContent>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Tabs>
        </div>
    )
}

export default OurProcess;