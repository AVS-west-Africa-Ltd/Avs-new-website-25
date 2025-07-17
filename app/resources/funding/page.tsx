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
  X,

  Mail, Check,
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
import * as pdfjsLib from "pdfjs-dist";

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
    // const [funding, setFunding] = useState('');
    // const [support, setSupport] = useState<string[]>([]);
    const [formData, setFormData] = useState<{ file: File | null }>({ file: null });
    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Add this state

  const [showModal, setShowModal] = useState(false);
  const animationRef = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  
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


    const isPDFEmpty = async (file: File) => {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
        let allText = '';
    
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item: any) => item.str).join('');
          allText += pageText;
        }
    
        return allText.trim().length === 0;
      } catch (error) {
        console.error("PDF validation error:", error);
        return false; // Allow file if validation fails
      }
    };
    
  
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true); // Start loading

       
             
      
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

        const supportRadios = document.getElementsByName('supportType') as NodeListOf<HTMLInputElement>;
        const supportType = Array.from(supportRadios).find(radio => radio.checked)?.id || '';
      
        console.log('ok')
        console.log(founderName, email, description,problem,customers, notes, revenue ,startupStage ,'fff', existingFunding,supportType)
       
        if (!founderName || !email || !startupName || !description || !problem || !customers || !revenue) {
          toast.error("please fill all required fields");
          setIsSubmitting(false); // Start loading

        setShowModal(false);


          return;
        }

        // if (!file) {

        //   toast.error("Please upload your pitch deck.!");
        // setIsSubmitting(false); // Start loading
        // setShowModal(false);


        //   return;
        // }
      
        if (!file) {
          toast.error("Please upload your pitch deck.!");
          setIsSubmitting(false);
          setShowModal(false);
          return;
        }
        
        const emptyPDF = await isPDFEmpty(file);
        if (emptyPDF) {
          toast.error("The uploaded PDF is empty. Please upload a pitch deck with actual content.");
          setIsSubmitting(false);
          setShowModal(false);
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
        formData.append('supportType', supportType);
      
        try {
          const res = await fetch('/api/send-startup-form', {
            method: 'POST',
            body: formData
          });
        
          const result = await res.json();
          
          if (res.ok) {
            // 1. Set success states first
            setIsSubmitted(true);
            setShowModal(true);
            toast.success(result.message || "Form submitted successfully! Check your email for confirmation.");
            
            // 2. Reset form fields
            const inputs = document.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
              if (!(input instanceof HTMLInputElement && input.type === 'file')) {
                if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
                  input.value = '';
                }
              }
            });
            
            // 3. Reset file state
            setFile(null);
            
            // 4. Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // 5. Set auto-close and refresh timers
            const modalTimer = setTimeout(() => {
              setShowModal(false);
            }, 15000);
            
            const refreshTimer = setTimeout(() => {
              window.location.reload();
            }, 30000);
            
            // Cleanup timers if component unmounts
            return () => {
              clearTimeout(modalTimer);
              clearTimeout(refreshTimer);
            };
            
          } else {
            throw new Error(result.message || "Submission failed");
          }
        } catch (error) {
          console.error('submissionerror', error);
          toast.error(error instanceof Error ? error.message : 'Network error or something went wrong');
        } finally {
          setIsSubmitting(false);
          // Don't setShowModal(false) here - let the timer handle it
        }
      };
      



      const SubmissionModal = () => {
        return (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center z-50">
            <div 
              ref={modalRef}
              className="bg-white/90 p-8 rounded-lg max-w-md w-full mx-4 shadow-xl border border-white/20"
            >
              <div className="flex flex-col items-center space-y-6">
                {/* Success icon */}
                <div className="relative">
                  <Mail className="h-12 w-12 text-[#232326] animate-float" />
                  <Check className="absolute -bottom-1 -right-1 h-6 w-6 text-white bg-green-500 rounded-full p-1" />
                </div>
                
                {/* Success message */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-medium text-gray-800">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600/90">
                    Your application has been successfully submitted.<br />
                    A confirmation email has been sent to your mail.
                  </p>
                </div>
                
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      };


    return (
        <div className="flex justify-center items-center min-h-screen  p-">
          <form className="w-full max-w-4xl  p- rounded-lg"  onSubmit={handleSubmit}>
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
            placeholder="E.g John Doe"    required      />
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
                        className="w-full bg-white px-3 py-4 border border-gray-300 rounded-md" required 
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
                        className="w-full  bg-white px-3 py-4 border border-gray-300 rounded-md" required 
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
                        className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md" required 
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
                          className="h-4 w-4 text-black border-gray-300" required 
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
                   


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white py-8 rounded-md">
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
    <input id="funding" name="supportType" type="radio" className="h-4 w-4 text-black border-gray-300 ml-2" />
    <label htmlFor="funding" className="ml-2 font-semibold text-[#232326] text-sm">
      Funding
    </label>
  </div>
  <div className="flex items-center">
    <input
      id="productDevelopment"
      name="supportType"
      type="radio"
      className="h-4 w-4 text-black border-gray-300 ml-2"
    />
    <label htmlFor="productDevelopment" className="ml-2 font-semibold text-[#232326] text-sm">
      Product Development
    </label>
  </div>
  <div className="flex items-center">
    <input id="operations" name="supportType" type="radio" className="h-4 w-4 text-black border-gray-300 ml-2" />
    <label htmlFor="operations" className="ml-2 font-semibold text-[#232326] text-sm mr-1">
      Operations & Infrastructure
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
    <div className="flex flex-col items-center pt-4 mt-16 space-y-4">
  {/* Progress bar (only shows during submission) */}
  {isSubmitting && (
    <div className="w-full max-w-xs bg-gray-200 rounded-full h-1.5">
      <div 
        className="bg-black h-1.5 rounded-full animate-pulse" 
        style={{ width: '50%' }} // Set actual progress if available
      ></div>
    </div>
  )}

  {/* Button with loading state */}
  <button
    type="submit"
    disabled={isSubmitting}
    className={`px-6 py-2 bg-black text-white rounded-full transition-colors ${
      isSubmitting 
        ? 'hover:bg-black cursor-not-allowed opacity-90' 
        : 'hover:bg-gray-800 cursor-pointer'
    } flex items-center justify-center min-w-40`}
  >
    {isSubmitting ? (
      <>
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Submitting...
      </>
    ) : (
      'Submit Application'
    )}
  </button>
</div>
                </div>

              </form>
    {/* Success Modal - only shows after submission */}
    {isSubmitted && showModal && (
      <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center z-50">
        <div className="bg-white/90 p-8 rounded-lg max-w-md w-full mx-4 shadow-xl border border-white/20">
          <div className="flex flex-col items-center space-y-6">
            {/* Success icon */}
            <div className="relative">
              <Mail className="h-12 w-12 text-[#232326] animate-float" />
              <Check className="absolute -bottom-1 -right-1 h-6 w-6 text-white bg-green-500 rounded-full p-1" />
            </div>
            
            {/* Success message */}
            <div className="text-center space-y-2">
              <h3 className="text-xl font-medium text-gray-800">
                Application Submitted!
              </h3>
              <p className="text-gray-600/90">
                Your application has been successfully submitted.<br />
                A confirmation email has been sent to your mail.
              </p>
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
             
              <ToastNotification
                />


            </div>
          )
  };
  


