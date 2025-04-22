(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_80c5fba7._.js", {

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
"[project]/app/logo-generator/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const API_URL = "http://localhost:5002/api";
const LogoGenerator = ()=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [displayedMessages, setDisplayedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typewriterTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [sessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LogoGenerator.useState": ()=>Math.random().toString(36).substring(2, 11)
    }["LogoGenerator.useState"]);
    // Initialize the logo generation conversation as soon as the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LogoGenerator.useEffect": ()=>{
            if (initialLoadRef.current) {
                initialLoadRef.current = false;
                initializeLogoChat();
            }
        }
    }["LogoGenerator.useEffect"], []);
    // Scroll chat container to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LogoGenerator.useEffect": ()=>{
            if (chatContainerRef.current) {
                scrollChatToBottom();
            }
        }
    }["LogoGenerator.useEffect"], [
        displayedMessages
    ]);
    // Clear any pending timeouts when component unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LogoGenerator.useEffect": ()=>{
            return ({
                "LogoGenerator.useEffect": ()=>{
                    if (typewriterTimeoutRef.current) {
                        clearTimeout(typewriterTimeoutRef.current);
                    }
                }
            })["LogoGenerator.useEffect"];
        }
    }["LogoGenerator.useEffect"], []);
    const scrollChatToBottom = ()=>{
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };
    // Initialize logo chat automatically
    const initializeLogoChat = async ()=>{
        try {
            const response = await fetch(`${API_URL}/logo`, {
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
                    content: data.response,
                    images: data.images || []
                };
                setMessages([
                    aiMessage
                ]);
                animateTypewriter(aiMessage);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error initializing logo chat:", error);
            const errorMessage = {
                type: 'ai',
                content: "Sorry, I'm having trouble connecting to the server. Please reload the page or try again later.",
                images: []
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
                fileName: "[project]/app/logo-generator/page.tsx",
                lineNumber: 182,
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
            const response = await fetch(`${API_URL}/logo`, {
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
                    images: data.images || []
                };
                // Add to the messages array
                setMessages((prev)=>[
                        ...prev,
                        aiMessage
                    ]);
                // Animate the typewriter effect
                animateTypewriter(aiMessage);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage = {
                type: 'ai',
                content: "Sorry, I'm having trouble connecting to the server. Please try again later.",
                images: []
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
    const handleDownloadLogo = (imageData, filename)=>{
        const link = document.createElement('a');
        link.href = imageData;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                                                    fileName: "[project]/app/logo-generator/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/logo-generator/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 41
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/app/logo-generator/page.tsx",
                                        lineNumber: 322,
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
                                                        fileName: "[project]/app/logo-generator/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/logo-generator/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 45
                                            }, this),
                                            message.images && message.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                                    children: message.images.map((img, imgIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gray-700 rounded-lg overflow-hidden relative group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "aspect-square relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: img.image,
                                                                            alt: img.description,
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/logo-generator/page.tsx",
                                                                            lineNumber: 352,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDownloadLogo(img.image, `${img.description.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`),
                                                                            className: "absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/logo-generator/page.tsx",
                                                                                lineNumber: 364,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/logo-generator/page.tsx",
                                                                            lineNumber: 357,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/logo-generator/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-300 truncate",
                                                                        children: img.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/logo-generator/page.tsx",
                                                                        lineNumber: 368,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/logo-generator/page.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, imgIndex, true, {
                                                            fileName: "[project]/app/logo-generator/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 57
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/logo-generator/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/logo-generator/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/logo-generator/page.tsx",
                                        lineNumber: 334,
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
                                        fileName: "[project]/app/logo-generator/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/logo-generator/page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/logo-generator/page.tsx",
                                lineNumber: 380,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/app/logo-generator/page.tsx",
                                lineNumber: 386,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/logo-generator/page.tsx",
                        lineNumber: 314,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: inputValue,
                            onChange: (e)=>setInputValue(e.target.value),
                            placeholder: "Describe your logo design ideas...",
                            className: "w-full py-4 px-6 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600",
                            disabled: isLoading
                        }, void 0, false, {
                            fileName: "[project]/app/logo-generator/page.tsx",
                            lineNumber: 391,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/logo-generator/page.tsx",
                        lineNumber: 390,
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
                                    fileName: "[project]/app/logo-generator/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$av$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$av$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Design Icon",
                                    width: 20,
                                    height: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/logo-generator/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "enture studio"
                                }, void 0, false, {
                                    fileName: "[project]/app/logo-generator/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/logo-generator/page.tsx",
                            lineNumber: 401,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/logo-generator/page.tsx",
                        lineNumber: 400,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/logo-generator/page.tsx",
                lineNumber: 312,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/logo-generator/page.tsx",
            lineNumber: 310,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/logo-generator/page.tsx",
        lineNumber: 308,
        columnNumber: 9
    }, this);
};
_s(LogoGenerator, "h/6S9s4e/PUWnnQSgFSGRGijoFQ=");
_c = LogoGenerator;
const __TURBOPACK__default__export__ = LogoGenerator;
var _c;
__turbopack_context__.k.register(_c, "LogoGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_80c5fba7._.js.map