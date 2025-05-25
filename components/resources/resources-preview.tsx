// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Download, Mail, ChevronLeft, ChevronRight, X } from "lucide-react"
// import type { ResourceData } from "../../types/resources"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"

// export function ResourcePreview({ resource }: { resource: ResourceData }) {
//   const [activeImageIndex, setActiveImageIndex] = useState(0)
//   const [showLightbox, setShowLightbox] = useState(false)

//   const nextImage = () => {
//     setActiveImageIndex((prev) => (prev === resource.previewImages.length - 1 ? 0 : prev + 1))
//   }

//   const prevImage = () => {
//     setActiveImageIndex((prev) => (prev === 0 ? resource.previewImages.length - 1 : prev - 1))
//   }

//   const openLightbox = () => {
//     setShowLightbox(true)
//   }

//   const closeLightbox = () => {
//     setShowLightbox(false)
//   }

//   return (
//     <div className="container mx-auto px-4 py-12 max-w-7xl mt-40">
//       {/* <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
//         <ChevronLeft className="w-4 h-4 mr-1" />
//         Back to Resources
//       </Link> */}

//       <div className="grid md:grid-cols-2 gap-8 mb-16">
//         {/* Left Column - Information */}
//         <div className="space-y-8 justify-center mt-15 ">
//           <div className="mb-3 ">
//             {/* <h1 className="text-4xl font-bold mb-2">{resource.title}</h1> */}
//             <h1
//   className="text-[32px] font-semibold leading-[32px] tracking-[0px] font-raleway mb-2"
// >
//   {resource.title}
// </h1>
//             {/* <p className="text-gray-700">by {resource.author}</p> */}
//             <p className="text-[16px] leading-[16px] tracking-[0px] font-raleway text-gray-700 mt-4">
//   <span className="font-normal">by </span>
//   <span className="font-semibold">{resource.author}</span>
// </p>

//           </div>

//           <div className="space-y-4">
//             <p className="flex items-center text-gray-600">
//               <span className="mr-2">File format:</span>
//               <span>
                
            
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M1.99999 0H10.4965L15 4.48601V15C15 15.5525 14.552 16 14 16H1.99999C1.44798 16 1 15.5525 1 15V0.99999C1 0.44751 1.44803 0 1.99999 0Z" fill="#E2574C"/>
// <path d="M14.9855 4.49998H11.5C10.948 4.49998 10.5 4.052 10.5 3.49999V0.00997925L14.9855 4.49998Z" fill="#B53629"/>
// <path d="M11.2489 7.58158C11.4164 7.58158 11.4984 7.43558 11.4984 7.29408C11.4984 7.14757 11.4129 7.00607 11.2489 7.00607H10.2949C10.1084 7.00607 10.0044 7.16055 10.0044 7.33107V9.67556C10.0044 9.88457 10.1234 10.0006 10.2844 10.0006C10.4444 10.0006 10.5639 9.88457 10.5639 9.67556V9.03208H11.1409C11.3199 9.03208 11.4094 8.88556 11.4094 8.74008C11.4094 8.5976 11.3199 8.45606 11.1409 8.45606H10.5639V7.58158H11.2489ZM8.02438 7.00607H7.32637C7.13686 7.00607 7.00235 7.13608 7.00235 7.32906V9.67758C7.00235 9.91706 7.19584 9.99208 7.33433 9.99208H8.06685C8.93383 9.99208 9.50633 9.42159 9.50633 8.54106C9.50587 7.61008 8.96689 7.00607 8.02438 7.00607ZM8.0579 9.41311H7.63238V7.58509H8.01589C8.59642 7.58509 8.84888 7.97461 8.84888 8.51209C8.84888 9.01511 8.60086 9.41311 8.0579 9.41311ZM5.50089 7.00607H4.8094C4.61389 7.00607 4.50488 7.13505 4.50488 7.33107V9.67556C4.50488 9.88457 4.62987 10.0006 4.79786 10.0006C4.96584 10.0006 5.09084 9.88457 5.09084 9.67556V8.99105H5.52433C6.05932 8.99105 6.50083 8.61204 6.50083 8.00255C6.50088 7.40609 6.07489 7.00607 5.50089 7.00607ZM5.4894 8.44111H5.09089V7.55659H5.4894C5.73541 7.55659 5.8919 7.74858 5.8919 7.99908C5.89139 8.24912 5.73541 8.44111 5.4894 8.44111Z" fill="white"/>
// </svg> 
// </span> <span className="font-raleway font-semibold text-[14px] leading-[14px] tracking-[0px] align-middle  text-[#636363]  px-2 py-1 rounded">
//   pdf
//               •  {resource.downloads} downloads

