
import React from "react";
import ProcessCard from "./ProcessCard";

interface ProcessStep {
    stepNumber: string;
    title: string;
    description: string[];
    image: string;
    hasButton?: boolean;
}

interface ProcessProps {
    processSteps: ProcessStep[];
}

export const FundSection = ({ processSteps }: ProcessProps) => {
    return (
        <div className="flex flex-col w-full max-w-[1042px] items-start gap-[120px] mx-auto px-4 sm:px-6 md:px-0 py-32">
            {processSteps.map((step, index) => (
                <ProcessCard key={step.stepNumber} step={step} isReversed={index % 2 !== 0} />
            ))}
        </div>
    );
};
