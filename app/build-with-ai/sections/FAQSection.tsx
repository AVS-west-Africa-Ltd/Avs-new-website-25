"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is AI?",
      answer: "AI (Artificial Intelligence) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It performs tasks that typically require human intelligence such as visual perception, speech recognition, decision making, and language translation."
    },
    {
      question: "How does AI work?",
      answer: "AI works through algorithms that process large amounts of data, identify patterns, and make predictions. Modern AI systems use machine learning and deep learning to continually improve their performance over time without being explicitly programmed for specific tasks."
    },
    {
      question: "What are the benefits of AI?",
      answer: "AI offers numerous benefits including automation of repetitive tasks, enhanced data analysis, 24/7 availability, reduced human error, personalized experiences, faster decision making, and the ability to process vast amounts of data quickly."
    },
    {
      question: "What are some examples of AI?",
      answer: "Examples of AI include virtual assistants (Siri, Alexa), recommendation systems (Netflix, Amazon), autonomous vehicles, chatbots, image recognition systems, language translation tools, and AI-powered design tools like our logo and business name generators."
    },
    {
      question: "What is deep learning?",
      answer: "Deep learning is a subset of machine learning that uses neural networks with multiple layers (hence 'deep') to analyze various factors of data. It mimics the human brain's structure and function, allowing it to learn from large amounts of data and make intelligent decisions."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
  <div 
    key={index} 
    className="mb-4 border-b border-gray-200 pb-4 rounded-bl-xl rounded-br-xl bg-white"
  >
    <button
      onClick={() => toggleFAQ(index)}
      className="flex justify-between items-center w-full text-left font-medium text-lg py-2"
    >
      {faq.question}
      <ChevronDown 
        className={`h-5 w-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
      />
    </button>
    {openIndex === index && (
      <div className="mt-2 text-gray-600">
        <p>{faq.answer}</p>
      </div>
    )}
  </div>
))}

      </div>
    </section>
  );
};