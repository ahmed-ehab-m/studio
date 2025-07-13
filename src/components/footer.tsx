"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Mountain } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { WhatsAppIcon } from "./icons/whatsapp-icon"
import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="w-full">
      <div className="border-t bg-background py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
