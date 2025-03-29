import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'

function OurProcess() {
    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <Tabs
                defaultValue="build"
                className="flex flex-row justify-center w-full"
            >
                <TabsList className="rounded-[43.54px] border-[1.12px] border-solid border-[#93969f] bg-transparent p-0">
                    <TabsTrigger
                        value="build"
                        className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-dark data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent"
                    >
                        <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
                            Build Your Vision
                        </span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="fund"
                        className="inline-flex flex-col items-center justify-center gap-[12.28px] px-[17.86px] py-[8.93px] relative flex-[0_0_auto] data-[state=active]:bg-dark data-[state=active]:text-white rounded-[111.65px] data-[state=inactive]:bg-transparent"
                    >
                        <span className="relative w-fit mt-[-1.12px] [font-family:'Inter',Helvetica] font-normal text-[16.7px] tracking-[-0.33px] leading-[21.8px] whitespace-nowrap">
                            Fund Your Vision
                        </span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default OurProcess;