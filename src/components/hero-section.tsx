"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { Download, Briefcase, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineItemProps {
  item: {
    title: string;
    period: string;
    description: string;
  };
  icon: LucideIcon;
}

const TimelineItem = ({ item, icon: Icon }: TimelineItemProps) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/20 rounded-full">{item.period}</time>
      <div className="text-xl font-bold text-primary">{item.title}</div>
    </div>
    <div className="text-muted-foreground">{item.description}</div>
  </div>
);


export function HeroSection() {
  const { experience } = portfolioData.about;

  return (
    <AnimatedSection id="hero" className="pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex justify-center">
            <Image
              src="/my_images/personalmage.jpeg"
              width="300"
              height="300"
              alt={`${portfolioData.name}'s Portrait`}
              className="aspect-square overflow-hidden rounded-full object-cover shadow-lg"
              data-ai-hint="professional portrait"
              priority
              quality={100}
              unoptimized
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-lg font-medium text-muted-foreground sm:text-xl">
                Hi, I'm
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {portfolioData.name}
              </h1>
            </div>
            <h2 className="font-headline text-10xl font-bold tracking-tighter text-secondary sm:text-6xl md:text-7xl">
              {portfolioData.title}
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground md:text-lg/relaxed">
              {portfolioData.about.bio}
            </p>
            <div className="flex flex-col items-center gap-4 pt-4">
              <Button asChild variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={portfolioData.contact.cv} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-4 pt-4">
                {portfolioData.contact.socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      "text-muted-foreground transition-colors",
                      social.hoverColor
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-8 w-8" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="mt-24 w-full">
            <div className="relative mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h3 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">My Journey</h3>
                <p className="mt-2 text-muted-foreground">My professional experience timeline.</p>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-20 md:before:mx-auto md:before:left-1/2 md:before:-translate-x-1/2">
                {experience.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary group-odd:order-1 group-odd:group-[]:ml-[14.5rem] group-even:group-[]:mr-[14.5rem] shrink-0">
                       <Briefcase className="h-5 w-5" />
                    </div>
                    <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-secondary">{item.title}</CardTitle>
                        <CardDescription className="text-sm text-accent font-semibold pt-1">{item.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </AnimatedSection>
  )
}
