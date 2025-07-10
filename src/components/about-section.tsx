import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
                <Image
                    src="https://placehold.co/550x550.png"
                    width="550"
                    height="550"
                    alt="About Ahmed"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                    data-ai-hint="developer working"
                />
            </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">About Me</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                I am a dedicated Flutter developer with a passion for creating seamless and engaging user experiences. My journey in tech began with a curiosity for how things work, which led me to the world of mobile development.
              </p>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>My Journey & Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With several years of experience, I have honed my skills in building robust and scalable applications from scratch. I thrive in collaborative environments and am committed to writing clean, efficient, and maintainable code. My goal is to leverage technology to solve real-world problems and bring value to users and businesses alike.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
