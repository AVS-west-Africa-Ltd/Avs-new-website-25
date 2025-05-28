'use client';

import React from 'react';

const OurWorkPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
        <div className="relative h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-indigo-400 animate-pulse-slow"></div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-300 animate-bounce-slow">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 md:h-24 md:w-24 text-yellow-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-6.829m3.018-.562l.095-.089a2.548 2.548 0 013.586 3.586l-.089.095m0 0l-.089.095a2.548 2.548 0 01-3.586-3.586l.095-.089m0 0l3.03-2.496a3.66 3.66 0 00.766-1.208" 
                  />
                </svg>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate-float">
                Our work
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                We're working hard to bring you something amazing!
              </p>
              <div className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Coming Soon
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Design', 'Development', 'Testing', 'Launch'].map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center transition-all duration-300 hover:shadow-md hover:border-indigo-300"
              >
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="font-medium text-gray-700">{item}</span>
                <span className="text-xs text-gray-500 mt-1">In progress</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-yellow-500 animate-pulse" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            This page is under construction - check back soon!
          </p>
        </div>
      </div>
      
      {/* Add custom animations to Tailwind */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OurWorkPage;
