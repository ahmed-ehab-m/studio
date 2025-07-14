"use client"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import type { LucideIcon } from "lucide-react"

const skillsGroups = portfolioData.skills;

export function SkillsShowcase() {
  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the technologies and tools I use to bring projects to life.
            </p>
          </div>
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {skillsGroups.flatMap((group) => group.skills).map((skill) => {
                  const Icon = skill.icon as LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
                  return (
                    <div key={skill.name} className="flex flex-col items-center justify-center text-center p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors aspect-square">
                      <Icon className="h-6 w-6 text-secondary mb-2" />
                      <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
