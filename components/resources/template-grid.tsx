"use client";

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Template data with specific grid positions
const templates = [
  // Row 1
  {
    id: 1,
    category: "ecosystem",
    gridArea: "span 1 / span 2 / auto / auto", // Large card (spans 2 columns)
    position: "left",
    image: "/assets/resources/Resources/ecosystemmapping.png",
    alt: "Ecosystem Mapping Template",
    color: "bg-sky-400",
    height:"400.21px",
    link:"/4?ecosystem-mapping"
  },
  {
    id: 2,
    category: "project",
    gridArea: "span 1 / span 1 / auto / auto", // Standard card
    position: "middle",
    image: "/assets/resources/Resources/sprint-executionaventure.png",
    alt: "Sprint Execution Template",
    // color: "bg-pink-200",
    height:"400.21px",

  link:"sprint-execution"

  },
  {
    id: 3,
    category: "project",
    gridArea: "span 1 / span 1 / auto / auto", // Standard card
    position: "right",
    image: "/assets/resources/Resources/toggl.png",
    alt: "Toggl Template",
    color: "bg-gray-900",
    height:"400.21px",
    link:"toggl-time-mastery"

  },

  // Row 2
  {
    id: 4,
    category: "project",
    gridArea: "span 1 / span 1 / auto / auto", // Standard card
    position: "left",
    image: "/assets/resources/Resources/clickup.png",
    alt: "Clickup for CEOs Template",
    color: "bg-gray-900",
    height:"400.21px",
    link:"clickup-for-ceos"

  },
  {
    id: 5,
    category: "ecosystem",
    gridArea: "span 1 / span 2 / auto / auto", // Large card (spans 2 columns)
    position: "middle",
    image: "/assets/resources/Resources/visionstatement.png",
    alt: "Vision Statement Template",
    color: "bg-amber-500",
    link:"/1?template=Vision%20Statement%20Template",
    height:"400.21px"

  },
  {
    id: 6,
    category: "project",
    gridArea: "span 1 / span 1 / auto / auto", // Standard card
    position: "right",
    image: "/assets/resources/Resources/reaaltimtrooprai.png",
    alt: "Real-Time Field Collaboration Template",
    color: "bg-emerald-000",
    height:"400.23px",
    link :"real-time-field"

  },

  // Row 3 - This is the row you're asking about
  {
    id: 7,
    category: "ecosystem",
    gridArea: "span 1 / span 3 / auto / auto", // Extra large card (spans 3 columns)
    position: "left",
    image: "/assets/resources/Resources/feature_prioritisationavs.png",
    alt: "Feature Prioritisation Matrix Template",
    color: "bg-sky-400",
    height:"500px",
    link:"/3?template=Feature%20Prioritization%20Matrix%20Template"


  },
  {
    id: 8,
    category: "startups",
    gridArea: "span 1 / span 1 / auto / auto", // Standard card
    position: "right",
    image: "/assets/resources/Resources/testyouridea.png",
    alt: "Team Building Template",
    color: "bg-pink-200",
    hasAvatar: true,
    height:"500px",
    link:'idea-validation'

  },

  // Row 4
  {
    id: 9,
    category: "project",
    gridArea: "span 1 / span 1 / auto / auto", // Standard card
    position: "left",
    image: "/assets/resources/Resources/slackforceo.png",
    alt: "Slack for CEOs Template",
    color: "bg-gray-900",
    height:"400.21px",
    link:'slack-for-ceos'


  },
  {
    id: 10,
    category: "startups",
    gridArea: "span 1 / span 1 / auto / auto", // Standard card
    position: "middle",
    image: "/assets/resources/Resources/planwithprecision.png",
    alt: "Plan with Precision Template",
    color: "bg-white-000",
    height:"400.23px",
    link:"plan-with-precision"

  },
  {
    id: 11,
    category: "ecosystem",
    gridArea: "span 1 / span 2 / auto / auto", // Large card (spans 2 columns)
    position: "right",
    image: "/assets/resources/Resources/knowyourproduct.png",
    alt: "Know Your Product Template",
    color: "bg-sky-600",
    height:"400.21px",
    link:"/2?template=Know%20Your%20Product%20Template"
    

  },
  
]

