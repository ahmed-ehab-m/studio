"use client"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"

const allSkills = [...portfolioData.skills.frontend, ...portfolioData.skills.backend, ...portfolioData.skills.tools];

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
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {allSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm shadow-md">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
