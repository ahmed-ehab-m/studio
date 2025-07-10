"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"

const skills = portfolioData.skills;

export function SkillsShowcase() {
  return (
    <AnimatedSection id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the technologies and tools I use to bring projects to life.
            </p>
          </div>
          <Tabs defaultValue="frontend" className="w-full max-w-3xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Frontend Technologies</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="backend">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Backend & Databases</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tools">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Development Tools</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AnimatedSection>
  )
}
