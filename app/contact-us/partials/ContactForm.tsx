// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Eye, Upload, X } from "lucide-react";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import { toast } from "sonner"; // Add toast for notifications

// const ContactForm = () => {
//   const [formData, setFormData] = useState<{
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//     lookingFor: string;
//     message: string;
//     subscribed: boolean;
//     file: File | null;
//   }>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     lookingFor: "",
//     message: "",
//     subscribed: false,
//     file: null,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
    
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
//       const maxSizeMB = 2;
  
//       if (!allowedTypes.includes(file.type)) {
//         toast.error('Only PDF, PNG, or JPEG files are allowed.');
//         return;
//       }
  
//       if (file.size > maxSizeMB * 1024 * 1024) {
//         toast.error('File size should be under 5MB.');
//         return;
//       }
//     }
//     if (e.target.files && e.target.files.length > 0) {
//       setFormData((prev) => ({
//         ...prev,
//         file: e.target.files?.[0] || null,
//       }));
//       console.log("File added to formData33:", e.target.files[0]);

//     }
//   };

//   const removeFile = () => {
//     setFormData((prev) => ({
//       ...prev,
//       file: null,
//     }));
//     // Reset the file input
//     const fileInput = document.getElementById('file') as HTMLInputElement;
//     if (fileInput) {
//       fileInput.value = '';
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("File added to formData33:", formData.file);

//     setIsSubmitting(true);
    
//     try {
//       // Create FormData object to handle file upload
//       const formDataToSend = new FormData();
//       formDataToSend.append('firstName', formData.firstName);
//       formDataToSend.append('lastName', formData.lastName);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('phone', formData.phone);
//       formDataToSend.append('lookingFor', formData.lookingFor);
//       formDataToSend.append('message', formData.message);
//       formDataToSend.append('subscribed', formData.subscribed.toString());
      
//       // Append file if it exists
//       if (formData.file) {
//         formDataToSend.append('file', formData.file);
//         console.log("File added to formData:", formData.file);
//       }
      
//       return
//       // Send data to API route
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         body: formDataToSend,
//       });
      
//       const result = await response.json();
      
//       if (response.ok) {
//         toast.success("Message sent successfully!");
//         // Reset form
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           lookingFor: "",
//           message: "",
//           subscribed: false,
//           file: null,
//         });
//         // Reset file input
//         const fileInput = document.getElementById('file') as HTMLInputElement;
//         if (fileInput) {
//           fileInput.value = '';
//         }
//       } else {
//         toast.error(result.message || "Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again later.");
//       console.error("Error sending form:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-gray-50 py-16 px-4 md:py-24">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
//           We would love to hear from you
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label className="font-bold" htmlFor="firstName">
//                 First name
//               </Label>
//               <Input
//                 id="firstName"
//                 name="firstName"
//                 placeholder="John"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label className="font-bold" htmlFor="lastName">
//                 Last name
//               </Label>
//               <Input
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Doe"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label className="font-bold" htmlFor="email">
//               Email
//             </Label>
//             <div className="relative">
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="johndoe@gmail.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label className="font-bold" htmlFor="phone">
//               Phone
//             </Label>
//             <PhoneInput
//               country={'us'}
//               value={formData.phone}
//               onChange={(phone) => setFormData((prev) => ({ ...prev, phone: phone || "" }))}
//               inputProps={{
//                 name: 'phone',
//                 id: 'phone',
//                 required: true,
//               }}
//               containerClass="phone-input-container"
//               inputClass="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               buttonClass="border border-gray-300 bg-gray-100 rounded-l-md"
//               placeholder="(555) 555-1234"
//             />
//             <style jsx global>{`
//               .phone-input-container {
//                 display: flex;
//                 width: 100%;
//               }
//               .phone-input-container .form-control {
//                 width: 100%;
//                 height: 40px;
//                 border-radius: 0 0.375rem 0.375rem 0 !important;
//               }
//               .phone-input-container .flag-dropdown {
//                 border-radius: 0.375rem 0 0 0.375rem;
//               }
//             `}</style>
//           </div>

