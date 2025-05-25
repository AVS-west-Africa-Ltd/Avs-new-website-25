"use client";

import {
  ArrowRightIcon,
  CloudDownloadIcon,
  EyeIcon,
  MapPinIcon,
  PencilIcon,
  PhoneIcon,
} from "lucide-react";
import React, { useRef } from "react";
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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// @ts-expect-error  Missing type definitions for external library
import domtoimage from "dom-to-image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { sanityPageConfig } from "@/constants/constants";
import client, { urlFor } from "@/sanity";
import { PortableText } from "@portabletext/react";
import { url } from "inspector";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false); // New loading state
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

  const handleGenerateClick = () => {
    setIsGenerating(true); // Set loading to true when clicked

    // Simulate processing delay
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsGenerating(false); // Set loading to false after delay
    }, 2500); // 2.5 second delay
  };

  const {
    data: pageData,
    isLoading: isLoading,
  } = useQuery({
    queryKey: ['page', sanityPageConfig.servicePageId],
    queryFn: () => fetchPageData(sanityPageConfig.servicePageId),
  });

  const fetchPageData = async (pageId: string) => {
    const query = `*[_type == "page" && _id == "${pageId}"][0]`;
    const result = await client.fetch(query);
    return result;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <div>No data found</div>;
  }

  const { contentBlocks } = pageData;

  console.log('pageData', contentBlocks);

  return (
    <>
      {isOpen ? (
        <div className="bg-white flex flex-row justify-center mt-[100px] container mx-auto w-full pb-20">
          <div className="bg-white w-full relative">
            <FormSection data={contentBlocks[0]}/>
            <HowItWorksSection data={contentBlocks[1]}/>
            <Card
              style={{
                backgroundColor: "#F0F0F0",
              }}
              className="mx-auto rounded-[30px] bg-[#F0F0F0] p-2"
            >
              <h2 className="text-center font-semibold text-[#071914] text-2xl [font-family:'Raleway',Helvetica] my-10">
                Fill out the following form to frame your business
              </h2>
              <CardContent className="py-10">
                <BusinessDetailsSection
                  formData={formData}
                  setFormData={setFormData}
                />
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8 mb-12">
              <button
                onClick={handleGenerateClick}
                disabled={isGenerating} // Disable button when loading
                className="bg-[#0F0F0F] text-white rounded-[100px] py-4 px-6 cursor-pointer w-[230px] [font-family:'Raleway',Helvetica] font-normal text-[15px] tracking-[-0.30px]"
              >
                {isGenerating ? "Generating..." : "Generate Business Model"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-[100px]">
          <Canvas setIsOpen={setIsOpen} isOpen={isOpen} formData={formData} />
        </div>
      )}
    </>
  );
}
const HowItWorksSection = ({ data }: { data: any }) => {
  const stepsa = [
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
        {data?.title}
      </h2>
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {data?.steps.map((step: any, index: number) => (
          <React.Fragment key={index}>
            <div className="flex flex-col w-full md:w-[260px] items-center gap-6">
              <div className="relative w-[75.02px] h-[75.02px] bg-[#205352] rounded-[16.67px] shadow-[0px_29.17px_66.68px_#196a3426] flex items-center justify-center">
                {/* {step.icon} */}
                <Image
                  src={urlFor(step.icon).url()}
                  alt={step.title}
                  width={25.02}
                  height={25.02}
                />
              </div>
              <p className="font-['Raleway',Helvetica] font-normal text-[#333333] text-base text-center leading-[26px]">
                {step.description}
              </p>
            </div>
            {index < data?.steps.length - 1 && (
              <div className="relative w-[11px] h-[11px] md:w-[210px] md:h-[11px] mt-0 md:mt-[34px]">
                <div className="relative h-[11px] hidden md:block">
                  <div className="w-48 h-px absolute top-1.5 left-[9px] border-t border-dashed border-[#205352]"></div>
                  <div className="left-0 absolute w-[11px] h-[11px] top-0 bg-[#205352] rounded-[5.5px]"></div>
                  <div className="left-[199px] absolute w-[11px] h-[11px] top-0 bg-[#205352] rounded-[5.5px]"></div>
                </div>
                <div className="md:hidden w-[11px] h-[11px] bg-[#205352] rounded-[5.5px]"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const FormSection = ({ data }: { data: any }) => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center gap-[72px] w-full py-10">
      <div className="flex flex-col items-center gap-6">
        <span className="text-[56px] text-center text-[#0F0F0F] font-normal font-['Raleway',Helvetica] leading-normal max-w-[804px]">
          {/* <span className="font-medium italic">Structure Your Idea</span>
          <span className="font-bold"> Into a Working Business</span> */}
          <PortableText value={data?.title} />
        </span>
        <p className="max-w-[624px] text-base text-center text-[#0f0f0fa6] font-['Raleway',Helvetica] tracking-[-0.30px] leading-[19.5px]">
          {data?.description}
        </p>
        <button
          onClick={() => router.push(data?.buttonLink)}
          className="flex items-center px-6 py-3 cursor-pointer gap-2.5 text-white bg-[#0F0F0F] rounded-[100px] text-[15px] font-['Raleway',Helvetica] font-normal tracking-[-0.30px]"
        >
          <span>{data?.buttonText}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5422 2.75H2.54224C1.85474 2.75 1.29849 3.3125 1.29849 4L1.29224 11.5C1.29224 12.1875 1.85474 12.75 2.54224 12.75H12.5422C13.2297 12.75 13.7922 12.1875 13.7922 11.5V4C13.7922 3.3125 13.2297 2.75 12.5422 2.75ZM12.5422 5.25L7.54224 8.375L2.54224 5.25V4L7.54224 7.125L12.5422 4V5.25Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

const BusinessDetailsSection = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [partnerInput, setPartnerInput] = useState("");
  const [activityInput, setActivityInput] = useState("");
  const [resourceInput, setResourceInput] = useState("");
  const [segmentInput, setSegmentInput] = useState("");
  const [channelInput, setChannelInput] = useState("");
  const [costInput, setCostInput] = useState("");
  const [revenueInput, setRevenueInput] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddItem = (
    field: keyof typeof formData,
    value: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value.trim() && Array.isArray(formData[field])) {
      setFormData((prev: any) => ({
        ...prev,
        [field]: [...(prev[field] as string[]), value.trim()],
      }));
      setInput("");
    }
  };

  const handleRemoveItem = (field: keyof typeof formData, index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: (prev[field] as string[]).filter(
        (_: any, i: number) => i !== index
      ),
    }));
  };

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
          {formData.keyPartners.map((partner: string, index: number) => (
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
          {formData.keyActivities.map((activity: string, index: number) => (
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
          {formData.keyResources.map((resource: string, index: number) => (
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
          {formData.customerSegments.map((segment: string, index: number) => (
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
          {formData.channels.map((channel: string, index: number) => (
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
          {formData.costStructure.map((cost: string, index: number) => (
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
          {formData.revenueStreams.map((revenue: string, index: number) => (
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
  formData,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  formData: any;
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  // const handleDownloadPDF = async () => {
  //   if (!canvasRef.current) return;

  //   try {
  //     // 1. First convert the image to base64 to ensure it's loaded
  //     const convertImageToBase64 = (img: HTMLImageElement) => {
  //       const canvas = document.createElement('canvas');
  //       canvas.width = img.naturalWidth;
  //       canvas.height = img.naturalHeight;
  //       const ctx = canvas.getContext('2d');
  //       if (ctx) {
  //         ctx.drawImage(img, 0, 0);
  //         return canvas.toDataURL('image/png');
  //       }
  //       return '';
  //     };

  //     // 2. Wait for all images to load
  //     const images = canvasRef.current.getElementsByTagName('img');
  //     await Promise.all(Array.from(images).map(img => {
  //       if (img.complete) return Promise.resolve();
  //       return new Promise((resolve) => {
  //         img.onload = resolve;
  //         img.onerror = resolve; // Continue even if some images fail
  //       });
  //     }));

  //     // 3. Replace all image sources with base64 data
  //     Array.from(images).forEach(img => {
  //       img.src = convertImageToBase64(img);
  //     });

  //     // 4. Use html2canvas with proper configuration
  //     const canvas = await html2canvas(canvasRef.current, {
  //       scale: 2, // Higher resolution
  //       logging: false,
  //       useCORS: true,
  //       allowTaint: true,
  //       backgroundColor: '#ffffff',
  //       scrollX: 0,
  //       scrollY: 0,
  //       windowWidth: canvasRef.current.scrollWidth,
  //       windowHeight: canvasRef.current.scrollHeight
  //     });

  //     // 5. Create PDF with proper dimensions
  //     const pdf = new jsPDF({
  //       orientation: 'landscape',
  //       unit: 'mm',
  //       format: [canvas.width * 0.264583, canvas.height * 0.264583] // Convert px to mm
  //     });

  //     // 6. Add image to PDF
  //     const imgData = canvas.toDataURL('image/png', 1.0);
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

  //     // 7. Save the PDF
  //     pdf.save(`${formData.projectName || 'business-model'}-canvas.pdf`);
  //   } catch (error) {
  //     console.error('PDF generation error:', error);
  //     alert("PDF generation failed. Please try again or use browser print (Ctrl+P → Save as PDF)");
  //   }
  // };

  const handleDownloadPDF = async () => {
    if (!canvasRef.current) return;

    try {
      const dataUrl = await domtoimage.toPng(canvasRef.current);
      const pdf = new jsPDF("landscape");
      pdf.addImage(dataUrl, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), 0);
      pdf.save("canvas.pdf");
    } catch (error) {
      console.error(error);
      alert("PDF failed. Try screenshot (Ctrl+P → Save as PDF)");
    }
  };

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
            <p className="text-xl mt-4">
              {formData.projectName && `Project: ${formData.projectName}`}
              {formData.client && ` | Client: ${formData.client}`}
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex items-center gap-2 border border-[#0f0f0f] rounded-full px-6 py-2"
            >
              <Edit className="h-5 w-5" />
              Edit canvas
            </button>
            <button
              onClick={handleDownloadPDF}
              className="cursor-pointer flex items-center gap-2 bg-[#0f0f0f] text-white rounded-full px-6 py-2"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </button>
          </div>

          {/* Fixed width canvas that will force scrolling on small screens */}
          <div className="w-full overflow-hidden">
            {/* Container with horizontal scroll */}
            <div
              ref={canvasRef}
              className="w-full overflow-x-auto"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {/* Fixed width canvas that will force scrolling on small screens */}
              <div
                className="flex"
                style={{ width: "1610px", margin: "0 auto", height: "120vh" }}
              >
                {/* Left Sidebar */}
                <div className="bg-[#f12c16] w-[255px] flex-shrink-0 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                    <div className="text-white text-2xl font-bold mb-4 flex w-[600px] gap-[100px]">
                      <div className="w-1/2">
                        <h1 className="font-bold text-[15px]">
                          {formData.projectName &&
                            `Project: ${formData.projectName}`}
                        </h1>
                        <div className="border-b border-[#e6e6e6] mt-[10px]"></div>
                      </div>

                      <div className="w-1/2">
                        <h1 className="font-bold text-[15px]">
                          {formData.client && `Client: ${formData.client}`}
                        </h1>
                        <div className="border-b border-[#e6e6e6] mt-[10px]"></div>
                      </div>
                    </div>
                    <h2 className="text-white text-6xl font-bold tracking-wide">
                      Business Model Canvas
                    </h2>

                    <p className="text-white text-[20px] font-medium">
                      It is a visual artifact with elements describing a
                      service&apos;s or product&apos;s <br />
                      value proposition, infrastructure, customers, and finances
                    </p>
                  </div>
                </div>

                {/* Canvas Grid - Fixed width */}
                <div
                  className="relative flex-grow grid grid-cols-5 grid-rows-3 gap-[14px] bg-[#F3ECEB] p-[20px]"
                  style={{ width: "945px" }}
                >
                  {/* Watermark Background - moved to bottom right */}
                  <div className="absolute bottom-0 right-0 flex items-center justify-center pointer-events-none z-0 p-[20px]">
                    <div className="text-[#00000010] text-[20px] mx-2 font-bold rotate-[40de]">
                      A VENTURE STUDIO
                    </div>
                  </div>

                  {/* KEY PARTNERS */}
                  <div className="bg-white p-6 min-h-60">
                    <h3 className="font-bold text-sm mb-2">KEY PARTNERS</h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The network of suppliers and partners that make the
                      business work
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {formData.keyPartners?.map(
                        (partner: string, index: number) => (
                          <li key={index} className="text-[13px]">
                            {partner}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* KEY ACTIVITIES */}
                  <div className="bg-white p-6 min-h-60 col-span-1">
                    <h3 className="font-bold text-sm mb-2">KEY ACTIVITIES</h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The most important activities your company needs to make
                      its business work
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {formData.keyActivities?.map(
                        (activity: string, index: number) => (
                          <li key={index} className="text-[13px]">
                            {activity}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* VALUE PROPOSITION */}
                  <div className="bg-white p-6 min-h-60 row-span-2">
                    <h3 className="font-bold text-sm mb-2">
                      VALUE PROPOSITION
                    </h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The products and services that create value for a specific
                      customer segment
                    </p>
                    <div className="p-2 rounded h-full overflow-y-auto">
                      {formData.valueProposition}
                    </div>
                  </div>

                  {/* CUSTOMER RELATIONSHIPS */}
                  <div className="bg-white p-6 min-h-60">
                    <h3 className="font-bold text-sm mb-2">
                      CUSTOMER RELATIONSHIPS
                    </h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The type of relationship your company establishes with
                      specific segments
                    </p>
                    <div className="p-2 rounded h-full overflow-y-auto">
                      {formData.customerRelationships}
                    </div>
                  </div>

                  {/* CUSTOMER SEGMENTS */}
                  <div className="bg-white p-6 min-h-60">
                    <h3 className="font-bold text-sm mb-2">
                      CUSTOMER SEGMENTS
                    </h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The different groups of people or organizations you aim to
                      reach and serve
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {formData.customerSegments?.map(
                        (segment: string, index: number) => (
                          <li key={index} className="text-[13px]">
                            {segment}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* KEY RESOURCES */}
                  <div className="bg-white p-6 min-h-60 col-span-1">
                    <h3 className="font-bold text-sm mb-2">KEY RESOURCES</h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The most important assets required to make the business
                      work
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {formData.keyResources?.map(
                        (resource: string, index: number) => (
                          <li key={index} className="text-[13px]">
                            {resource}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* CHANNELS */}
                  <div className="bg-white p-6 min-h-60">
                    <h3 className="font-bold text-sm mb-2">CHANNELS</h3>
                    <p className="text-xs text-[#818285] mb-6">
                      How you communicate with and deliver value to your target
                      customers
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {formData.channels?.map(
                        (channel: string, index: number) => (
                          <li key={index} className="text-[13px]">
                            {channel}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* COST STRUCTURE */}
                  <div className="bg-white p-6 min-h-60 col-span-2">
                    <h3 className="font-bold text-sm mb-2">COST STRUCTURE</h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The costs incurred to operate a business model
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {formData.costStructure?.map(
                        (cost: string, index: number) => (
                          <li key={index} className="text-[13px]">
                            {cost}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* REVENUE STREAMS */}
                  <div className="bg-white p-6 min-h-60 col-span-5">
                    <h3 className="font-bold text-sm mb-2">REVENUE STREAMS</h3>
                    <p className="text-xs text-[#818285] mb-6">
                      The revenue you generate from each customer segment
                    </p>
                    <ul className="grid grid-cols-3 gap-4 list-disc pl-5">
                      {formData.revenueStreams?.map(
                        (revenue: string, index: number) => (
                          <li key={index} className="text-[13px]">
                            {revenue}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

{
  /* Left Sidebar */
}
{
  /* <div className="bg-[#f12c16] w-full md:w-[255px] flex-shrink-0 relative p-4">
              <div className="md:absolute md:top-1/2 md:left-1/2 md:bottom-1/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:-rotate-90 md:whitespace-nowrap">
                <div className=" text-white text-2xl font-bold mb-4 flex flex-col md:flex-row w-[600px] gap-[10px] md:gap-[100px]">
                  <div className="w-full md:w-1/2">
                    <h1 className="font-bond text-sm md:text-[15px]">
                      {formData.projectName &&
                        `Project:      ${formData.projectName}`}
                    </h1>
                    <div className="border-b border-[#e6e6e6] mt-[10px] w-[300px]"></div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <h1 className="font-bond text-sm md:text-[15px]">
                      {formData.client && `Client:       ${formData.client}`}
                    </h1>
                    <div className="border-b border-[#e6e6e6] mt-2 md:mt-[10px] w-[300px]"></div>
                  </div>
                </div>
                <h2 className="text-white text-2xl md:text-6xl font-bold tracking-wide">
                  Business Model Canvas
                </h2>

                <p className="text-white text-[15px] md:text-[20px] font-medium">
                  {" "}
                  It is a visual artifact with elements describing a service’s
                  or product's <br />
                  value proposition, infrastructure, customers, and finances
                </p>
              </div>
            </div> */
}

{
  /* Canvas Grid */
}
{
  /* <div className="flex-grow overflow-x-auto">
              <div className="min-w-[900px] grid grid-cols-5 grid-rows-3 gap-3 bg-[#F3ECEB] p-4">
                
                <div className="bg-white p-6 min-h-60">
                  <h3 className="font-bold text-sm mb-2">KEY PARTNERS</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The network of suppliers and partners that make the business
                    work
                  </p>
                  <div className="space-y-2">
                    {formData.keyPartners.map(
                      (partner: string, index: number) => (
                        <div key={index} className="p-2 rounded text-sm">
                          {partner}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60 col-span-1">
                  <h3 className="font-bold text-sm mb-2">KEY ACTIVITIES</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The most important activities your company needs to make its
                    business work
                  </p>
                  <div className="space-y-2">
                    {formData.keyActivities.map(
                      (activity: string, index: number) => (
                        <div key={index} className="p-2 rounded text-sm">
                          {activity}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60 row-span-2">
                  <h3 className="font-bold text-sm mb-2">VALUE PROPOSITION</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The products and services that create value for a specific
                    customer segment
                  </p>
                  <div className="p-2 rounded h-full overflow-y-auto">
                    {formData.valueProposition}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60">
                  <h3 className="font-bold text-sm mb-2">
                    CUSTOMER RELATIONSHIPS
                  </h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The type of relationship your company establishes with
                    specific segments
                  </p>
                  <div className="p-2 rounded h-full overflow-y-auto">
                    {formData.customerRelationships}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60">
                  <h3 className="font-bold text-sm mb-2">CUSTOMER SEGMENTS</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The different groups of people or organizations you aim to
                    reach and serve
                  </p>
                  <div className="space-y-2">
                    {formData.customerSegments.map(
                      (segment: string, index: number) => (
                        <div key={index} className="p-2 rounded text-sm">
                          {segment}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60 col-span-1">
                  <h3 className="font-bold text-sm mb-2">KEY RESOURCES</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The most important assets required to make the business work
                  </p>
                  <div className="space-y-2">
                    {formData.keyResources.map(
                      (resource: string, index: number) => (
                        <div key={index} className="p-2 rounded text-sm">
                          {resource}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60">
                  <h3 className="font-bold text-sm mb-2">CHANNELS</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    How you communicate with and deliver value to your target
                    customers
                  </p>
                  <div className="space-y-2">
                    {formData.channels.map((channel: string, index: number) => (
                      <div key={index} className="p-2 rounded text-sm">
                        {channel}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60 col-span-2">
                  <h3 className="font-bold text-sm mb-2">COST STRUCTURE</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The costs incurred to operate a business model
                  </p>
                  <div className="space-y-2">
                    {formData.costStructure.map(
                      (cost: string, index: number) => (
                        <div key={index} className="p-2 rounded text-sm">
                          {cost}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-6 min-h-60 col-span-5">
                  <h3 className="font-bold text-sm mb-2">REVENUE STREAMS</h3>
                  <p className="text-xs text-[#818285] mb-6">
                    The revenue you generate from each customer segment
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {formData.revenueStreams.map(
                      (revenue: string, index: number) => (
                        <div key={index} className="p-2 rounded text-sm">
                          {revenue}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div> */
}

// import {
//   PDFDownloadLink,
//   Document,
//   Page,
//   View,
//   Text,
//   StyleSheet,
// } from "@react-pdf/renderer";

// Create styles for PDF
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#F3ECEB',
//     padding: 20
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//     backgroundColor: '#ffffff',
//     border: '1px solid #e6e6e6' mt-[30px],
//     borderRadius: 5
//   },
//   title: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginBottom: 5
//   },
//   description: {
//     fontSize: 8,
//     color: '#818285',
//     marginBottom: 10
//   },
//   item: {
//     fontSize: 10,
//     marginBottom: 5
//   },
//   sidebar: {
//     width: 135,
//     backgroundColor: '#f12c16',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10
//   },
//   sidebarText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     transform: 'rotate(-90deg)',
//     whiteSpace: 'nowrap'
//   }
// });

// // PDF Document Component
// const MyDocument = ({ formData }) => (
//   <Document>
//     <Page size="A4" style={styles.page} orientation="landscape">
//       {/* Left Sidebar */}
//       <View style={styles.sidebar}>
//         <Text style={styles.sidebarText}>Business Model Canvas</Text>
//       </View>

//       {/* Main Content Grid */}
//       <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', height: '100%' }}>
//         {/* Row 1 */}
//         <View style={{ flexDirection: 'row', marginBottom: 14 }}>
//           {/* Key Partners */}
//           <View style={[styles.section, { flex: 1 }]}>
//             <Text style={styles.title}>KEY PARTNERS</Text>
//             <Text style={styles.description}>The network of suppliers and partners that make the business work</Text>
//             {formData.keyPartners.map((partner, index) => (
//               <Text key={index} style={styles.item}>• {partner}</Text>
//             ))}
//           </View>

//           {/* Key Activities */}
//           <View style={[styles.section, { flex: 1 }]}>
//             <Text style={styles.title}>KEY ACTIVITIES</Text>
//             <Text style={styles.description}>The most important activities your company needs to make its business work</Text>
//             {formData.keyActivities.map((activity, index) => (
//               <Text key={index} style={styles.item}>• {activity}</Text>
//             ))}
//           </View>

//           {/* Value Proposition (spanning 2 rows) */}
//           <View style={[styles.section, { flex: 1, height: '200%' }]}>
//             <Text style={styles.title}>VALUE PROPOSITION</Text>
//             <Text style={styles.description}>The products and services that create value for a specific customer segment</Text>
//             <Text style={styles.item}>{formData.valueProposition}</Text>
//           </View>

//           {/* Customer Relationships */}
//           <View style={[styles.section, { flex: 1 }]}>
//             <Text style={styles.title}>CUSTOMER RELATIONSHIPS</Text>
//             <Text style={styles.description}>The type of relationship your company establishes with specific segments</Text>
//             <Text style={styles.item}>{formData.customerRelationships}</Text>
//           </View>

//           {/* Customer Segments */}
//           <View style={[styles.section, { flex: 1 }]}>
//             <Text style={styles.title}>CUSTOMER SEGMENTS</Text>
//             <Text style={styles.description}>The different groups of people or organizations you aim to reach and serve</Text>
//             {formData.customerSegments.map((segment, index) => (
//               <Text key={index} style={styles.item}>• {segment}</Text>
//             ))}
//           </View>
//         </View>

//         {/* Row 2 */}
//         <View style={{ flexDirection: 'row', marginBottom: 14 }}>
//           {/* Key Resources */}
//           <View style={[styles.section, { flex: 1 }]}>
//             <Text style={styles.title}>KEY RESOURCES</Text>
//             <Text style={styles.description}>The most important assets required to make the business work</Text>
//             {formData.keyResources.map((resource, index) => (
//               <Text key={index} style={styles.item}>• {resource}</Text>
//             ))}
//           </View>

//           {/* Channels */}
//           <View style={[styles.section, { flex: 1 }]}>
//             <Text style={styles.title}>CHANNELS</Text>
//             <Text style={styles.description}>How you communicate with and deliver value to your target customers</Text>
//             {formData.channels.map((channel, index) => (
//               <Text key={index} style={styles.item}>• {channel}</Text>
//             ))}
//           </View>
//         </View>

//         {/* Row 3 */}
//         <View style={{ flexDirection: 'row' }}>
//           {/* Cost Structure */}
//           <View style={[styles.section, { flex: 2 }]}>
//             <Text style={styles.title}>COST STRUCTURE</Text>
//             <Text style={styles.description}>The costs incurred to operate a business model</Text>
//             {formData.costStructure.map((cost, index) => (
//               <Text key={index} style={styles.item}>• {cost}</Text>
//             ))}
//           </View>

//           {/* Revenue Streams */}
//           <View style={[styles.section, { flex: 3 }]}>
//             <Text style={styles.title}>REVENUE STREAMS</Text>
//             <Text style={styles.description}>The revenue you generate from each customer segment</Text>
//             <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//               {formData.revenueStreams.map((revenue, index) => (
//                 <View key={index} style={{ width: '33%', marginBottom: 5 }}>
//                   <Text style={styles.item}>• {revenue}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         </View>
//       </View>
//     </Page>
//   </Document>
// );

// const Canvas = ({ setIsOpen, isOpen, formData }) => {
//   return (
//     <div className="flex flex-col bg-[#ffffff]">
//       <main className="flex-grow py-12 px-6">
//         <div className="mx-auto">
//           <div className="text-center mb-10">
//             <h1 className="text-4xl font-bold text-[#0f0f0f]">
//               Take a final look at your{" "}
//               <span className="italic">Business Model Canvas</span>
//             </h1>
//             <p className="text-xl mt-4">
//               {formData.projectName && `Project: ${formData.projectName}`}
//               {formData.client && ` | Client: ${formData.client}`}
//             </p>
//           </div>

//           <div className="flex justify-center gap-4 mb-10">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="cursor-pointer flex items-center gap-2 border border-[#0f0f0f] rounded-full px-6 py-2"
//             >
//               <Edit className="h-5 w-5" />
//               Edit canvas
//             </button>

//             {/* PDF Download Button */}
//             <PDFDownloadLink
//               document={<MyDocument formData={formData} />}
//               fileName={`${formData.projectName || 'Business_Model_Canvas'}.pdf`}
//             >
//               {({ loading }) => (
//                 <button className="cursor-pointer flex items-center gap-2 bg-[#0f0f0f] text-white rounded-full px-6 py-2">
//                   <Download className="h-5 w-5" />
//                   {loading ? 'Preparing PDF...' : 'Download'}
//                 </button>
//               )}
//             </PDFDownloadLink>
//           </div>

//           {/* Your existing canvas display */}
//           <div className="flex border border-[#e6e6e6] rounded-lg overflow-hidden">
//             {/* Left Sidebar */}
//             <div className="bg-[#f12c16] w-[135px] flex-shrink-0 relative">
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
//                 <h2 className="text-white text-4xl font-bold tracking-wide">
//                   Business Model Canvas
//                 </h2>
//               </div>
//             </div>

//             {/* Canvas Grid */}
//             <div className="flex-grow grid grid-cols-5 grid-rows-3 gap-[14px] bg-[#F3ECEB] p-[20px]">
//               {/* Your existing canvas content */}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// Print-based PDF download that doesn't use hooks
// const handleDownloadPDF = () => {
//   if (!canvasRef.current) return;

//   try {
//     // Create a title for the print
//     const title = formData.projectName
//       ? `Business Model Canvas: ${formData.projectName}`
//       : 'Business Model Canvas';

//     // Create a styled version of our content for printing
//     const printContent = `
//       <html>
//         <head>
//           <title>${title}</title>
//           <style>
//             @page {
//               size: A4 landscape;
//               margin: 0;
//             }
//             @media print {
//               body {
//                 margin: 0;
//                 padding: 0;
//                 font-family: 'Raleway', Arial, sans-serif;
//                 background-color: #ffffff;
//               }
//               .print-container {
//                 width: 100%;
//                 height: 100%;
//                 display: flex;
//                 flex-direction: column;
//               }
//               .header {
//                 text-align: center;
//                 margin-bottom: 20px;
//                 padding: 20px 0;
//               }
//               .header h1 {
//                 font-size: 24px;
//                 font-weight: bold;
//                 margin: 0 0 8px 0;
//                 color: #0f0f0f;
//               }
//               .header p {
//                 font-size: 16px;
//                 margin: 0;
//                 color: #0f0f0f;
//               }
//               .canvas-container {
//                 display: flex;
//                 width: 100%;
//                 min-height: 80vh;
//                 border: 1px solid #e6e6e6;
//                 border-radius: 8px;
//                 overflow: hidden;
//                 page-break-inside: avoid;
//               }
//               .sidebar {
//                 background-color: #f12c16;
//                 width: 135px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 position: relative;
//               }
//               .sidebar-text {
//                 transform: rotate(-90deg);
//                 white-space: nowrap;
//                 color: white;
//                 font-size: 24px;
//                 font-weight: bold;
//                 letter-spacing: 1px;
//                 font-family: 'Raleway', Arial, sans-serif;
//               }
//               .grid-container {
//                 flex: 1;
//                 display: grid;
//                 grid-template-columns: repeat(5, 1fr);
//                 grid-template-rows: repeat(3, minmax(150px, 1fr));
//                 gap: 14px;
//                 padding: 20px;
//                 background-color: #F3ECEB;
//               }
//               .grid-item {
//                 background-color: white;
//                 padding: 15px;
//                 border-radius: 4px;
//                 display: flex;
//                 flex-direction: column;
//               }
//               .grid-item h3 {
//                 font-size: 12px;
//                 font-weight: bold;
//                 margin: 0 0 8px 0;
//                 color: #232326;
//                 font-family: 'Raleway', Arial, sans-serif;
//               }
//               .grid-item p {
//                 font-size: 10px;
//                 color: #818285;
//                 margin: 0 0 12px 0;
//                 font-family: 'Raleway', Arial, sans-serif;
//               }
//               .value-prop {
//                 grid-row: span 2;
//               }
//               .cost-structure {
//                 grid-column: span 2;
//               }
//               .revenue-streams {
//                 grid-column: span 5;
//               }
//               .item-list {
//                 flex: 1;
//                 display: flex;
//                 flex-direction: column;
//                 gap: 6px;
//               }
//               .item {
//                 font-size: 11px;
//                 padding: 6px 8px;
//                 background-color: #f5f5f5;
//                 border-radius: 12px;
//                 color: #0f0f0f;
//               }
//               .revenue-items {
//                 display: grid;
//                 grid-template-columns: repeat(3, 1fr);
//                 gap: 10px;
//               }
//           </style>
//         </head>
//         <body>
//           <div class="print-container">
//             <div class="header">
//               <h1>${title}</h1>
//               ${formData.client ? `<p>Client: ${formData.client}</p>` : ''}
//             </div>
//             <div class="canvas-container">
//               <div class="sidebar">
//                 <div class="sidebar-text">Business Model Canvas</div>
//               </div>
//               <div class="grid-container">
//                 <!-- Key Partners -->
//                 <div class="grid-item">
//                   <h3>KEY PARTNERS</h3>
//                   <p>The network of suppliers and partners that make the business work</p>
//                   <div class="item-list">
//                     ${formData.keyPartners.map((partner: string) =>
//                       `<div class="item">${partner}</div>`).join('')}
//                   </div>
//                 </div>

//                 <!-- Key Activities -->
//                 <div class="grid-item">
//                   <h3>KEY ACTIVITIES</h3>
//                   <p>The most important activities your company needs to make its business work</p>
//                   <div class="item-list">
//                     ${formData.keyActivities.map((activity: string) =>
//                       `<div class="item">${activity}</div>`).join('')}
//                   </div>
//                 </div>

//                 <!-- Value Proposition -->
//                 <div class="grid-item value-prop">
//                   <h3>VALUE PROPOSITION</h3>
//                   <p>The products and services that create value for a specific customer segment</p>
//                   <div class="item">${formData.valueProposition}</div>
//                 </div>

//                 <!-- Customer Relationships -->
//                 <div class="grid-item">
//                   <h3>CUSTOMER RELATIONSHIPS</h3>
//                   <p>The type of relationship your company establishes with specific segments</p>
//                   <div class="item">${formData.customerRelationships}</div>
//                 </div>

//                 <!-- Customer Segments -->
//                 <div class="grid-item">
//                   <h3>CUSTOMER SEGMENTS</h3>
//                   <p>The different groups of people or organizations you aim to reach and serve</p>
//                   <div class="item-list">
//                     ${formData.customerSegments.map((segment: string) =>
//                       `<div class="item">${segment}</div>`).join('')}
//                   </div>
//                 </div>

//                 <!-- Key Resources -->
//                 <div class="grid-item">
//                   <h3>KEY RESOURCES</h3>
//                   <p>The most important assets required to make the business work</p>
//                   <div class="item-list">
//                     ${formData.keyResources.map((resource: string) =>
//                       `<div class="item">${resource}</div>`).join('')}
//                   </div>
//                 </div>

//                 <!-- Channels -->
//                 <div class="grid-item">
//                   <h3>CHANNELS</h3>
//                   <p>How you communicate with and deliver value to your target customers</p>
//                   <div class="item-list">
//                     ${formData.channels.map((channel: string) =>
//                       `<div class="item">${channel}</div>`).join('')}
//                   </div>
//                 </div>

//                 <!-- Cost Structure -->
//                 <div class="grid-item cost-structure">
//                   <h3>COST STRUCTURE</h3>
//                   <p>The costs incurred to operate a business model</p>
//                   <div class="item-list">
//                     ${formData.costStructure.map((cost: string) =>
//                       `<div class="item">${cost}</div>`).join('')}
//                   </div>
//                 </div>

//                 <!-- Revenue Streams -->
//                 <div class="grid-item revenue-streams">
//                   <h3>REVENUE STREAMS</h3>
//                   <p>The revenue you generate from each customer segment</p>
//                   <div class="revenue-items">
//                     ${formData.revenueStreams.map((revenue: string) =>
//                       `<div class="item">${revenue}</div>`).join('')}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <script>
//             // Print automatically when loaded
//             window.onload = function() {
//               setTimeout(function() {
//                 window.print();
//                 setTimeout(function() {
//                   window.close();
//                 }, 1000);
//               }, 500);
//             };
//           </script>
//         </body>
//       </html>
//     `;

//     // Open a new window for printing
//     const printWindow = window.open('', '_blank');
//     if (!printWindow) {
//       alert('Please allow pop-ups for this website to download the PDF');
//       return;
//     }

//     // Write our custom HTML to the new window
//     printWindow.document.write(printContent);
//     printWindow.document.close();
//   } catch (error) {
//     console.error('Failed to prepare PDF', error);
//     alert('Failed to prepare PDF. Please try again or use the browser print function (Ctrl+P).');
//   }
// };

// const handleDownloadPDF = async () => {
//   if (!canvasRef.current) return;

//   try {
//     // 1. Create a temporary container with simplified styling
//     const tempContainer = document.createElement('div');
//     tempContainer.style.position = 'fixed';
//     tempContainer.style.left = '-9999px';
//     tempContainer.style.top = '0';
//     tempContainer.style.width = '100%';
//     tempContainer.style.backgroundColor = '#ffffff';

//     // 2. Clone the canvas content
//     const clone = canvasRef.current.cloneNode(true) as HTMLElement;

//     // 3. Remove all classes to avoid CSS parsing issues
//     clone.querySelectorAll('*').forEach(el => {
//       el.removeAttribute('class');
//     });

//     // 4. Apply minimal necessary styling
//     clone.style.width = '100%';
//     clone.style.backgroundColor = '#ffffff';

//     tempContainer.appendChild(clone);
//     document.body.appendChild(tempContainer);

//     // 5. Capture as image (bypassing CSS parsing)
//     const canvas = await html2canvas(clone, {
//       scale: 2,
//       logging: false,
//       useCORS: true,
//       backgroundColor: '#ffffff',
//       allowTaint: true,
//       ignoreElements: (el) => false
//     });

//     // 6. Clean up
//     document.body.removeChild(tempContainer);

//     // 7. Convert to PDF
//     const imgData = canvas.toDataURL('image/png', 1.0);
//     const pdf = new jsPDF('landscape');
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save(`${formData.projectName || 'Business_Model_Canvas'}.pdf`);

//   } catch (error) {
//     console.error('PDF Generation Error:', error);
//     alert('Could not generate PDF. Please try taking a screenshot manually.');
//   }
// };

// const handleDownloadPDF = async () => {
//   if (!canvasRef.current) return;

//   try {
//     const canvas = await html2canvas(canvasRef.current, {
//       scale: 2,
//       backgroundColor: null, // Transparent background
//       logging: false,
//       useCORS: true,
//       allowTaint: true
//     });

//     const pdf = new jsPDF('landscape');
//     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0,
//       pdf.internal.pageSize.getWidth(),
//       pdf.internal.pageSize.getHeight()
//     );
//     pdf.save('canvas.pdf');
//   } catch (error) {
//     console.error(error);
//     alert('PDF failed. Try screenshot (Ctrl+P → Save as PDF)');
//   }
// };

// const handleDownloadPDF = async () => {
//   if (!canvasRef.current) return;

//   try {
//     // Create a temporary container to preserve original styling
//     const tempDiv = document.createElement('div');
//     tempDiv.style.position = 'fixed';
//     tempDiv.style.left = '-9999px';
//     tempDiv.style.top = '0';
//     tempDiv.style.width = canvasRef.current.offsetWidth + 'px';
//     tempDiv.style.backgroundColor = '#F3ECEB';
//     tempDiv.style.padding = '20px';

//     // Clone the canvas with all original classes and styles
//     const clone = canvasRef.current.cloneNode(true) as HTMLElement;
//     tempDiv.appendChild(clone);
//     document.body.appendChild(tempDiv);

//     // Use html2canvas with specific options
//     const canvas = await html2canvas(clone, {
//       scale: 2,
//       logging: false,
//       useCORS: true,
//       backgroundColor: '#F3ECEB',
//       allowTaint: true,
//       ignoreElements: (el) => false
//     });

//     // Clean up
//     document.body.removeChild(tempDiv);

//     // Generate PDF
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('landscape');
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save(`${formData.projectName || 'Business_Model_Canvas'}.pdf`);
//   } catch (error) {
//     console.error('PDF Generation Error:', error);
//     alert('Could not generate PDF. Please try taking a screenshot manually (Ctrl+Shift+P → Save as PDF).');
//   }
// };

// ***********************************************************

// const handleDownloadPDF = async () => {
//   if (!canvasRef.current) return;

//   try {
//     const dataUrl = await domtoimage.toPng(canvasRef.current);
//     const pdf = new jsPDF("landscape");
//     pdf.addImage(dataUrl, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), 0);
//     pdf.save("canvas.pdf");
//   } catch (error) {
//     console.error(error);
//     alert("PDF failed. Try screenshot (Ctrl+P → Save as PDF)");
//   }
// };

// const handleDownloadPDF = async () => {
//   if (!canvasRef.current) return;

//   try {
//     // Wait for images to load
//     const images = canvasRef.current.getElementsByTagName('img');
//     const imageLoadPromises = Array.from(images).map(img => {
//       if (img.complete) return Promise.resolve();
//       return new Promise<void>((resolve) => {
//         img.onload = () => resolve();
//         img.onerror = () => resolve(); // Continue even if some images fail
//       });
//     });

//     await Promise.all(imageLoadPromises);

//     const dataUrl = await domtoimage.toPng(canvasRef.current, {
//       quality: 1,
//       bgcolor: '#ffffff',
//     });

//     const pdf = new jsPDF("landscape");
//     const imgWidth = pdf.internal.pageSize.getWidth();
//     const imgHeight = (canvasRef.current.offsetHeight / canvasRef.current.offsetWidth) * imgWidth;
//     pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
//     pdf.save("canvas.pdf");
//   } catch (error) {
//     console.error(error);
//     alert("PDF failed. Try screenshot (Ctrl+P → Save as PDF)");
//   }
// };