// </span>

//             </p>
//           </div>

//           <div className="flex space-x-4">

//              <button
//           // onClick={handleDownload}
//           className="flex items-center justify-center gap-2 rounded-full bg-gray-900 w-full md:w-[140px] px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-gray-800 transition-colors"
//         >
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12 16L12 8"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M9 13L12 16L15 13"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <span className="text-sm font-medium text-white">Download</span>
//         </button>
//             {/* <Button className="flex items-center bg-black text-white px-6 py-3 rounded-full">
//               <Download className="w-5 h-5 mr-2" />
//               Download
//             </Button> */}
//             <button  className="flex items-center border border-gray-900  px-6 rounded-full">
//               Let us help you <Mail className="w-5 h-5 ml-2" />
//             </button>
//             {/* <button className="flex items-center justify-center gap-2 rounded-full bg-gray-900 w-full md:w-[140px] px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-gray-800 transition-colors">
//             <Download className="w-5 h-5 mr-2" />
//             Download
//             </button> */}
//           </div>

//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold">Overview</h2>
//             <p className="text-gray-700">{resource.shortDescription}</p>
//             <p className="text-gray-700">{resource.longDescription}</p>
//           </div>
//         </div>

//         {/* Right Column - Preview */}
//         <div className="flex space-x-4 ml-45">
//           <div className="flex-1 ">
//             <div className={cn("rounded-[15.25px] overflow-hidden ", resource.bgColor)}>
              

//                 <div className="relative w-[325px] h-[460.42px] cursor-pointer" onClick={openLightbox}>
//                   <Image
//                     src={resource.previewImages[activeImageIndex] || "/placeholder.svg"}
//                     alt={resource.title}
//                     layout="fill" 
//       className="object-cover rounded-[15.25px]"
//                   />
//                 </div>
              
//             </div>
//           </div>

//           {/* <div className="w-20 space-y-2">
//             {resource.previewImages.map((image, index) => (
//               <div
//                 key={index}
//                 className={`rounded-lg h-24 relative cursor-pointer ${
//                   index === activeImageIndex ? "ring-2 ring-blue-500" : ""
//                 }`}
//                 onClick={() => setActiveImageIndex(index)}
//               >
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`Preview ${index + 1}`}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div> */}




// <div className="w-[76.93px] space-y-2">
//   {resource.previewImages.map((image, index) => (
//     <div
//       key={index}
//       className={`relative cursor-pointer h-[108.99px] w-full rounded-[3.61px] border-[1.04px] ${
//         index === activeImageIndex ? "ring-2 ring-blue-500" : ""
//       }`}
//       onClick={() => setActiveImageIndex(index)}
//     >
//       <Image
//         src={image || "/placeholder.svg"}
//         alt={`Preview ${index + 1}`}
//         fill
//         className="object-cover rounded-[3.61px]"
//       />
//     </div>
//   ))}
// </div>

//         </div>
//       </div>

//       {/* Lightbox */}
//       {showLightbox && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
//           <button className="absolute top-4 right-4 text-white" onClick={closeLightbox}>
//             <X className="w-8 h-8" />
//           </button>

//           <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={prevImage}>
//             <ChevronLeft className="w-12 h-12" />
//           </button>

//           <div className="relative w-full max-w-4xl h-[80vh]">
//             <Image
//               src={resource.previewImages[activeImageIndex] || "/placeholder.svg"}
//               alt={`Preview ${activeImageIndex + 1}`}
//               fill
//               className="object-contain"
//             />
//           </div>

