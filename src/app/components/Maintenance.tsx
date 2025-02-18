// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from './Logo';
import Link from 'next/link';

export default function Maintenance() {
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // alert(`Form submitted with email: ${email}`);
        // setEmail('');


        if (!email) {
            alert("Please enter a valid email.");
            return;
          }
      
          const subject = encodeURIComponent("New Contact Request");
          const body = encodeURIComponent(`Hello,\n\nI would like to get in touch.\n\nMy email: ${email}`);
      
          window.location.href = `mailto:dm@aventurestud.io?subject=${subject}&body=${body}`;
    };



    // const handleSendEmail = () => {
    //     if (!email) {
    //       alert("Please enter a valid email.");
    //       return;
    //     }
    
    //     const subject = encodeURIComponent("New Contact Request");
    //     const body = encodeURIComponent(`Hello,\n\nI would like to get in touch.\n\nMy email: ${email}`);
    
    //     window.location.href = `mailto:dm@aventurestud.io?subject=${subject}&body=${body}`;
    //   };
    return (
        <div className="relative min-h-screen flex flex-col">
            <Head>
                <title>Brand Refresh</title>
                <meta name="description" content="We're giving our brand a fresh new look!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/maintenance.png" // Make sure to add this image to your public folder
                    alt="Industrial gear background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <main className="relative z-10 flex-grow flex items-center">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 lg:w-2/5 text-white space-y-8 py-16">
                        {/* Logo */}
                        {/* <div className="w-24 h-24 md:w-32 md:h-32">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M100 30L30 150H170L100 30Z" stroke="white" strokeWidth="8" />
                <path d="M100 170L30 50H170L100 170Z" stroke="white" strokeWidth="8" />
              </svg> 
            </div> */}
                        <div className="w-24 h-24 md:w-32 md:h-32">
                            <Link href='/'>
                                <Image width={150} height={20} className='w-full h-full object-contain' src='/maintenance-logo.png' alt="Logo" />
                            </Link>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            Refreshing<br />the Brand
                        </h1>

                        {/* Message */}
                        <p className="text-sm md:text-xl">
                            We're giving our brand a fresh new look!<br />
                            We're still here for you, though. You can still<br />
                            get in touch with the team today.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                            {/* <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div> */}

                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className={`absolute transition-all duration-200 ${isFocused || email ?
                                        '-top-2.5 left-2 text-xs bg-black px-1 text-white' :
                                        'top-3 left-4 text-gray-400'
                                        }`}
                                >
                                    Email
                                </label>
                               
                          
                            <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
      />
        </div>
                            <div>
    
      <button
        // onClick={handleSendEmail}
        className="w-full bg-white text-black font-medium py-3 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200" type='submit'
      >
        Get in touch
      </button>
    </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}