"use client";

import {
  ArrowRightIcon,
  CloudDownloadIcon,
  EyeIcon,
  Handshake,
  MapPinIcon,
  PencilIcon,
  PhoneIcon,
  ScanSearchIcon,Upload, 
  X
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
import { useState , DragEvent } from "react";
import toast from "react-hot-toast";
import ToastNotification from "../../../components/ToastNotification";
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
             Your Journey starts here
              </h2>
              <CardContent className="py-10">
               <StartupForm/>
              </CardContent>
            </Card>
            
          </div>
        </div>
     
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


const StartupForm = () => {
    const [funding, setFunding] = useState('');
    const [support, setSupport] = useState<string[]>([]);
    const [formData, setFormData] = useState<{ file: File | null }>({ file: null });
    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
  
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0])
      }
    }
  
    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true)
      } else if (e.type === 'dragleave') {
        setDragActive(false)
      }
    }
  
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setFile(e.dataTransfer.files[0])
      }
    }
  
    const removeFile = () => {
      setFile(null)
    }


  
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        const founderName = (document.getElementById('founderName') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const startupName = (document.getElementById('startupName') as HTMLInputElement).value;
        const website = (document.getElementById('website') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLTextAreaElement).value;
        const problem = (document.getElementById('problem') as HTMLTextAreaElement).value;
        const customers = (document.getElementById('customers') as HTMLTextAreaElement).value;
        const revenue = (document.getElementById('revenue') as HTMLTextAreaElement).value;
        const notes = (document.getElementById('notes') as HTMLTextAreaElement).value;
      
        const stageRadios = document.getElementsByName('startupStage') as NodeListOf<HTMLInputElement>;
        const startupStage = Array.from(stageRadios).find(radio => radio.checked)?.id || '';
      
        const fundingRadios = document.getElementsByName('existingFunding') as NodeListOf<HTMLInputElement>;
        const existingFunding = Array.from(fundingRadios).find(radio => radio.checked)?.id || '';
      
        console.log('ok')
        console.log(founderName, email, notes, revenue ,startupStage , existingFunding)
        if (!file) {
          alert('Please upload your pitch deck.');
          return;
        }
        if (!founderName || !email || !startupName || !description || !problem || !customers || !revenue) {
          alert('Please fill in all required fields.');
          return;
        }
      
        const formData = new FormData();
        formData.append('file', file);
        formData.append('founderName', founderName);
        formData.append('email', email);
        formData.append('startupName', startupName);
        formData.append('website', website);
        formData.append('description', description);
        formData.append('problem', problem);
        formData.append('customers', customers);
        formData.append('revenue', revenue);
        formData.append('notes', notes);
        formData.append('startupStage', startupStage);
        formData.append('existingFunding', existingFunding);
        formData.append('support', JSON.stringify(support));
      

        
        return
        try {
          const res = await fetch('/api/send-startup-form', {
            method: 'POST',
            body: formData
          });
      
          const result = await res.json();
          if (res.ok) {
            alert('Form submitted successfully!');
          } else {
            alert(`Failed to submit: ${result.message}`);
          }
        } catch (error) {
          alert('Something went wrong submitting the form.');
          console.error(error);
        }
      };
      






    return (
        <div className="flex justify-center items-center min-h-screen  p-4">
          <form className="w-full max-w-4xl  p-8 rounded-lg"  onSubmit={handleSubmit}>
            <div className="space-y-6">

             
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {/* <label htmlFor="founderName" className="block text-sm font-medium"> */}
                      <Label className="font-semibold text-[#232326] text-base">

                        Founder Name
                      {/* </label> */}
          </Label>

                       <Input
            name="projectName"
        
            className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
            id="founderName"
            type="text"
            placeholder="E.g John Doe"          />
                    </div>
        
                    <div className="space-y-4">
                    
          <Label className="font-semibold text-[#232326] text-base">

                        Email Address
                     
          </Label>

                      <Input
                        id="email"
                        type="email"
                        placeholder="E.g johndoe@mail.com"
                        className="w-full px-3 py-4 border border-gray-300 rounded-md"
                        // className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"

                      />
                    </div>
        
                    <div className="space-y-4 mt-4">
                      <label htmlFor="startupName" className="block font-semibold text-[#232326] text-base">
                        Startup Name
                      </label>
                      <input
                        id="startupName"
                        type="text"
                        placeholder="E.g mango tech"
                        className="w-full bg-white px-3 py-4 border border-gray-300 rounded-md"
                      />
                    </div>
        
                    <div className="space-y-4 mt-4">
                      <label htmlFor="website" className="block font-semibold text-[#232326] text-base">
                        Website (if available)
                      </label>
                      <input
                        id="website"
                        type="text"
                        placeholder="E.g mangotech.com"
                        className="w-full  bg-white px-3 py-4 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
        
                  <div className="space-y-4 mt-10">
                    <label className="block  font-semibold text-[#232326] text-base">What stage is your startup in?</label>
                    <div className="grid bg-white grid-cols-2 md:grid-cols-3 gap-2 px-3 py-4 rounded-md">
                      <div className="flex items-center">
                        <input id="ideaStage" name="startupStage" type="radio" className="h-4 w-4 text-black border-gray-300" />
                        <label htmlFor="ideaStage" className="ml-2 font-semibold text-[#232326] text-base">
                          Idea Stage
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="validating"
                          name="startupStage"
                          type="radio"
                          className="h-4 w-4 text-black border-gray-300"
                        />
                        <label htmlFor="validating" className="ml-2 font-semibold text-[#232326] text-base">
                          Validating
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="buildingMVP"
                          name="startupStage"
                          type="radio"
                          className="h-4 w-4 text-black border-gray-300"
                        />
                        <label htmlFor="buildingMVP" className="ml-2 font-semibold text-[#232326] text-base">
                          Building MVP
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="launched" name="startupStage" type="radio" className="h-4 w-4 text-black border-gray-300" />
                        <label htmlFor="launched" className="ml-2 font-semibold text-[#232326] text-base">
                          Launched
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="gainingTraction"
                          name="startupStage"
                          type="radio"
                          className="h-4 w-4 text-black border-gray-300"
                        />
                        <label htmlFor="gainingTraction" className="ml-2 font-semibold text-[#232326] text-base">
                          Gaining Traction
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="scaling" name="startupStage" type="radio" className="h-4 w-4 text-black border-gray-300" />
                        <label htmlFor="scaling" className="ml-2 font-semibold text-[#232326] text-base">
                          Scaling
                        </label>
                      </div>
                    </div>
                  </div>
        
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="space-y-4">
                      <label htmlFor="description" className="block font-semibold text-[#232326] text-base">
                        Describe your startup in one sentence
                      </label>
                      <textarea
                        id="description"
                        placeholder="Description"
                        rows={4}
                        className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
        
                    <div className="space-y-4">
                      <label htmlFor="problem" className="block font-semibold text-[#232326] text-base">
                        What problem are you solving?
                      </label>
                      <textarea
                        id="problem"
                        placeholder="Description"
                        rows={4}
                        className="w-full  bg-white px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
        
                    <div className="space-y-4">
                      <label htmlFor="customers" className="block font-semibold text-[#232326] text-base">
                        Who are your target customers?
                      </label>
                      <textarea
                        id="customers"
                        placeholder="Description"
                        rows={4}
                        className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
        
                    <div className="space-y-4">
                      <label htmlFor="revenue" className="block  font-semibold text-[#232326] text-base">
                        Revenue model (if known)
                      </label>
                      <textarea
                        id="revenue"
                        placeholder="Description"
                        rows={4}
                        className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
        
                  <div className="space-y-4">
                    <label className="block  font-semibold text-[#232326] text-base">Any existing funding?</label>
                    <div className="flex space-x-6">
                      <div className="flex items-center">
                        <input
                          id="fundingYes"
                          name="existingFunding"
                          type="radio"
                          className="h-4 w-4 text-black border-gray-300"
                        />
                        <label htmlFor="fundingYes" className="ml-2 font-semibold text-[#232326] text-base">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="fundingNo"
                          name="existingFunding"
                          type="radio"
                          className="h-4 w-4 text-black border-gray-300"
                        />
                        <label htmlFor="fundingNo" className="ml-2 font-semibold text-[#232326] text-base">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
        
                  <div className="space-y-2">
                
                      
                    <textarea id="notes" rows={3} placeholder="Make a note (optional)" className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
        
                  <div className="space-y-4">
                    <label className="block font-semibold text-[#232326] text-base">What support are you seeking from the studio?</label>
                    <div className="grid grid-cols-4 gap-2   bg-white py-8 rounded-md">
                      <div className="flex items-center">
                        <input
                          id="partnership"
                          name="supportType"
                          type="radio"
                          className="h-4 w-4 text-black border-gray-300 ml-2"
                        />
                        <label htmlFor="partnership" className="ml-2 font-semibold text-[#232326] text-sm">
                          Partnership
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="funding" name="supportType" type="radio" className="h-4 w-4 text-black border-gray-300" />
                        <label htmlFor="funding" className="ml-2 font-semibold text-[#232326] text-sm">
                          Funding
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="productDevelopment"
                          name="supportType"
                          type="radio"
                          className="h-4 w-4 text-black border-gray-300"
                        />
                        <label htmlFor="productDevelopment" className="ml-2 font-semibold text-[#232326] text-sm">
                          Product Development
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input id="operations" name="supportType" type="radio" className="h-4 w-4 text-black border-gray-300" />
                        <label htmlFor="operations" className="ml-2 font-semibold text-[#232326] text-sm mr-1">
                          Operations&Infrastructure
                        </label>
                      </div>
                    </div>
                  </div>
        


<div className="space-y-4 mt-10">
      <label className="block font-semibold text-[#232326] text-base">
        Upload your pitch deck (PDF)
      </label>

      {!file ? (
        <div
          className={`border bg-white border-solid rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-150 ${
            dragActive ? 'border-blue-500' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="application/pdf"
            id="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="file" className="flex flex-col items-center cursor-pointer">
            <Upload className="h-6 w-6 text-gray-500 mb-2" />
            <p className="font-semibold text-[#232326] text-base text-center">
              Click to upload or drag and drop
            </p>
            <span className="text-xs text-gray-500">in PDF format, Max 5MB</span>
          </label>
        </div>
      ) : (
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 p-2 bg-gray-100 rounded-md">
                <Upload className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
    
                  <div className="flex justify-center pt-4 mt-16">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )
  };
  
//   export default StartupForm;
  
// const BusinessDetailsSection = ({
//   formData,
//   setFormData,
// }: {
//   formData: any;
//   setFormData: React.Dispatch<React.SetStateAction<any>>;
// }) => {
//   const [partnerInput, setPartnerInput] = useState("");
//   const [activityInput, setActivityInput] = useState("");
//   const [resourceInput, setResourceInput] = useState("");
//   const [segmentInput, setSegmentInput] = useState("");
//   const [channelInput, setChannelInput] = useState("");
//   const [costInput, setCostInput] = useState("");
//   const [revenueInput, setRevenueInput] = useState("");

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev: any) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleAddItem = (
//     field: keyof typeof formData,
//     value: string,
//     setInput: React.Dispatch<React.SetStateAction<string>>
//   ) => {
//     if (value.trim() && Array.isArray(formData[field])) {
//       setFormData((prev: any) => ({
//         ...prev,
//         [field]: [...(prev[field] as string[]), value.trim()],
//       }));
//       setInput("");
//     }
//   };

//   const handleRemoveItem = (field: keyof typeof formData, index: number) => {
//     setFormData((prev: any) => ({
//       ...prev,
//       [field]: (prev[field] as string[]).filter(
//         (_: any, i: number) => i !== index
//       ),
//     }));
//   };

//   const handleKeyPress = (
//     e: React.KeyboardEvent<HTMLInputElement>,
//     field: keyof typeof formData,
//     value: string,
//     setInput: React.Dispatch<React.SetStateAction<string>>
//   ) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleAddItem(field, value, setInput);
//     }
//   };

//   return (
//     <section className="flex flex-col w-full max-w-[860px] mx-auto items-start gap-10">
//       {/* Project and Client Row */}
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
//         <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
//           <Label className="font-semibold text-[#232326] text-base">
//             Project name
//           </Label>
//           <Input
//             name="projectName"
//             value={formData.projectName}
//             onChange={handleInputChange}
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="E.g mango tech"
//           />
//         </div>
//         <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
//           <Label className="font-semibold text-[#232326] text-base">
//             Client
//           </Label>
//           <Input
//             name="client"
//             value={formData.client}
//             onChange={handleInputChange}
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="E.g John Doe"
//           />
//         </div>
//       </div>

//       {/* Key Partners */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Key Partners
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             The network of suppliers and partners that make the business model
//             work.
//           </p>
//           <Input
//             value={partnerInput}
//             onChange={(e) => setPartnerInput(e.target.value)}
//             onKeyDown={(e) =>
//               handleKeyPress(e, "keyPartners", partnerInput, setPartnerInput)
//             }
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Add a partner"
//           />
//         </div>
//         <div className="flex flex-wrap items-center gap-3.5">
//           {formData.keyPartners.map((partner: string, index: number) => (
//             <Badge
//               key={index}
//               className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
//             >
//               <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
//                 {partner}
//               </span>
//               <XIcon
//                 className="w-3.5 h-3.5 cursor-pointer"
//                 onClick={() => handleRemoveItem("keyPartners", index)}
//               />
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {/* Key Activities */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Key Activities
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             The most important tasks your company must do to operate
//             effectively.
//           </p>
//           <Input
//             value={activityInput}
//             onChange={(e) => setActivityInput(e.target.value)}
//             onKeyDown={(e) =>
//               handleKeyPress(
//                 e,
//                 "keyActivities",
//                 activityInput,
//                 setActivityInput
//               )
//             }
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Add tasks"
//           />
//         </div>
//         <div className="flex flex-wrap items-center gap-3.5">
//           {formData.keyActivities.map((activity: string, index: number) => (
//             <Badge
//               key={index}
//               className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
//             >
//               <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
//                 {activity}
//               </span>
//               <XIcon
//                 className="w-3.5 h-3.5 cursor-pointer"
//                 onClick={() => handleRemoveItem("keyActivities", index)}
//               />
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {/* Key Resources */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Key Resources
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             The critical assets required to deliver your value proposition.
//           </p>
//           <Input
//             value={resourceInput}
//             onChange={(e) => setResourceInput(e.target.value)}
//             onKeyDown={(e) =>
//               handleKeyPress(e, "keyResources", resourceInput, setResourceInput)
//             }
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Add assets"
//           />
//         </div>
//         <div className="flex flex-wrap items-center gap-3.5">
//           {formData.keyResources.map((resource: string, index: number) => (
//             <Badge
//               key={index}
//               className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
//             >
//               <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
//                 {resource}
//               </span>
//               <XIcon
//                 className="w-3.5 h-3.5 cursor-pointer"
//                 onClick={() => handleRemoveItem("keyResources", index)}
//               />
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {/* Value Proposition */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Value Proposition
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             The product, service, or feature that solves a problem or delivers
//             specific benefits to your customers.
//           </p>
//           <Textarea
//             name="valueProposition"
//             value={formData.valueProposition}
//             onChange={handleInputChange}
//             className="h-36 w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Description"
//           />
//         </div>
//       </div>

//       {/* Customer Relationships */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Customer Relationships
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             How you acquire, retain, and grow your customer base.
//           </p>
//           <Textarea
//             name="customerRelationships"
//             value={formData.customerRelationships}
//             onChange={handleInputChange}
//             className="h-36 w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Description"
//           />
//         </div>
//       </div>

//       {/* Customer Segments */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Customer Segments
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             The groups of people or organisations you aim to serve.
//           </p>
//           <Input
//             value={segmentInput}
//             onChange={(e) => setSegmentInput(e.target.value)}
//             onKeyDown={(e) =>
//               handleKeyPress(
//                 e,
//                 "customerSegments",
//                 segmentInput,
//                 setSegmentInput
//               )
//             }
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Add customer segments"
//           />
//         </div>
//         <div className="flex flex-wrap items-center gap-3.5">
//           {formData.customerSegments.map((segment: string, index: number) => (
//             <Badge
//               key={index}
//               className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
//             >
//               <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
//                 {segment}
//               </span>
//               <XIcon
//                 className="w-3.5 h-3.5 cursor-pointer"
//                 onClick={() => handleRemoveItem("customerSegments", index)}
//               />
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {/* Channels */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Channels
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             How you communicate with and deliver your product or service to
//             customers.
//           </p>
//           <Input
//             value={channelInput}
//             onChange={(e) => setChannelInput(e.target.value)}
//             onKeyDown={(e) =>
//               handleKeyPress(e, "channels", channelInput, setChannelInput)
//             }
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Add channels"
//           />
//         </div>
//         <div className="flex flex-wrap items-center gap-3.5">
//           {formData.channels.map((channel: string, index: number) => (
//             <Badge
//               key={index}
//               className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[30px] flex items-center gap-2.5"
//             >
//               <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
//                 {channel}
//               </span>
//               <XIcon
//                 className="w-3.5 h-3.5 cursor-pointer"
//                 onClick={() => handleRemoveItem("channels", index)}
//               />
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {/* Cost Structure */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Cost Structure
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             The major costs involved in operating your business model.
//           </p>
//           <Input
//             value={costInput}
//             onChange={(e) => setCostInput(e.target.value)}
//             onKeyDown={(e) =>
//               handleKeyPress(e, "costStructure", costInput, setCostInput)
//             }
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Add major costs"
//           />
//         </div>
//         <div className="flex flex-wrap items-center gap-3.5">
//           {formData.costStructure.map((cost: string, index: number) => (
//             <Badge
//               key={index}
//               className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
//             >
//               <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
//                 {cost}
//               </span>
//               <XIcon
//                 className="w-3.5 h-3.5 cursor-pointer"
//                 onClick={() => handleRemoveItem("costStructure", index)}
//               />
//             </Badge>
//           ))}
//         </div>
//       </div>

//       {/* Revenue Streams */}
//       <div className="flex flex-col items-start gap-[15px] w-full">
//         <div className="flex flex-col items-start gap-2 w-full">
//           <Label className="font-semibold text-[#232326] text-base">
//             Revenue Streams
//           </Label>
//           <p className="font-normal text-medium text-sm">
//             The ways your business generates income from different customer
//             segments.
//           </p>
//           <Input
//             value={revenueInput}
//             onChange={(e) => setRevenueInput(e.target.value)}
//             onKeyDown={(e) =>
//               handleKeyPress(e, "revenueStreams", revenueInput, setRevenueInput)
//             }
//             className="w-full bg-white rounded-[7px] border border-solid border-[#E9E9EB]"
//             placeholder="Add revenue streams"
//           />
//         </div>
//         <div className="flex flex-wrap items-center gap-3.5">
//           {formData.revenueStreams.map((revenue: string, index: number) => (
//             <Badge
//               key={index}
//               className="bg-black text-white rounded-[100px] px-5 py-2.5 h-[26px] flex items-center gap-2.5"
//             >
//               <span className="text-[15px] tracking-[-0.30px] leading-[19.5px]">
//                 {revenue}
//               </span>
//               <XIcon
//                 className="w-3.5 h-3.5 cursor-pointer"
//                 onClick={() => handleRemoveItem("revenueStreams", index)}
//               />
//             </Badge>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