// export function TemplateGrids() {
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [filteredTemplates, setFilteredTemplates] = useState(templates)
//   const [gridLayout, setGridLayout] = useState<any[]>([])

//   // Listen for filter changes from the FilterTabs component
//   useEffect(() => {
//     const handleFilterChange = (event: CustomEvent) => {
//       setActiveFilter(event.detail)

//       if (event.detail === "all") {
//         setFilteredTemplates(templates)
//       } else {
//         setFilteredTemplates(templates.filter((template) => template.category === event.detail))
//       }
//     }

//     window.addEventListener("filterChange" as any, handleFilterChange)
//     return () => {
//       window.removeEventListener("filterChange" as any, handleFilterChange)
//     }
//   }, [])

//   // Organize templates into rows for proper layout
//   useEffect(() => {
//     // Group templates into rows based on their positions
//     const organizeTemplates = () => {
//       const rows: any[] = []
//       let currentRow: any[] = []
//       let currentRowWidth = 0

//       // Sort templates by ID to maintain order
//       const sortedTemplates = [...filteredTemplates].sort((a, b) => a.id - b.id)

//       sortedTemplates.forEach((template) => {
//         // Calculate width based on gridArea
//         const width = template.gridArea.includes("span 3") ? 3 : template.gridArea.includes("span 2") ? 2 : 1
   
//         // If adding this template would exceed row width, start a new row
//         if (currentRowWidth + width > 4) {
//           rows.push([...currentRow])
//           currentRow = [template]
//           currentRowWidth = width
//         } else {
//           currentRow.push(template)
//           currentRowWidth += width
//         }
//       })

//       // Add the last row if it has items
//       if (currentRow.length > 0) {
//         rows.push(currentRow)
//       }

//       setGridLayout(rows)
//     }

//     organizeTemplates()
//   }, [filteredTemplates])

//   return (
//     <div className="space-y-4">
//       {gridLayout.map((row, rowIndex) => (
//         <div key={`row-${rowIndex}`} className="grid grid-cols-4 gap-4">
//           {row.map((template: any) => {
//             // Calculate column span based on template properties
           
// //             let colSpan = "col-span-1"

// // if (activeFilter === "ecosystem" && template.id === 7) {
// //   colSpan = "col-span-2"
// // } else if (template.gridArea.includes("span 3")) {
// //   colSpan = "col-span-3"
// // } else if (template.gridArea.includes("span 2")) {
// //   colSpan = "col-span-2"
// // }

// let colSpan = "col-span-1";

// if (template.gridArea.includes("span 3")) {
//   colSpan = "col-span-3";
// } else if (template.gridArea.includes("span 2")) {
//   colSpan = "col-span-2";
// }

// // Override for specific filtered state
// if (
//   activeFilter === "ecosystem" &&
//   (template.id === 7 || template.id === 8)
// ) {
//   colSpan = "col-span-2";
// }



// let customHeight = template.height;

// if (
//   activeFilter === "ecosystem" ||activeFilter === "startups"&&
//   (template.category === "ecosystem" || template.category === "startups") &&
//   (template.id === 7 || template.id === 8)
// ) {
//   customHeight = "400.21px";
// }


//             return (

//               <div
//                 key={template.id}
//                 className={cn(
//                   "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:z-10",
//                   colSpan,
//                 )}
//               >
//               {/* <Link href={`/resources/${template.link}`} key={template.id}> */}

//                 <div className={cn("relative   w-full overflow-hidden", template.color)}    style={{ height: customHeight }}>
//                   <Image
//                     src={template.image.startsWith("/") ? template.image : `/${template.image}`}
//                     alt={template.alt}
//                     fill
//                     className="object-fit"
//                     priority
//                   />
                 
//                 </div>
//               {/* </Link> */}

//                 <div className="absolute inset-0 cursor-pointer bg-black opacity-0 transition-opacity group-hover:opacity-10"></div>

//                 {/* Clickable Link Layer */}
//     <Link
//       href={`/resources/${template.link}`}
//       className="absolute inset-0 z-20"
//       aria-label={`Go to ${template.alt}`}
//     >
//       <span className="sr-only">Go to {template.alt}</span>
//     </Link>
//               </div>
//             )
//           })}
//         </div>
//       ))}
//     </div>
//   )
// }


