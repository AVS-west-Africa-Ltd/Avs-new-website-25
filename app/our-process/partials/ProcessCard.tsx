import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProcessStep } from "@/constants/constants";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProcessCard = ({ step, isReversed }: { step: ProcessStep; isReversed: boolean }) => {
    return (
        <motion.div
            className={`flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-32 w-full 
        ${isReversed ? "" : "md:flex-row-reverse"}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Image
                className="w-full sm:w-[350px] md:w-[400px] lg:w-[470px] h-auto md:h-[400px] lg:h-[538px] object-cover rounded-[20px]"
                alt={`${step.title} illustration`}
                src={step.imageSrc}
                width={470}
                height={538}
                priority
            />
            <div className="flex flex-col w-full sm:w-[90%] md:w-[60%] lg:w-[444px] items-start gap-4 md:gap-6">
                <div className="w-full font-raleway font-bold text-[#93969F] text-3xl sm:text-4xl md:text-5xl">{step.number}</div>
                <div className="w-full font-raleway font-bold text-[#0f0f0f] text-2xl sm:text-3xl md:text-4xl">{step.title}</div>
                <div className="w-full font-raleway font-normal text-medium text-sm sm:text-base">
                    {step.description.map((paragraph, i) => (
                        <React.Fragment key={i}>
                            {paragraph}
                            {i < step.description.length - 1 && (
                                <>
                                    <br />
                                    <br />
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {step?.hasList && (step.bulletList ?? []).length > 0 && (
                    <ul className="list-disc pl-5 text-sm sm:text-base text-medium">
                    {(step.bulletList ?? []).map((point, i) => {
                      if (point.includes(" – ")) {
                        const [boldText, normalText] = point.split(" – ");
                        return (
                          <li key={i}>
                            <strong className="font-bold text-[#636363]">{boldText}</strong>
                            {normalText ? ` – ${normalText}` : ""}
                          </li>
                        );
                      } else {
                        return <li key={i}>{point}</li>; // Render as-is if no " – " is found
                      }
                    })}
                  </ul>
                  
                )}

                {step.subDescription && <div className="w-full font-raleway font-normal text-medium text-sm sm:text-base">
                    {step.subDescription}
                </div>}

                {step.hasButton && (
                    <Button
                        variant="outline"
                        className="h-10 px-3 rounded-[100px] border border-solid border-[#d8d8d8] bg-white"
                    >
                        <span className="font-raleway font-normal text-[#0f0f0f] text-sm sm:text-base tracking-[-0.30px]">
                            Learn more
                        </span>
                        <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </Button>
                )}
            </div>
        </motion.div>
    );
};

export default ProcessCard;
