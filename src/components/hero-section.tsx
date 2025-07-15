"use client"

import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineItemProps {
  item: {
    title: string;
    period: string;
    description: string;
  };
  icon: LucideIcon;
  side: "left" | "right";
}

const TimelineItem = ({ item, icon: Icon, side }: TimelineItemProps) => (
  <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-x-6 relative">
    {side === 'left' ? (
      <Card className="shadow-lg transition-transform duration-300 hover:scale-[1.02] col-start-1 text-right">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-secondary">{item.title}</CardTitle>
          <CardDescription className="text-sm text-accent font-semibold pt-1">{item.period}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    ) : <div className="col-start-1"></div>}

    <div className="col-start-2 flex h-full w-full items-center justify-center">
      <div className="absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
        <Icon className="h-4 w-4 text-primary-foreground" />
      </div>
    </div>

    {side === 'right' ? (
      <Card className="shadow-lg transition-transform duration-300 hover:scale-[1.02] col-start-3 text-left">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-secondary">{item.title}</CardTitle>
          <CardDescription className="text-sm text-accent font-semibold pt-1">{item.period}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    ) : <div className="col-start-3"></div>}
  </div>
);

export function HeroSection() {
  const { experience, education } = portfolioData.about;

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
                <p className="mt-2 text-muted-foreground">My education and professional experience timeline.</p>
              </div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-primary/20" />
              <div className="space-y-12">
                {education.map((item, index) => (
                  <TimelineItem key={`edu-${index}`} item={item} icon={GraduationCap} side="left" />
                ))}
                {experience.map((item, index) => (
                  <TimelineItem key={`exp-${index}`} item={item} icon={Briefcase} side="right" />
                ))}
              </div>
            </div>
          </div>
      </div>
    </AnimatedSection>
  )
}
