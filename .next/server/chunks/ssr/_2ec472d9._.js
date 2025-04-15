module.exports = {

"[project]/app/our-process/partials/effect-panorama.esm.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/effect-panorama.esm.ts
__turbopack_context__.s({
    "default": (()=>EffectPanorama)
});
"use client";
function EffectPanorama({ swiper, extendParams, on }) {
    extendParams({
        panoramaEffect: {
            depth: 200,
            rotate: 30
        }
    });
    on("beforeInit", ()=>{
        if (swiper.params.effect !== "panorama") return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}panorama`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
            watchSlidesProgress: true
        };
        Object.assign(swiper.params, overwriteParams);
        Object.assign(swiper.originalParams, overwriteParams);
    });
    on("progress", ()=>{
        if (swiper.params.effect !== "panorama") return;
        const sizesGrid = swiper.slidesSizesGrid;
        const { depth = 200, rotate = 30 } = swiper.params.panoramaEffect;
        const angleRad = rotate * Math.PI / 180;
        const halfAngleRad = angleRad / 2;
        const angleModifier = 1 / (180 / rotate);
        for(let i = 0; i < swiper.slides.length; i += 1){
            const slideEl = swiper.slides[i];
            const slideProgress = slideEl.progress;
            const slideSize = sizesGrid[i];
            const progressModifier = swiper.params.centeredSlides ? 0 : (swiper.params.slidesPerView - 1) * 0.5;
            const modifiedProgress = slideProgress + progressModifier;
            const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI);
            const translateX = `${modifiedProgress * (slideSize / 3) * angleCos}px`;
            const rotateY = modifiedProgress * rotate;
            const radius = slideSize * 0.5 / Math.sin(halfAngleRad);
            const translateZ = `${radius * angleCos - depth}px`;
            slideEl.style.transform = swiper.params.direction === "horizontal" ? `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)` : `translateY(${translateX}) translateZ(${translateZ}) rotateX(${-rotateY}deg)`;
        }
    });
    on("setTransition", (s, duration)=>{
        if (swiper.params.effect !== "panorama") return;
        swiper.slides.forEach((slideEl)=>{
            slideEl.style.transitionDuration = `${duration}ms`;
        });
    });
}
}}),
"[project]/app/our-process/partials/PanoramaSwiper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/MySwiper.tsx
__turbopack_context__.s({
    "default": (()=>MySwiper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__A11y$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/a11y.mjs [app-ssr] (ecmascript) <export default as A11y>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$our$2d$process$2f$partials$2f$effect$2d$panorama$2e$esm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/our-process/partials/effect-panorama.esm.ts [app-ssr] (ecmascript)");
"use client"; // This is needed because we're using client-side features
;
;
;
;
;
;
;
;
;
;
;
function MySwiper() {
    const swiperParameters = {
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__A11y$3e$__["A11y"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$our$2d$process$2f$partials$2f$effect$2d$panorama$2e$esm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ],
        centeredSlides: true,
        loop: true,
        effect: "panorama",
        speed: 600,
        pagination: {
            enabled: true
        },
        autoplay: {
            enabled: true
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                onBeforeInit (swiper) {
                    swiper.params.panoramaEffect = {
                        depth: 150,
                        rotate: 30
                    };
                }
            },
            1024: {
                slidesPerView: 4,
                centeredSlides: false,
                pagination: {
                    enabled: false
                },
                simulateTouch: false
            },
            1280: {
                slidesPerView: 4,
                centeredSlides: true,
                pagination: {
                    enabled: true
                },
                simulateTouch: true,
                onBeforeInit (swiper) {
                    swiper.params.panoramaEffect = {
                        depth: 250,
                        rotate: 25
                    };
                }
            }
        },
        onBeforeInit (swiper) {
            swiper.params.panoramaEffect = {
                rotate: 45
            };
        }
    };
    const slides = [
        "/assets/rectangle-4224.png",
        "/assets/build2.png",
        "/assets/rectangle-4224-2.png",
        "/assets/rectangle-4224-3.png",
        "/assets/rectangle-4224-4.png",
        "/assets/rectangle-4224-5.png",
        "/assets/rectangle-4224-6.png",
        "/assets/rectangle-4224-7.png",
        "/assets/rectangle-4224-8.png",
        "/assets/rectangle-4224-9.png"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
        ...swiperParameters,
        children: slides.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                className: "swiper-slide-4ffe swiper2 px-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "swiper-slide-bg-image swiper-slide-bg-image-c61b w-full",
                        "data-swiper-parallax": "10%",
                        loading: "lazy",
                        src: src,
                        alt: `Nature image ${index + 1}`
                    }, void 0, false, {
                        fileName: "[project]/app/our-process/partials/PanoramaSwiper.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-lazy-preloader"
                    }, void 0, false, {
                        fileName: "[project]/app/our-process/partials/PanoramaSwiper.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-slide-content swiper-slide-content-2f5e"
                    }, void 0, false, {
                        fileName: "[project]/app/our-process/partials/PanoramaSwiper.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/app/our-process/partials/PanoramaSwiper.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/our-process/partials/PanoramaSwiper.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/our-process/partials/PanoramaSwiper.tsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/our-process/partials/PanoramaSwiper.tsx [app-ssr] (ecmascript)"));
}}),
"[project]/node_modules/swiper/modules/a11y.mjs [app-ssr] (ecmascript) <export default as A11y>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A11y": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/a11y.mjs [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_2ec472d9._.js.map