//           <div className="space-y-2">
//             <Label className="font-bold" htmlFor="lookingFor">
//               Looking for?
//             </Label>
//             <Select
//               onValueChange={(value) =>
//                 setFormData((prev) => ({ ...prev, lookingFor: value }))
//               }
//             >
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Partnerships & Advisory" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="partnerships">
//                   Partnerships & Advisory
//                 </SelectItem>
//                 <SelectItem value="consulting">Consulting Services</SelectItem>
//                 <SelectItem value="development">Development Work</SelectItem>
//                 <SelectItem value="other">Other Inquiries</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label className="font-bold" htmlFor="message">
//               Message
//             </Label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder="Hello, I'm interested in..."
//               value={formData.message}
//               onChange={handleChange}
//               rows={10}
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label className="font-bold" htmlFor="file">
//               Attach brief
//             </Label>
            
//             {formData.file ? (
//               // Display selected file
//               <div className="border border-gray-300 rounded-md p-4 bg-white">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <div className="flex-shrink-0 p-2 bg-gray-100 rounded-md">
//                       <Upload className="h-5 w-5 text-gray-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">{formData.file.name}</p>
//                       <p className="text-xs text-gray-500">{(formData.file.size / 1024).toFixed(2)} KB</p>
//                     </div>
//                   </div>
//                   <button 
//                     type="button" 
//                     onClick={removeFile}
//                     className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
//                   >
//                     <X className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               // File upload button when no file is selected
//               <div className="border border-gray-300 rounded-md p-4 text-center cursor-pointer bg-white hover:bg-gray-50">
//                 <input
//                   type="file"
//                   id="file"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />
//                 <label
//                   htmlFor="file"
//                   className="cursor-pointer flex flex-col items-center"
//                 >
//                   <Upload className="h-5 w-5 mb-2" />
//                   <span>Add a file</span>
//                 </label>
//               </div>
//             )}
            
//             <p className="text-xs text-gray-500 mt-1">
//               Files will be securely attached to your email
//             </p>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="subscribed"
//               checked={formData.subscribed}
//               onCheckedChange={(checked) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   subscribed: checked as boolean,
//                 }))
//               }
//             />
//             <label
//               htmlFor="subscribed"
//               className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             >
//               By Subscribing you agree to receive emails and updates regularly
//             </label>
//           </div>

//           <Button
//             type="submit"
//             size={"lg"}
//             className="w-full bg-black text-white hover:bg-gray-800 py-4"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Sending..." : "Submit form"}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Upload, X } from "lucide-react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import { toast } from "sonner"; // Add toast for notifications
import toast from "react-hot-toast";
import ToastNotification from "../../../components/ToastNotification";

