import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center justify-center gap-12">
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                {portfolioData.about.bio}
              </p>
            </div>
            <Card className="mx-auto max-w-[700px] shadow-lg text-left">
              <CardHeader>
                <CardTitle>My Journey & Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {portfolioData.about.journey}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
