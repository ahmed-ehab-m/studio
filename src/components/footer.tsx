"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Mountain } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { WhatsAppIcon } from "./icons/whatsapp-icon"

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-secondary/20">
      <AnimatedSection className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Get in Touch</h2>
              <p className="max-w-[500px] text-muted-foreground">
                I'm currently open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                 <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={`mailto:${portfolioData.contact.email}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Email Me
                    </a>
                </Button>
                 <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90">
                    <a href={`https://wa.me/${portfolioData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                       <WhatsAppIcon className="mr-2 h-5 w-5" />
                        WhatsApp
                    </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <a href={portfolioData.contact.cv} download>
                        <Download className="mr-2 h-5 w-5" />
                        Download CV
                    </a>
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-start space-y-4 lg:items-center lg:justify-end">
              <div className="flex items-center gap-4">
                {portfolioData.contact.socials.map((social) => (
                    <Link key={social.name} href={social.url} aria-label={social.name} className="text-muted-foreground transition-colors hover:text-primary" target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-8 w-8" />
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
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
