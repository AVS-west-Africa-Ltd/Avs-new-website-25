"use client";

import {
  ArrowRightIcon,
  CloudDownloadIcon,
  EyeIcon,
  MapPinIcon,
  PencilIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Edit, Download, Phone, MapPin } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div className="bg-white flex flex-row justify-center mt-[100px] container mx-auto w-full pb-20">
          <div className="bg-white w-full relative">
            <FormSection />
            <HowItWorksSection />
            <Card
              style={{
                backgroundColor: "#F0F0F0",
              }}
              className="mx-auto rounded-[30px] bg-[#F0F0F0] p-6"
            >
              <h2 className="text-center font-semibold text-[#071914] text-2xl [font-family:'Raleway',Helvetica] my-10">
                Fill out the following form to frame your business
              </h2>
              <CardContent className="py-10">
                <BusinessDetailsSection />
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8 mb-12">
              <Button onClick={() => setIsOpen(!isOpen)} className="bg-[#0F0F0F] text-white rounded-[100px] h-10 w-[230px] [font-family:'Raleway',Helvetica] font-normal text-[15px] tracking-[-0.30px]">
                Generate Business Model
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-[100px]">
          <Canvas setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      )}
    </>
  );
}

export const HowItWorksSection = () => {
  // Data for the steps to make the code more maintainable
  const steps = [
    {
      icon: <PencilIcon className="w-[29px] h-[29px] text-white" />,
      description:
        "Fill out the canvas fields below to clarify your startup's structure.",
    },
    {
      icon: <EyeIcon className="w-[27px] h-[27px] text-white" />,
      description: "Preview your completed canvas.",
    },
    {
      icon: <CloudDownloadIcon className="w-[27px] h-[27px] text-white" />,
      description: "Download it as a PDF or send it to your inbox.",
    },
  ];
  return (
    <section className="w-full py-16 flex flex-col items-center px-4">
      <h2 className="font-['Raleway',Helvetica] font-semibold text-black text-[32px] mb-12 text-center">
        How it works?
      </h2>
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col w-full md:w-[260px] items-center gap-6">
              <div className="relative w-[75.02px] h-[75.02px] bg-[#205352] rounded-[16.67px] shadow-[0px_29.17px_66.68px_#196a3426] flex items-center justify-center">
                {step.icon}
              </div>
              <p className="font-['Raleway',Helvetica] font-normal text-[#333333] text-base text-center leading-[26px]">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="relative w-[11px] h-[11px] md:w-[210px] md:h-[11px] mt-0 md:mt-[34px]">
                <div className="relative h-[11px] hidden md:block">
                  <div className="w-48 h-px absolute top-1.5 left-[9px] border-t border-dashed border-[#205352]"></div>
                  <div className="left-0 absolute w-[11px] h-[11px] top-0 bg-[#205352] rounded-[5.5px]"></div>
                  <div className="left-[199px] absolute w-[11px] h-[11px] top-0 bg-[#205352] rounded-[5.5px]"></div>
                </div>
                {/* Mobile version - just the dot */}
                <div className="md:hidden w-[11px] h-[11px] bg-[#205352] rounded-[5.5px]"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export const FormSection = () => {
  return (
    <section className="flex flex-col items-center gap-[72px] w-full py-10">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[56px] text-center text-[#0F0F0F] font-normal font-['Raleway',Helvetica] leading-normal max-w-[804px]">
          <span className="font-medium italic">Structure Your Idea</span>
          <span className="font-bold"> Into a Working Business</span>
        </h1>
        <p className="max-w-[624px] text-base text-center text-[#0f0f0fa6] font-['Raleway',Helvetica] tracking-[-0.30px] leading-[19.5px]">
          Use our guided Business Model Canvas to define your value, audience,
          revenue streams, and everything in between—before you build a thing.
        </p>
        <Button className="flex items-center gap-2.5 px-5 py-2.5 bg-[#0F0F0F] rounded-[100px] text-[15px] font-['Raleway',Helvetica] font-normal tracking-[-0.30px]">
          <span>Get in touch</span>
          <ArrowRightIcon className="w-[15px] h-[15px]" />
        </Button>
      </div>
    </section>
  );
};

export const BusinessDetailsSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    keyPartners: [] as string[],
    keyActivities: [] as string[],
    keyResources: [] as string[],
    valueProposition: "",
    customerRelationships: "",
    customerSegments: [] as string[],
    channels: [] as string[],
    costStructure: [] as string[],
    revenueStreams: [] as string[],
  });

  // Input states
  const [partnerInput, setPartnerInput] = useState("");
  const [activityInput, setActivityInput] = useState("");
  const [resourceInput, setResourceInput] = useState("");
  const [segmentInput, setSegmentInput] = useState("");
  const [channelInput, setChannelInput] = useState("");
  const [costInput, setCostInput] = useState("");
  const [revenueInput, setRevenueInput] = useState("");

  // Handle text input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding items to arrays
  const handleAddItem = (
    field: keyof typeof formData,
    value: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value.trim() && Array.isArray(formData[field])) {
      setFormData((prev) => ({
        ...prev,
        [field]: [...(prev[field] as string[]), value.trim()],
      }));
      setInput("");
    }
  };

  // Handle removing items from arrays
  const handleRemoveItem = (field: keyof typeof formData, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index),
    }));
  };

  // Handle key press (Enter) for inputs
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: keyof typeof formData,
    value: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddItem(field, value, setInput);
    }
  };

  return (
    <section className="flex flex-col w-full max-w-[860px] mx-auto items-start gap-10">
      {/* Project and Client Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
        <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
          <Label className="font-semibold text-[#232326] text-base">
            Project name
          </Label>
          <Input
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="E.g mango tech"
          />
        </div>
        <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
          <Label className="font-semibold text-[#232326] text-base">
            Client
          </Label>
          <Input
            name="client"
            value={formData.client}
            onChange={handleInputChange}
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="E.g John Doe"
          />
        </div>
      </div>

      {/* Key Partners */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Key Partners
          </Label>
          <p className="font-normal text-medium text-sm">
            The network of suppliers and partners that make the business model
            work.
          </p>
          <Input
            value={partnerInput}
            onChange={(e) => setPartnerInput(e.target.value)}
            onKeyDown={(e) =>
              handleKeyPress(e, "keyPartners", partnerInput, setPartnerInput)
            }
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Add a partner"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          {formData.keyPartners.map((partner, index) => (
            <Badge
              key={index}
              className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
            >
              <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
                {partner}
              </span>
              <XIcon
                className="w-3.5 h-3.5 cursor-pointer"
                onClick={() => handleRemoveItem("keyPartners", index)}
              />
            </Badge>
          ))}
        </div>
      </div>

      {/* Key Activities */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Key Activities
          </Label>
          <p className="font-normal text-medium text-sm">
            The most important tasks your company must do to operate
            effectively.
          </p>
          <Input
            value={activityInput}
            onChange={(e) => setActivityInput(e.target.value)}
            onKeyDown={(e) =>
              handleKeyPress(
                e,
                "keyActivities",
                activityInput,
                setActivityInput
              )
            }
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Add tasks"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          {formData.keyActivities.map((activity, index) => (
            <Badge
              key={index}
              className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
            >
              <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
                {activity}
              </span>
              <XIcon
                className="w-3.5 h-3.5 cursor-pointer"
                onClick={() => handleRemoveItem("keyActivities", index)}
              />
            </Badge>
          ))}
        </div>
      </div>

      {/* Key Resources */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Key Resources
          </Label>
          <p className="font-normal text-medium text-sm">
            The critical assets required to deliver your value proposition.
          </p>
          <Input
            value={resourceInput}
            onChange={(e) => setResourceInput(e.target.value)}
            onKeyDown={(e) =>
              handleKeyPress(e, "keyResources", resourceInput, setResourceInput)
            }
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Add assets"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          {formData.keyResources.map((resource, index) => (
            <Badge
              key={index}
              className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
            >
              <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
                {resource}
              </span>
              <XIcon
                className="w-3.5 h-3.5 cursor-pointer"
                onClick={() => handleRemoveItem("keyResources", index)}
              />
            </Badge>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Value Proposition
          </Label>
          <p className="font-normal text-medium text-sm">
            The product, service, or feature that solves a problem or delivers
            specific benefits to your customers.
          </p>
          <Textarea
            name="valueProposition"
            value={formData.valueProposition}
            onChange={handleInputChange}
            className="h-36 w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Description"
          />
        </div>
      </div>

      {/* Customer Relationships */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Customer Relationships
          </Label>
          <p className="font-normal text-medium text-sm">
            How you acquire, retain, and grow your customer base.
          </p>
          <Textarea
            name="customerRelationships"
            value={formData.customerRelationships}
            onChange={handleInputChange}
            className="h-36 w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Description"
          />
        </div>
      </div>

      {/* Customer Segments */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Customer Segments
          </Label>
          <p className="font-normal text-medium text-sm">
            The groups of people or organisations you aim to serve.
          </p>
          <Input
            value={segmentInput}
            onChange={(e) => setSegmentInput(e.target.value)}
            onKeyDown={(e) =>
              handleKeyPress(
                e,
                "customerSegments",
                segmentInput,
                setSegmentInput
              )
            }
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Add customer segments"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          {formData.customerSegments.map((segment, index) => (
            <Badge
              key={index}
              className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
            >
              <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
                {segment}
              </span>
              <XIcon
                className="w-3.5 h-3.5 cursor-pointer"
                onClick={() => handleRemoveItem("customerSegments", index)}
              />
            </Badge>
          ))}
        </div>
      </div>

      {/* Channels */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Channels
          </Label>
          <p className="font-normal text-medium text-sm">
            How you communicate with and deliver your product or service to
            customers.
          </p>
          <Input
            value={channelInput}
            onChange={(e) => setChannelInput(e.target.value)}
            onKeyDown={(e) =>
              handleKeyPress(e, "channels", channelInput, setChannelInput)
            }
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Add channels"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          {formData.channels.map((channel, index) => (
            <Badge
              key={index}
              className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[30px] flex items-center gap-2.5"
            >
              <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
                {channel}
              </span>
              <XIcon
                className="w-3.5 h-3.5 cursor-pointer"
                onClick={() => handleRemoveItem("channels", index)}
              />
            </Badge>
          ))}
        </div>
      </div>

      {/* Cost Structure */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Cost Structure
          </Label>
          <p className="font-normal text-medium text-sm">
            The major costs involved in operating your business model.
          </p>
          <Input
            value={costInput}
            onChange={(e) => setCostInput(e.target.value)}
            onKeyDown={(e) =>
              handleKeyPress(e, "costStructure", costInput, setCostInput)
            }
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Add major costs"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          {formData.costStructure.map((cost, index) => (
            <Badge
              key={index}
              className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
            >
              <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
                {cost}
              </span>
              <XIcon
                className="w-3.5 h-3.5 cursor-pointer"
                onClick={() => handleRemoveItem("costStructure", index)}
              />
            </Badge>
          ))}
        </div>
      </div>

      {/* Revenue Streams */}
      <div className="flex flex-col items-start gap-[15px] w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <Label className="font-semibold text-[#232326] text-base">
            Revenue Streams
          </Label>
          <p className="font-normal text-medium text-sm">
            The ways your business generates income from different customer
            segments.
          </p>
          <Input
            value={revenueInput}
            onChange={(e) => setRevenueInput(e.target.value)}
            onKeyDown={(e) =>
              handleKeyPress(e, "revenueStreams", revenueInput, setRevenueInput)
            }
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            placeholder="Add revenue streams"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          {formData.revenueStreams.map((revenue, index) => (
            <Badge
              key={index}
              className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
            >
              <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
                {revenue}
              </span>
              <XIcon
                className="w-3.5 h-3.5 cursor-pointer"
                onClick={() => handleRemoveItem("revenueStreams", index)}
              />
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

const Canvas = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <div className="flex flex-col bg-[#ffffff]">
      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        <div className="mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#0f0f0f]">
              Take a final look at your{" "}
              <span className="italic">Business Model Canvas</span>
            </h1>
          </div>

          <div className="flex justify-center gap-4 mb-10">
            <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex items-center gap-2 border border-[#0f0f0f] rounded-full px-6 py-2">
              <Edit className="h-5 w-5" />
              Edit canvas
            </button>
            <button className="cursor-pointer flex items-center gap-2 bg-[#0f0f0f] text-white rounded-full px-6 py-2">
              <Download className="h-5 w-5" />
              Download
            </button>
          </div>

          {/* Business Model Canvas */}
          <div className="flex border border-[#e6e6e6] rounded-lg overflow-hidden">
            {/* Left Sidebar */}
            <div className="bg-[#f12c16] w-[135px] flex-shrink-0 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                <h2 className="text-white text-4xl font-bold tracking-wide">
                  Business Model Canvas
                </h2>
              </div>
            </div>

            {/* Canvas Grid */}
            <div className="flex-grow grid grid-cols-5 grid-rows-3 gap-[14px] bg-[#F3ECEB] p-[20px]">
              {/* Row 1 */}
              <div className="bg-white p-6 min-h-60">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">KEY PARTNERS</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The network of suppliers and partners that make the business
                  work
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Key Partners"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              <div className="bg-white p-6 min-h-60 col-span-1">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">KEY ACTIVITIES</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The most important activities your company needs to make its
                  business work
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Key Activities"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              <div className="bg-white p-6 h-[120px row-span-2">
                {" "}
                {/* Adjusted height for 2 rows */}
                <h3 className="font-bold text-sm mb-2">VALUE PROPOSITION</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The products and services that create value for a specific
                  customer segment
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Value Proposition"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              <div className="bg-white p-6 min-h-60">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">
                  CUSTOMER RELATIONSHIPS
                </h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The type of relationship your company establishes with
                  specific segments
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Customer Relationships"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              <div className="bg-white p-6 min-h-60">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">CUSTOMER SEGMENTS</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The different groups of people or organizations you aim to
                  reach and serve
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Customer Segments"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-white p-6 min-h-60 col-span-1">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">KEY RESOURCES</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The most important assets required to make the business work
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Key Resources"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              <div className="bg-white p-6 min-h-60">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">CHANNELS</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  How you communicate with and deliver value to your target
                  customers
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Channels"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white p-6 min-h-60 col-span-2">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">COST STRUCTURE</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The costs incurred to operate a business model
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Cost Structure"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>

              <div className="bg-white p-6 min-h-60 col-span-5">
                {" "}
                {/* Increased height and padding */}
                <h3 className="font-bold text-sm mb-2">REVENUE STREAMS</h3>
                <p className="text-xs text-[#818285] mb-6">
                  {" "}
                  {/* Increased margin */}
                  The revenue you generate from each customer segment
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Revenue Streams"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
