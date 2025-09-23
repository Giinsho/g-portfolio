"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  title: string
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].id)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-2 sm:px-6 py-2 rounded-full transition-colors ",
                "text-foreground/80 hover:text-primary text-secondary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.title}</span>
              <span className="md:hidden">
                {/* Render icon only if it exists */}
                {Icon && (
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                )}
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0  sm:w-full    bg-secondary/5 rounded-full "
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 sm:w-10 w-6 h-1 bg-secondary rounded-full">
                    <div className="absolute w-12 h-6 bg-secondary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-secondary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-secondary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div >
  )
}