export function TemplateGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [gridLayout, setGridLayout] = useState<any[]>([]);

  useEffect(() => {
    const handleFilterChange = (event: CustomEvent) => {
      setActiveFilter(event.detail);
      if (event.detail === "all") {
        setFilteredTemplates(templates);
      } else {
        setFilteredTemplates(templates.filter((template) => template.category === event.detail));
      }
    };

    window.addEventListener("filterChange" as any, handleFilterChange);
    return () => window.removeEventListener("filterChange" as any, handleFilterChange);
  }, []);

  useEffect(() => {
    const organizeTemplates = () => {
      const rows: any[] = [];
      let currentRow: any[] = [];
      let currentRowWidth = 0;
      const sortedTemplates = [...filteredTemplates].sort((a, b) => a.id - b.id);

      sortedTemplates.forEach((template) => {
        const width = template.gridArea.includes("span 3")
          ? 3
          : template.gridArea.includes("span 2")
          ? 2
          : 1;

        if (currentRowWidth + width > 4) {
          rows.push([...currentRow]);
          currentRow = [template];
          currentRowWidth = width;
        } else {
          currentRow.push(template);
          currentRowWidth += width;
        }
      });

      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      setGridLayout(rows);
    };

    organizeTemplates();
  }, [filteredTemplates]);

  return (

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto [grid-auto-flow:row dense]">
  {gridLayout.flat().map((template: any) => {
    let colSpan = "col-span-1";
    if (template.gridArea.includes("span 3")) colSpan = "lg:col-span-3";
    else if (template.gridArea.includes("span 2")) colSpan = "lg:col-span-2";

    // Override for specific filtered state
    if (activeFilter === "ecosystem" && template.id === 7) {
      colSpan = "lg:col-span-2";
    }


    // // let customHeight = template.height;

// // if (
// //   activeFilter === "ecosystem" ||activeFilter === "startups"&&
// //   (template.category === "ecosystem" || template.category === "startups") &&
// //   (template.id === 7 || template.id === 8)
// // ) {
// //   customHeight = "400.21px";
// // }
// //             // Adjust height based on screen
// //             let heightClass = "h-60"; // default mobile
// //             if (template.height === "500px") heightClass = "h-60 sm:h-80 lg:h-[500px]";
// //             else heightClass = "h-60 sm:h-[400px]";
          
    const getHeightClass = (id: number, activeFilter: string) => {
      const isEcoOrStartup = activeFilter === "ecosystem" || activeFilter === "startups";
    
      if (isEcoOrStartup) {
        if (id === 7) return "h-52 sm:h-60 md:h-[400.23px] lg:h-[400.23px]";
        if (id === 8) return "h-96 sm:h-60 md:h-[400.23px] lg:h-[400.23px]";
      }
    
      if (id === 7) return "h-52 sm:h-60 md:h-[400.23px] lg:h-[460px]";
      if (id === 8) return "h-96 sm:h-60 md:h-[400.23px] lg:h-[460px]";
      if ([1, 5, 11].includes(id)) return "h-52 sm:h-60 md:h-[400.23px] lg:h-[400.23px]";
    
      return "h-[400.23px] sm:h-[400.23px] md:h-[400.23px] lg:h-[400.23px]";
    };

    return (
      <div
        key={template.id}
        className={cn(
          "group relative overflow-hidden rounded-lg transition-all duration-300",
          colSpan
        )}
      >
        <div
          className={cn(
            "relative w-full overflow-hidden",
            template.color,
            getHeightClass(template.id, activeFilter)
          )}
        >
          <Image
            src={
              template.image.startsWith("/")
                ? template.image
                : `/${template.image}`
            }
            alt={template.alt}
            fill
            className="object-fit transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        <div className="absolute inset-0 cursor-pointer bg-black opacity-0 transition-opacity group-hover:opacity-10"></div>

        <Link href={`/resources/${template.link}`} className="absolute inset-0 z-10" />
      </div>
    );
  })}
</div>

  );
}
