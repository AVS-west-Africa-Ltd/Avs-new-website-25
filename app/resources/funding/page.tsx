"use client";

import {
  ArrowRightIcon,
  CloudDownloadIcon,
  EyeIcon,
  Handshake,
  MapPinIcon,
  PencilIcon,
  PhoneIcon,
  ScanSearchIcon,
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
const HowItWorksSection = () => {
  const steps = [
    {
      icon: <PencilIcon className="w-[29px] h-[29px] text-white" />,
      description:
        "Fill out the form and share your startup concept.",
    },
    {
      icon: <ScanSearchIcon className="w-[27px] h-[27px] text-white" />,
      description: "Our team reviews your idea and connects for next steps.",
    },
    {
      icon: <Handshake className="w-[27px] h-[27px] text-white" />,
      description: "Partner with us to build and fund your startup together.",
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
                <div className="md:hidden w-[11px] h-[11px] bg-[#205352] rounded-[5.5px]"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const FormSection = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center gap-[72px] w-full py-10">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[56px] text-center text-[#0F0F0F] font-normal font-['Raleway',Helvetica] leading-normal max-w-[804px]">
          <span className="font-bold">We invest in </span> <span className="font-medium italic">founders </span> <br />
          <span className="font-bold"> with</span>  <span className="font-medium italic ">bold ideas.</span>
        </h1>
        <p className="max-w-[624px] text-base text-center text-[#0f0f0fa6] font-['Raleway',Helvetica] tracking-[-0.30px] leading-[19.5px]">
        Through our blended support model—a mix of equity and cash—we help build, launch, and scale startups from the ground up. You bring the vision. We bring the capital, product team, and execution expertise.
        </p>
        <button
          onClick={() => router.push("/contact-us")}
          className="flex items-center px-6 py-3 cursor-pointer gap-2.5 text-white bg-[#0F0F0F] rounded-[100px] text-[15px] font-['Raleway',Helvetica] font-normal tracking-[-0.30px]"
        >
          <span>Apply</span>
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
