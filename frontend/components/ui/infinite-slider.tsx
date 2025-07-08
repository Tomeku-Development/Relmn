"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useState, useRef } from "react"

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
  speed?: number
  speedOnHover?: number
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  speed = 40,
  speedOnHover = 20,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={sliderRef}
        className="flex w-max animate-scroll"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
          animationDuration: `${isHovered && speedOnHover ? speedOnHover : speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
