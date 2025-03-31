"use client";

import React, { useState } from "react";
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

const ContactForm = () => {
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

  // Recipient email address
  const recipientEmail = "your-email@example.com"; // Replace with your actual email

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files?.[0] || null,
      }));
    }
  };

  const removeFile = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email subject and body
    const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    
    let body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Looking For: ${formData.lookingFor}
Subscribed to Updates: ${formData.subscribed ? 'Yes' : 'No'}

Message:
${formData.message}
    `;
    
    if (formData.file) {
      body += `\n\nFile attached: ${formData.file.name} (${(formData.file.size / 1024).toFixed(2)} KB)`;
    }
    
    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          We would love to hear from you
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
              onChange={(phone) => setFormData((prev) => ({ ...prev, phone: phone || "" }))}
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
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, lookingFor: value }))
              }
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
            
            {/* <p className="text-xs text-gray-500 mt-1">
              Note: File attachments cannot be sent via mailto. The file name will be mentioned in the email.
            </p> */}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="subscribed"
              checked={formData.subscribed}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  subscribed: checked as boolean,
                }))
              }
            />
            <label
              htmlFor="subscribed"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By Subscribing you agree to receive emails and updates regularly
            </label>
          </div>

          <Button
            type="submit"
            size={"lg"}
            className="w-full bg-black text-white hover:bg-gray-800 py-4"
          >
            Submit form
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;