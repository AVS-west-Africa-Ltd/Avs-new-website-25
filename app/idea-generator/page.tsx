"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Idea from "@/public/icons/idea.svg";
import Business from "@/public/icons/business.svg";
import BusinessLogo from "@/public/icons/business-logo.svg";
import AV from "@/public/icons/av.svg";
import { Download } from "lucide-react";

const API_URL = "http://localhost:5002/api"; // Updated to match your server.js port

interface Message {
  type: 'user' | 'ai';
  content: string;
  images?: string[];
}

interface LogoVariation {
  description: string;
  base64: string;
}

const BusinessNameGenerator = () => {
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [chatActive, setChatActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef(null);
    const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Scroll chat container to bottom when messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            scrollChatToBottom();
        }
    }, [displayedMessages]);

    // Clear any pending timeouts when component unmounts
    useEffect(() => {
        return () => {
            if (typewriterTimeoutRef.current) {
                clearTimeout(typewriterTimeoutRef.current);
            }
        };
    }, []);

    const scrollChatToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };

    // Parse formatting markers in text
    const parseFormattedText = (text: string) => {
        if (!text) return [];
        
        const segments: {text: string, bold: boolean, italic: boolean, underline: boolean}[] = [];
        let currentText = '';
        let currentFormat = { bold: false, italic: false, underline: false };
        let i = 0;
        
        while (i < text.length) {
            // Check for bold formatting (**text**)
            if (i + 1 < text.length && text.substring(i, i + 2) === '**') {
                if (currentText) {
                    segments.push({ text: currentText, ...currentFormat });
                    currentText = '';
                }
                currentFormat = { ...currentFormat, bold: !currentFormat.bold };
                i += 2;
                continue;
            }
            
            // Check for italic formatting (_text_)
            if (text[i] === '_' && (i === 0 || text[i-1] !== '\\')) {
                if (currentText) {
                    segments.push({ text: currentText, ...currentFormat });
                    currentText = '';
                }
                currentFormat = { ...currentFormat, italic: !currentFormat.italic };
                i++;
                continue;
            }
            
            // Check for underline formatting (--text--)
            if (i + 1 < text.length && text.substring(i, i + 2) === '--') {
                if (currentText) {
                    segments.push({ text: currentText, ...currentFormat });
                    currentText = '';
                }
                currentFormat = { ...currentFormat, underline: !currentFormat.underline };
                i += 2;
                continue;
            }
            
            // Regular text
            currentText += text[i];
            i++;
        }
        
        // Add any remaining text
        if (currentText) {
            segments.push({ text: currentText, ...currentFormat });
        }
        
        return segments;
    };

    // Render text with formatting
    const renderFormattedText = (text: string) => {
        const formattedSegments = parseFormattedText(text);
        
        return formattedSegments.map((segment, index) => {
            let className = '';
            
            if (segment.bold) className += 'font-bold ';
            if (segment.italic) className += 'italic ';
            if (segment.underline) className += 'underline ';
            
            return className ? (
                <span key={index} className={className.trim()}>
                    {segment.text}
                </span>
            ) : segment.text;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        // Add user message to chat immediately
        const userMessage = inputValue;
        const newUserMessage: Message = { type: 'user', content: userMessage };
        
        setMessages(prev => [...prev, newUserMessage]);
        setDisplayedMessages(prev => [...prev, newUserMessage]);

        // Clear input and show loading state
        setInputValue("");
        setIsLoading(true);

        // Set chat to active if this is the first message
        if (!chatActive) {
            setChatActive(true);

            // If no specific option was selected yet, determine from input
            if (!selectedOption) {
                if (userMessage.toLowerCase().includes("logo")) {
                    setSelectedOption("logo");
                } else if (userMessage.toLowerCase().includes("name")) {
                    setSelectedOption("name");
                } else if (userMessage.toLowerCase().includes("prd")) {
                    setSelectedOption("prd");
                }
            }
        }

        try {
            // Call the backend API
            const response = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    message: userMessage,
                    // Include the context of what feature we're using if available
                    option: selectedOption || undefined
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            if (data.success) {
                // Create the AI message with both text and images
                const aiMessage: Message = {
                    type: 'ai',
                    content: data.response.text,
                    images: data.response.images || []
                };
                
                // Add to the messages array
                setMessages(prev => [...prev, aiMessage]);
                
                // Animate the typewriter effect
                animateTypewriter(aiMessage);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: Message = { 
                type: 'ai', 
                content: "Sorry, I'm having trouble connecting to the server. Please try again later." 
            };
            setMessages(prev => [...prev, errorMessage]);
            setDisplayedMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const animateTypewriter = (message: Message) => {
        let currentText = "";
        const fullText = message.content;
        const words = fullText.split("");
        
        // Clear any existing timeout
        if (typewriterTimeoutRef.current) {
            clearTimeout(typewriterTimeoutRef.current);
        }

        words.forEach((char, index) => {
            typewriterTimeoutRef.current = setTimeout(() => {
                currentText += char;
                setDisplayedMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    
                    if (lastMessage && lastMessage.type === 'ai') {
                        // Update the text content
                        newMessages[newMessages.length - 1] = { 
                            ...lastMessage, 
                            content: currentText 
                        };
                    } else {
                        // Add new message if none exists
                        newMessages.push({ 
                            type: 'ai', 
                            content: currentText,
                            images: message.images 
                        });
                    }
                    
                    return newMessages;
                });

                // Scroll to bottom during typewriter effect
                scrollChatToBottom();
            }, 30 * index);
        });
    };

    const handleOptionSelect = async (option: string) => {
        setSelectedOption(option);
        setChatActive(true);
        setIsLoading(true);

        // Instead of making a separate API call, we'll use the same /chat endpoint
        // but with a specific message format indicating option selection
        const optionMessage = `I'd like to use the ${option} feature.`;
        
        try {
            // Call the same chat endpoint used for messages
            const response = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    message: optionMessage,
                    option: option  // Pass the selected option to provide context
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            if (data.success) {
                const aiMessage: Message = {
                    type: 'ai',
                    content: data.response.text,
                    images: data.response.images || []
                };
                
                setMessages([aiMessage]);
                animateTypewriter(aiMessage);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error selecting option:", error);
            const errorMessage: Message = { 
                type: 'ai', 
                content: "Sorry, I'm having trouble connecting to the server. Please try again later." 
            };
            setMessages([errorMessage]);
            setDisplayedMessages([errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownloadImage = (imageUrl: string) => {
        const a = document.createElement('a');
        a.href = imageUrl;
        
        // Set appropriate filename based on image type
        if (imageUrl.startsWith('data:image')) {
            a.download = `logo-${Date.now()}.png`;
        } else {
            a.download = `image-${Date.now()}.png`;
        }
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-5">
                {!chatActive ? (
                    /* Welcome Screen - Shown when chat is not active */
                    <>
                        {/* Hero Section */}
                        <div className="max-w-3xl w-full text-center mb-16">
                            <h1 className="text-4xl md:text-4xl mb-6">
                                Harness the power of AI. Describe a logo, business or even a document
                            </h1>

                            <div className="mt-20">
                                <h2 className="text-sm mb-1 text-left w-full text-[#E4E5E7]">What would you like to create today</h2>

                                {/* Feature Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* PRD Card */}
                                    <div
                                        className="bg-[#FFF1EF] bg-opacity-10 p-6 rounded-lg border border-pink-100 border-opacity-10 text-left cursor-pointer hover:bg-opacity-20"
                                        onClick={() => handleOptionSelect("prd")}
                                    >
                                        <div className="bg-[#FFF1EF] bg-opacity-20 w-10 h-10 rounded-md flex items-center justify-center mb-4">
                                            <Image src={Idea} alt="Design Icon" width={40} height={40} />
                                        </div>
                                        <h3 className="font-bold text-[#000] mb-2">Get a PRD for Your Idea</h3>
                                        <p className="text-[#636363] text-sm">
                                            Turn your startup idea into a structured PRD in seconds!
                                        </p>
                                    </div>

                                    {/* Name Card */}
                                    <div
                                        className="bg-[#FFF1EF] bg-opacity-10 p-6 rounded-lg border border-pink-100 border-opacity-10 text-left cursor-pointer hover:bg-opacity-20"
                                        onClick={() => handleOptionSelect("name")}
                                    >
                                        <div className="bg-[#FFF1EF] bg-opacity-20 w-10 h-10 rounded-md flex items-center justify-center mb-4">
                                            <Image src={Business} alt="Design Icon" width={40} height={40} />
                                        </div>
                                        <h3 className="font-bold text-[#000] mb-2">Get a name for your business</h3>
                                        <p className="text-[#636363] text-sm">
                                            Find the perfect name for your startup.
                                        </p>
                                    </div>

                                    {/* Logo Card */}
                                    <div
                                        className="bg-[#FFF1EF] bg-opacity-10 p-6 rounded-lg border border-pink-100 border-opacity-10 text-left cursor-pointer hover:bg-opacity-20"
                                        onClick={() => handleOptionSelect("logo")}
                                    >
                                        <div className="bg-[#FFF1EF] bg-opacity-20 w-10 h-10 rounded-md flex items-center justify-center mb-4">
                                            <Image src={BusinessLogo} alt="Design Icon" width={40} height={40} />
                                        </div>
                                        <h3 className="font-bold text-[#000] mb-2">Get a Logo for your business</h3>
                                        <p className="text-[#636363] text-sm">
                                            Describe your business, and we'll generate logo ideas!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type something..."
                                    className="w-full py-4 px-6 my-6 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                    disabled={isLoading}
                                />
                                {/* Powered by section */}
                                <div className="mt-6 text-center text-gray-400 text-sm">
                                    <div className="flex items-center justify-center space-x-1">
                                        <div>Powered by</div>
                                        <Image src={AV} alt="Design Icon" width={20} height={18} />
                                        <div>enture studio</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    /* Chat Interface - Shown when chat is active */
                    <div className="max-w-3xl w-full flex flex-col h-[80vh]">
                        {/* Chat Messages */}
                        <div 
                            className="flex-1 overflow-y-auto mb-4 px-2" 
                            ref={chatContainerRef}
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {displayedMessages.map((message, index) => {
                                if (message.type === 'user') {
                                    return (
                                        <div key={index} className="mb-6 text-right">
                                            <div className="inline-block rounded-xl p-4 max-w-[80%] bg-gray-700 text-white rounded-br-none">
                                                {message.content.split('\n').map((text, i) => (
                                                    <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                                        {renderFormattedText(text)}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index} className="mb-6 text-left">
                                            {message.content && message.content.trim() !== '' && (
                                                <div className="inline-block rounded-xl p-4 max-w-[80%] bg-gray-600 bg-opacity-40 text-white rounded-bl-none">
                                                    {message.content.split('\n').map((textLine, i) => (
                                                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                                            {renderFormattedText(textLine)}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                            
                                            {/* Images Grid */}
                                            {message.images && message.images.length > 0 && (
                                                <div className={`grid ${message.images.length === 1 ? 'grid-cols-1' : message.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-4 mt-4`}>
                                                    {message.images.map((img, imgIdx) => (
                                                        <div 
                                                            key={imgIdx} 
                                                            className="relative bg-gray-700 rounded-lg overflow-hidden aspect-square"
                                                        >
                                                            {/* Image */}
                                                            <div className="h-full w-full flex items-center justify-center">
                                                                <img 
                                                                    src={img} 
                                                                    alt={`Generated logo ${imgIdx + 1}`}
                                                                    className="object-cover w-full h-full"
                                                                />
                                                            </div>
                                                            
                                                            {/* Download button */}
                                                            <button 
                                                                onClick={() => handleDownloadImage(img)}
                                                                className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                                                                title="Download"
                                                            >
                                                                <Download size={18} />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                            })}
                            {isLoading && (
                                <div className="text-left mb-6">
                                    <div className="inline-block rounded-xl p-4 bg-gray-600 bg-opacity-40 text-white rounded-bl-none">
                                        <p>Thinking...</p>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type something..."
                                className="w-full py-4 px-6 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                disabled={isLoading}
                            />
                        </form>
                        <div className="mt-6 text-center text-gray-400 text-sm">
                            <div className="flex items-center justify-center space-x-1">
                                <div>Powered by</div>
                                <Image src={AV} alt="Design Icon" width={20} height={18} />
                                <div>enture studio</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusinessNameGenerator;