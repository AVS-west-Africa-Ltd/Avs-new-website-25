"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AV from "@/public/icons/av.svg";
import { Download } from "lucide-react";

const API_URL = "http://localhost:5002/api";

interface ImageData {
  type: string;
  style: string;
  description: string;
  image: string; // base64 encoded image
}

interface Message {
  type: 'user' | 'ai';
  content: string;
  isComplete?: boolean;
  images?: ImageData[];
}

const LogoGenerator = () => {
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState<Message[]>([]);
    const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef(null);
    const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const initialLoadRef = useRef<boolean>(true);
    const [sessionId] = useState<string>(() => Math.random().toString(36).substring(2, 11));

    // Initialize the logo generation conversation as soon as the component mounts
    useEffect(() => {
        if (initialLoadRef.current) {
            initialLoadRef.current = false;
            initializeLogoChat();
        }
    }, []);

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

    // Initialize logo chat automatically
    const initializeLogoChat = async () => {
        try {
            const response = await fetch(`${API_URL}/logo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    message: "",
                    sessionId: sessionId
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            if (data.success) {
                const aiMessage: Message = {
                    type: 'ai',
                    content: data.response,
                    images: data.images || []
                };
                
                setMessages([aiMessage]);
                animateTypewriter(aiMessage);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error initializing logo chat:", error);
            const errorMessage: Message = { 
                type: 'ai', 
                content: "Sorry, I'm having trouble connecting to the server. Please reload the page or try again later.",
                images: []
            };
            setMessages([errorMessage]);
            setDisplayedMessages([errorMessage]);
        } finally {
            setIsLoading(false);
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

        try {
            // Call the backend API
            const response = await fetch(`${API_URL}/logo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    message: userMessage,
                    sessionId: sessionId
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            if (data.success) {
                // Create the AI message
                const aiMessage: Message = {
                    type: 'ai',
                    content: data.response,
                    isComplete: data.isComplete,
                    images: data.images || []
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
                content: "Sorry, I'm having trouble connecting to the server. Please try again later.",
                images: []
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
                            content: currentText,
                            isComplete: message.isComplete,
                            images: message.images
                        };
                    } else {
                        // Add new message if none exists
                        newMessages.push({ 
                            type: 'ai', 
                            content: currentText,
                            isComplete: message.isComplete,
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

    const handleDownloadLogo = (imageData: string, filename: string) => {
        const link = document.createElement('a');
        link.href = imageData;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-5">
                {/* Chat Interface */}
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
                                        
                                        {/* Logo Images - Modified to display as grid cards */}
                                        {message.images && message.images.length > 0 && (
                                            <div className="mt-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                    {message.images.map((img, imgIndex) => (
                                                        <div key={imgIndex} className="bg-gray-700 rounded-lg overflow-hidden relative group">
                                                            <div className="aspect-square relative">
                                                                <img 
                                                                    src={img.image} 
                                                                    alt={img.description}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <button
                                                                    onClick={() => handleDownloadLogo(
                                                                        img.image, 
                                                                        `${img.description.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`
                                                                    )}
                                                                    className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all"
                                                                >
                                                                    <Download className="w-5 h-5" />
                                                                </button>
                                                            </div>
                                                            <div className="p-3">
                                                                <p className="text-sm text-gray-300 truncate">{img.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
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
                            placeholder="Describe your logo design ideas..."
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
            </div>
        </div>
    );
};

export default LogoGenerator;