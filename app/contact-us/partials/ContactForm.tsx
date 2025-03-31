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
import { Eye, Upload } from "lucide-react";
// Replace react-phone-number-input with react-phone-input-2
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Here you would typically send the data to your backend
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
              {/* <Eye className="absolute right-3 top-3 h-5 w-5 text-gray-400" /> */}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-bold" htmlFor="phone">
              Phone
            </Label>
            {/* Replace the previous phone input with react-phone-input-2 */}
            <PhoneInput
              country={'gb'}
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
              placeholder="+44 (555) 555-1234"
            />
            {/* Add custom styles for the phone input */}
            <style jsx global>{`
              .phone-input-container {
                display: flex;
                width: 100%;
              }
              .phone-input-container .form-control {
                width: 100%;
                height: 60px;
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
            <div className="border border-gray-300 rounded-md p-4 text-center cursor-pointer bg-white hover:bg-gray-50">
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    file: e.target.files?.[0] || null,
                  }))
                }
              />
              <label
                htmlFor="file"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="h-5 w-5 mb-2" />
                <span>Add a file</span>
              </label>
            </div>
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