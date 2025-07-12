"use client"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
          <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillsGroups.map((group, groupIndex) => (
              <Card key={groupIndex} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-primary">
                    <group.icon className="h-6 w-6" />
                    <span>{group.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-start gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
