"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const filters = [
  { id: "all", label: "All" },
  { id: "ecosystem", label: "Ecosystem mapping" },
  { id: "project", label: "Project management" },
  { id: "startups", label: "Startups" },
]

export function FilterTabs() {
  const [activeFilter, setActiveFilter] = useState("all")

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)

    // Dispatch custom event to communicate with TemplateGrid
    const event = new CustomEvent("filterChange", { detail: filterId })
    window.dispatchEvent(event)
  }

  return (
    <div className="mb-6 flex items-center justify-center overflow-x-auto">
      <div className="inline-flex rounded-full bg-gray-100 p-1">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeFilter === filter.id ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-gray-900",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}
