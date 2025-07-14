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
          <div className="w-full max-w-5xl space-y-12">
            {skillsGroups.map((group) => (
              <div key={group.category} className="flex flex-col items-start gap-4 md:flex-row md:items-start md:gap-8">
                <h3 className="w-full shrink-0 text-lg font-semibold text-muted-foreground md:w-40 md:text-left">
                  {group.category}
                </h3>
                <div className="flex flex-wrap justify-start gap-3">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon as LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
                    return (
                      <div key={skill.name} className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-muted/50 p-2 text-center transition-colors hover:bg-muted">
                        <Icon className="h-8 w-8 text-secondary mb-2" />
                        <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
