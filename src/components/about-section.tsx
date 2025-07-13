"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { Briefcase } from "lucide-react"
import { cn } from "@/lib/utils";

export function AboutSection() {
  const journey = portfolioData.about.journey

  return (
    <AnimatedSection id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center justify-center gap-12">
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {portfolioData.about.bio}
              </p>
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto">
             <h3 className="font-headline text-2xl font-bold tracking-tighter text-primary sm:text-3xl text-center mb-12">My Journey & Experience</h3>
            <div className="relative">
              {/* Vertical line in the center */}
              <div className="absolute left-1/2 h-full w-0.5 bg-secondary -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {journey.map((item, index) => (
                  <div key={index} className={cn(
                    "relative flex items-center w-full",
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  )}>
                    {/* Dot on the timeline */}
                    <div className="absolute left-1/2 top-1 h-5 w-5 rounded-full bg-primary border-4 border-background flex items-center justify-center -translate-x-1/2 z-10">
                       <Briefcase className="h-3 w-3 text-primary-foreground" />
                    </div>

                    {/* Card */}
                    <div className={cn(
                      "w-[calc(50%-2.5rem)]"
                    )}>
                      <Card className="shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                         <CardHeader>
                            <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                            <CardDescription className="text-sm text-accent font-semibold pt-1">{item.period}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