const ContactForm = ({ data }: any) => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    lookingFor: string;
    message: string;
    subscribed: boolean;
    file: File | null;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lookingFor: "",
    message: "",
    subscribed: false,
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Debug log when component mounts
  useEffect(() => {
    console.log("ContactForm component mounted");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Field ${name} changed to: ${value}`);
    // toast.success("Message sent successfully!");

    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("File input changed:", file);
    
    if (file) {
      const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
      const maxSizeMB = 5;
  
      if (!allowedTypes.includes(file.type)) {
        toast.error('Only PDF, PNG, or JPEG files are allowed.');
        return;
      }
  
      if (file.size > maxSizeMB * 1024 * 1024) {
        toast.error('File size should be under 5MB.');
        return;
      }

      if (e.target.files && e.target.files.length > 0) {
        setFormData((prev) => ({
          ...prev,
          file: e.target.files?.[0] || null,
        }));
        console.log("File added to formData:", e.target.files[0]);
      }
    }
  };

  const removeFile = () => {
    console.log("Removing file");
    setFormData((prev) => ({
      ...prev,
      file: null,
    }));
    // Reset the file input
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Full form data:", formData);
    console.log("File in formData:", formData.file);

    setIsSubmitting(true);
    
    try {
      // Create FormData object to handle file upload
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('lookingFor', formData.lookingFor);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subscribed', formData.subscribed.toString());
      
      // Append file if it exists
      if (formData.file) {
        formDataToSend.append('file', formData.file);
        console.log("File added to formDataToSend:", formData.file.name);
      }
      
      // REMOVED THE RETURN STATEMENT THAT WAS HERE
      
      // Send data to API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formDataToSend,
      });
      
      console.log("API response received");
      const result = await response.json();
      console.log("API result:", result);
      
      if (response.ok) {
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          lookingFor: "",
          message: "",
          subscribed: false,
          file: null,
        });
        // Reset file input
        const fileInput = document.getElementById('file') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {data?.formTitle}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="font-bold" htmlFor="firstName">
                First name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="font-bold" htmlFor="lastName">
                Last name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-bold" htmlFor="email">
              Email
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-bold" htmlFor="phone">
              Phone
            </Label>
            <PhoneInput
              country={'us'}
              value={formData.phone}
              onChange={(phone) => {
                console.log("Phone changed to:", phone);
                setFormData((prev) => ({ ...prev, phone: phone || "" }));
              }}
              inputProps={{
                name: 'phone',
                id: 'phone',
                required: true,
              }}
              containerClass="phone-input-container"
              inputClass="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              buttonClass="border border-gray-300 bg-gray-100 rounded-l-md"
              placeholder="(555) 555-1234"
            />
            <style jsx global>{`
              .phone-input-container {
                display: flex;
                width: 100%;
              }
              .phone-input-container .form-control {
                width: 100%;
                height: 40px;
                border-radius: 0 0.375rem 0.375rem 0 !important;
              }
              .phone-input-container .flag-dropdown {
                border-radius: 0.375rem 0 0 0.375rem;
              }
            `}</style>
          </div>

          <div className="space-y-2">
            <Label className="font-bold" htmlFor="lookingFor">
              Looking for?
            </Label>
            <Select
              onValueChange={(value) => {
                console.log("lookingFor changed to:", value);
                setFormData((prev) => ({ ...prev, lookingFor: value }));
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Partnerships & Advisory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="partnerships">
                  Partnerships & Advisory
                </SelectItem>
                <SelectItem value="consulting">Consulting Services</SelectItem>
                <SelectItem value="development">Development Work</SelectItem>
                <SelectItem value="other">Other Inquiries</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="font-bold" htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Hello, I'm interested in..."
              value={formData.message}
              onChange={handleChange}
              rows={10}
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="font-bold" htmlFor="file">
              Attach brief
            </Label>
            
            {formData.file ? (
              // Display selected file
              <div className="border border-gray-300 rounded-md p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-md">
                      <Upload className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{formData.file.name}</p>
                      <p className="text-xs text-gray-500">{(formData.file.size / 1024).toFixed(2)} KB</p>
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
            ) : (
              // File upload button when no file is selected
              <div className="border border-gray-300 rounded-md p-4 text-center cursor-pointer bg-white hover:bg-gray-50">
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="h-5 w-5 mb-2" />
                  <span>Add a file</span>
                </label>
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-1">
              Files will be securely attached to your email
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="subscribed"
              checked={formData.subscribed}
              onCheckedChange={(checked) => {
                console.log("Subscribed changed to:", checked);
                setFormData((prev) => ({
                  ...prev,
                  subscribed: checked as boolean,
                }));
              }}
            />
            <label
              htmlFor="subscribed"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {data?.consentText}
            </label>
          </div>

          <Button
            type="submit"
            size={"lg"}
            className="w-full bg-black text-white hover:bg-gray-800 py-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (<> <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>Sending...</>) :( data?.submitButtonLabel|| "Submit form") }

          </Button>
        </form>
      </div>
  <ToastNotification/>

    </div>
  );
};

export default ContactForm;