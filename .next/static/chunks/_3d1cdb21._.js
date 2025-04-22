(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_3d1cdb21._.js", {

"[project]/public/icons/av.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/av.da1a4b12.svg");}}),
"[project]/public/icons/av.svg.mjs { IMAGE => \"[project]/public/icons/av.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$av$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/icons/av.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$av$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 14,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/business-name-generator/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$av$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$av$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/icons/av.svg.mjs { IMAGE => "[project]/public/icons/av.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const API_URL = "http://localhost:5002/api"; // Updated to match your server.js port
const NameGenerator = ()=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Start with loading state
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [displayedMessages, setDisplayedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typewriterTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [sessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NameGenerator.useState": ()=>Math.random().toString(36).substring(2, 11)
    }["NameGenerator.useState"]);
    // Initialize the name generation conversation as soon as the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NameGenerator.useEffect": ()=>{
            if (initialLoadRef.current) {
                initialLoadRef.current = false;
                initializeNameChat();
            }
        }
    }["NameGenerator.useEffect"], []);
    // Scroll chat container to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NameGenerator.useEffect": ()=>{
            if (chatContainerRef.current) {
                scrollChatToBottom();
            }
        }
    }["NameGenerator.useEffect"], [
        displayedMessages
    ]);
    // Clear any pending timeouts when component unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NameGenerator.useEffect": ()=>{
            return ({
                "NameGenerator.useEffect": ()=>{
                    if (typewriterTimeoutRef.current) {
                        clearTimeout(typewriterTimeoutRef.current);
                    }
                }
            })["NameGenerator.useEffect"];
        }
    }["NameGenerator.useEffect"], []);
    const scrollChatToBottom = ()=>{
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };
    // Initialize name chat automatically
    const initializeNameChat = async ()=>{
        try {
            const response = await fetch(`${API_URL}/name`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: "",
                    sessionId: sessionId
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.success) {
                const aiMessage = {
                    type: 'ai',
                    content: data.response
                };
                setMessages([
                    aiMessage
                ]);
                animateTypewriter(aiMessage);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error initializing name chat:", error);
            const errorMessage = {
                type: 'ai',
                content: "Sorry, I'm having trouble connecting to the server. Please reload the page or try again later."
            };
            setMessages([
                errorMessage
            ]);
            setDisplayedMessages([
                errorMessage
            ]);
        } finally{
            setIsLoading(false);
        }
    };
    // Parse formatting markers in text
    const parseFormattedText = (text)=>{
        if (!text) return [];
        const segments = [];
        let currentText = '';
        let currentFormat = {
            bold: false,
            italic: false,
            underline: false
        };
        let i = 0;
        while(i < text.length){
            // Check for bold formatting (**text**)
            if (i + 1 < text.length && text.substring(i, i + 2) === '**') {
                if (currentText) {
                    segments.push({
                        text: currentText,
                        ...currentFormat
                    });
                    currentText = '';
                }
                currentFormat = {
                    ...currentFormat,
                    bold: !currentFormat.bold
                };
                i += 2;
                continue;
            }
            // Check for italic formatting (_text_)
            if (text[i] === '_' && (i === 0 || text[i - 1] !== '\\')) {
                if (currentText) {
                    segments.push({
                        text: currentText,
                        ...currentFormat
                    });
                    currentText = '';
                }
                currentFormat = {
                    ...currentFormat,
                    italic: !currentFormat.italic
                };
                i++;
                continue;
            }
            // Check for underline formatting (--text--)
            if (i + 1 < text.length && text.substring(i, i + 2) === '--') {
                if (currentText) {
                    segments.push({
                        text: currentText,
                        ...currentFormat
                    });
                    currentText = '';
                }
                currentFormat = {
                    ...currentFormat,
                    underline: !currentFormat.underline
                };
                i += 2;
                continue;
            }
            // Regular text
            currentText += text[i];
            i++;
        }
        // Add any remaining text
        if (currentText) {
            segments.push({
                text: currentText,
                ...currentFormat
            });
        }
        return segments;
    };
    // Render text with formatting
    const renderFormattedText = (text)=>{
        const formattedSegments = parseFormattedText(text);
        return formattedSegments.map((segment, index)=>{
            let className = '';
            if (segment.bold) className += 'font-bold ';
            if (segment.italic) className += 'italic ';
            if (segment.underline) className += 'underline ';
            return className ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: className.trim(),
                children: segment.text
            }, index, false, {
                fileName: "[project]/app/business-name-generator/page.tsx",
                lineNumber: 173,
                columnNumber: 17
            }, this) : segment.text;
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;
        // Add user message to chat immediately
        const userMessage = inputValue;
        const newUserMessage = {
            type: 'user',
            content: userMessage
        };
        setMessages((prev)=>[
                ...prev,
                newUserMessage
            ]);
        setDisplayedMessages((prev)=>[
                ...prev,
                newUserMessage
            ]);
        // Clear input and show loading state
        setInputValue("");
        setIsLoading(true);
        try {
            // Call the backend API
            const response = await fetch(`${API_URL}/name`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionId
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.success) {
                // Create the AI message
                const aiMessage = {
                    type: 'ai',
                    content: data.response,
                    isComplete: data.isComplete,
                    name: data.name
                };
                // Add to the messages array
                setMessages((prev)=>[
                        ...prev,
                        aiMessage
                    ]);
                // Animate the typewriter effect
                animateTypewriter(aiMessage);
                // If name generation is complete, show download button
                if (data.isComplete && data.name) {
                // You could add a download button for the names here
                }
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage = {
                type: 'ai',
                content: "Sorry, I'm having trouble connecting to the server. Please try again later."
            };
            setMessages((prev)=>[
                    ...prev,
                    errorMessage
                ]);
            setDisplayedMessages((prev)=>[
                    ...prev,
                    errorMessage
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    const animateTypewriter = (message)=>{
        let currentText = "";
        const fullText = message.content;
        const words = fullText.split("");
        // Clear any existing timeout
        if (typewriterTimeoutRef.current) {
            clearTimeout(typewriterTimeoutRef.current);
        }
        words.forEach((char, index)=>{
            typewriterTimeoutRef.current = setTimeout(()=>{
                currentText += char;
                setDisplayedMessages((prev)=>{
                    const newMessages = [
                        ...prev
                    ];
                    const lastMessage = newMessages[newMessages.length - 1];
                    if (lastMessage && lastMessage.type === 'ai') {
                        // Update the text content
                        newMessages[newMessages.length - 1] = {
                            ...lastMessage,
                            content: currentText,
                            isComplete: message.isComplete,
                            name: message.name
                        };
                    } else {
                        // Add new message if none exists
                        newMessages.push({
                            type: 'ai',
                            content: currentText,
                            isComplete: message.isComplete,
                            name: message.name
                        });
                    }
                    return newMessages;
                });
                // Scroll to bottom during typewriter effect
                scrollChatToBottom();
            }, 30 * index);
        });
    };
    const handleDownloadNames = ()=>{
        const nameMessage = messages.find((m)=>m.name);
        if (!nameMessage || !nameMessage.name) return;
        const blob = new Blob([
            nameMessage.name
        ], {
            type: 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `business-name-ideas-${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center px-4 py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl w-full flex flex-col h-[80vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto mb-4 px-2",
                        ref: chatContainerRef,
                        style: {
                            scrollBehavior: 'smooth'
                        },
                        children: [
                            displayedMessages.map((message, index)=>{
                                if (message.type === 'user') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block rounded-xl p-4 max-w-[80%] bg-gray-700 text-white rounded-br-none",
                                            children: message.content.split('\n').map((text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: i > 0 ? 'mt-2' : '',
                                                    children: renderFormattedText(text)
                                                }, i, false, {
                                                    fileName: "[project]/app/business-name-generator/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/business-name-generator/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 41
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/app/business-name-generator/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 37
                                    }, this);
                                } else {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 text-left",
                                        children: [
                                            message.content && message.content.trim() !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block rounded-xl p-4 max-w-[80%] bg-gray-600 bg-opacity-40 text-white rounded-bl-none",
                                                children: message.content.split('\n').map((textLine, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: i > 0 ? 'mt-2' : '',
                                                        children: renderFormattedText(textLine)
                                                    }, i, false, {
                                                        fileName: "[project]/app/business-name-generator/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/business-name-generator/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 45
                                            }, this),
                                            message.isComplete && message.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleDownloadNames,
                                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                                                    children: "Download Business Names"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/business-name-generator/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/business-name-generator/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/business-name-generator/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 37
                                    }, this);
                                }
                            }),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block rounded-xl p-4 bg-gray-600 bg-opacity-40 text-white rounded-bl-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Thinking..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/business-name-generator/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/business-name-generator/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/business-name-generator/page.tsx",
                                lineNumber: 362,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/app/business-name-generator/page.tsx",
                                lineNumber: 368,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/business-name-generator/page.tsx",
                        lineNumber: 315,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: inputValue,
                            onChange: (e)=>setInputValue(e.target.value),
                            placeholder: "Describe your business idea...",
                            className: "w-full py-4 px-6 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600",
                            disabled: isLoading
                        }, void 0, false, {
                            fileName: "[project]/app/business-name-generator/page.tsx",
                            lineNumber: 373,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/business-name-generator/page.tsx",
                        lineNumber: 372,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center text-gray-400 text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center space-x-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "Powered by"
                                }, void 0, false, {
                                    fileName: "[project]/app/business-name-generator/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$av$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$av$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Design Icon",
                                    width: 20,
                                    height: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/business-name-generator/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "enture studio"
                                }, void 0, false, {
                                    fileName: "[project]/app/business-name-generator/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/business-name-generator/page.tsx",
                            lineNumber: 383,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/business-name-generator/page.tsx",
                        lineNumber: 382,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/business-name-generator/page.tsx",
                lineNumber: 313,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/business-name-generator/page.tsx",
            lineNumber: 311,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/business-name-generator/page.tsx",
        lineNumber: 309,
        columnNumber: 9
    }, this);
};
_s(NameGenerator, "h/6S9s4e/PUWnnQSgFSGRGijoFQ=");
_c = NameGenerator;
const __TURBOPACK__default__export__ = NameGenerator;
var _c;
__turbopack_context__.k.register(_c, "NameGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_3d1cdb21._.js.map