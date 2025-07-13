"use client"

import { cn } from "@/lib/utils"

interface MobileFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileFrame({ children, className }: MobileFrameProps) {
  return (
    <div className={cn("relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[10px] border-black bg-black shadow-xl", className)}>
      <div className="absolute left-1/2 top-0 h-4 w-28 -translate-x-1/2 rounded-b-lg bg-black"></div>
      <div className="absolute -left-2 top-[100px] h-8 w-1 rounded-l-lg bg-black"></div>
      <div className="absolute -left-2 top-[150px] h-8 w-1 rounded-l-lg bg-black"></div>
      <div className="absolute -right-2 top-[120px] h-16 w-1 rounded-r-lg bg-black"></div>
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-background">
        <div className="h-full w-full p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