//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={nextImage}>
//             <ChevronRight className="w-12 h-12" />
//           </button>

//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {resource.previewImages.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full ${index === activeImageIndex ? "bg-white" : "bg-gray-500"}`}
//                 onClick={() => setActiveImageIndex(index)}
//               />
//             ))}
//           </div>
//         </div>
//       )}



//       {/* similar resouces  */}
// <div className="mt-16">
//   <div className="flex items-center mb-8">
//     <div className="h-px bg-gray-300 flex-1"></div>
//     <h2 className="px-4 text-lg font-medium">Explore similar resources</h2>
//     <div className="h-px bg-gray-300 flex-1"></div>
//   </div>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
//     {resource.relatedResources.map((related, index) => (
//       <Link key={index} href={related.href} className="block">
//         <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
//           <Image
//             src={related.imageUrl || "/placeholder.svg"}
//             alt={related.title.replace(/<[^>]*>/g, "")}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 25vw"
//           />
//         </div>
//       </Link>
//     ))}
//   </div>
// </div>
//       {/* Similar Resources Section */}
//       {/* <div className="mt-16">
//         <div className="flex items-center mb-8">
//           <div className="h-px bg-gray-300 flex-1"></div>
//           <h2 className="px-4 text-lg font-medium">Explore similar resources</h2>
//           <div className="h-px bg-gray-300 flex-1"></div>
//         </div> */}

     
// {/* 
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
//   {resource.relatedResources.map((related, index) => (
//     <Link key={index} href={related.href} className="block">
//       <div className="relative w-[225.63px] h-[319.65px] rounded-[10.58px] overflow-hidden hover:shadow-lg transition-shadow">
//         <Image
//           src={related.imageUrl || "/placeholder.svg"}
//           alt={related.title.replace(/<[^>]*>/g, "")}
//           fill
//           className="object-cover"
//         />
//       </div>
//     </Link>
//   ))}
// </div> */}

// {/* <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 px-4">
//   {resource.relatedResources.map((related, index) => (
//     <Link key={index} href={related.href} className="block">
//       <div className="relative w-[225.63px] h-[319.65px] rounded-[10.58px] overflow-hidden hover:shadow-lg transition-shadow">
//         <Image
//           src={related.imageUrl || "/placeholder.svg"}
//           alt={related.title.replace(/<[^>]*>/g, "")}
//           fill
//           className="object-cover"

//           sizes="(max-width: 768px) 100vw, 25vw"

//         />
//       </div>
//     </Link>
//   ))}
// </div> */}

//       {/* </div> */}
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Mail, X } from "lucide-react"
import type { ResourceData } from "../../types/resources"
import { cn } from "@/lib/utils"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"


