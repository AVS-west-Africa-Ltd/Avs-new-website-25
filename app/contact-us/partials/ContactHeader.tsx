import React from 'react';
import { Button } from "@/components/ui/button";

const ContactHeader = () => {
  return (
    <div className="bg-[#131211] text-white py-16 px-4 md:py-24 flex flex-col items-center justify-center text-center">
      <p className="text-lg mb-3">Contact Us</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mb-8">
        Share your project brief and ideas. Let's make it happen
      </h1>
      <Button variant="outline" className="bg-white !rounded-[4px] text-black hover:bg-gray-100 hover:text-black">
        Let's connect now!
      </Button>
    </div>
  );
};

export default ContactHeader;