export function ResourcePreview({ resource }: { resource: ResourceData }) {
  const router = useRouter();

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const handleClick = () => {
    router.push("/contact-us");
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === resource.previewImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? resource.previewImages.length - 1 : prev - 1))
  }

  const openLightbox = () => setShowLightbox(true)
  const closeLightbox = () => setShowLightbox(false)
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resource.downloadLink
  
    const fileName = resource.downloadLink.split('/').pop() || 'file.pdf'
    link.download = fileName
  
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  

  return (
    <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-2 mt-16 sm:mt-40">
       {/* <Link href="/resources" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Resources
      </Link> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Left Column - Information */}
        <div className="space-y-8 md:justify-center md:pt-10">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold font-raleway ">{resource.title}</h1>
            <p className="text-sm sm:text-base font-raleway text-gray-700 mt-2">
              <span className="font-normal">by </span>
              <span className="font-semibold">{resource.author}</span>
            </p>
         
            <p className="flex items-center text-gray-600 text-sm mt-3">
              <span className="mr-2">File format:</span>
              <span className="flex items-center gap-1 text-sm font-raleway text-[#636363]">
        
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">.
                <path d="M1.99999 0H10.4965L15 4.48601V15C15 15.5525 14.552 16 14 16H1.99999C1.44798 16 1 15.5525 1 15V0.99999C1 0.44751 1.44803 0 1.99999 0Z" fill="#E2574C"/>
<path d="M14.9855 4.49998H11.5C10.948 4.49998 10.5 4.052 10.5 3.49999V0.00997925L14.9855 4.49998Z" fill="#B53629"/>
 <path d="M11.2489 7.58158C11.4164 7.58158 11.4984 7.43558 11.4984 7.29408C11.4984 7.14757 11.4129 7.00607 11.2489 7.00607H10.2949C10.1084 7.00607 10.0044 7.16055 10.0044 7.33107V9.67556C10.0044 9.88457 10.1234 10.0006 10.2844 10.0006C10.4444 10.0006 10.5639 9.88457 10.5639 9.67556V9.03208H11.1409C11.3199 9.03208 11.4094 8.88556 11.4094 8.74008C11.4094 8.5976 11.3199 8.45606 11.1409 8.45606H10.5639V7.58158H11.2489ZM8.02438 7.00607H7.32637C7.13686 7.00607 7.00235 7.13608 7.00235 7.32906V9.67758C7.00235 9.91706 7.19584 9.99208 7.33433 9.99208H8.06685C8.93383 9.99208 9.50633 9.42159 9.50633 8.54106C9.50587 7.61008 8.96689 7.00607 8.02438 7.00607ZM8.0579 9.41311H7.63238V7.58509H8.01589C8.59642 7.58509 8.84888 7.97461 8.84888 8.51209C8.84888 9.01511 8.60086 9.41311 8.0579 9.41311ZM5.50089 7.00607H4.8094C4.61389 7.00607 4.50488 7.13505 4.50488 7.33107V9.67556C4.50488 9.88457 4.62987 10.0006 4.79786 10.0006C4.96584 10.0006 5.09084 9.88457 5.09084 9.67556V8.99105H5.52433C6.05932 8.99105 6.50083 8.61204 6.50083 8.00255C6.50088 7.40609 6.07489 7.00607 5.50089 7.00607ZM5.4894 8.44111H5.09089V7.55659H5.4894C5.73541 7.55659 5.8919 7.74858 5.8919 7.99908C5.89139 8.24912 5.73541 8.44111 5.4894 8.44111Z" fill="white"/></svg>
                <span className="font-semibold">pdf • {resource.downloads} downloads</span>
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
          onClick={handleDownload}
            
            className="flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors w-full sm:w-auto cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              
              <path
              d="M12 16L12 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13L12 16L15 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
</svg>

              <span>Download</span>
            </button>

            <button onClick={handleClick} className="flex items-center justify-center gap-2 border border-gray-900 px-6 py-2 rounded-full text-sm text-gray-900 w-full sm:w-auto cursor-pointer hover:bg-gray-20 hover:text-gray-900 transition-colors" >
              Let us help you <Mail className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4 text-sm sm:text-base">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="text-gray-700">{resource.shortDescription}</p>
            <p className="text-gray-700">{resource.longDescription}</p>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="flex gap-4">
          <div className="flex-1">
            <div className={cn("rounded-xl overflow-hidden", resource.bgColor)}>
              <div
                className="relative w-full aspect-[3/4] cursor-pointer"
                onClick={openLightbox}
              >
                <Image
                  src={resource.previewImages[activeImageIndex] || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col gap-2 w-[76px]">
            {resource.previewImages.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer h-[108px] rounded-md border ${
                  index === activeImageIndex ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button className="absolute top-4 right-4 text-white" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>

          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white" onClick={prevImage}>
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={resource.previewImages[activeImageIndex] || "/placeholder.svg"}
              alt={`Preview ${activeImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white" onClick={nextImage}>
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {resource.previewImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeImageIndex ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Similar Resources */}
      <div className="mt-16 mb-20">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-300 flex-1" />
          <h2 className="px-4 text-lg font-medium">Explore similar resources</h2>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resource.relatedResources.map((related, index) => (
            <Link key={index} href={related.href} className="block">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={related.imageUrl || "/placeholder.svg"}
                  alt={related.title.replace(/<[^>]*>/g, "")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
