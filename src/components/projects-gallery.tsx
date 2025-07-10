import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const projects = [
  {
    title: "E-Commerce App",
    description: "A full-featured e-commerce mobile application built with Flutter, providing a seamless shopping experience.",
    tech: ["Flutter", "Firebase", "Stripe API"],
    category: "Mobile",
    image: "https://placehold.co/600x400.png",
    github: "#",
    live: "#",
    aiHint: "e-commerce app"
  },
  {
    title: "Task Management Web App",
    description: "A responsive web application for task management and team collaboration, built with Flutter Web.",
    tech: ["Flutter Web", "Dart", "Firebase"],
    category: "Web",
    image: "https://placehold.co/600x400.png",
    github: "#",
    live: "#",
    aiHint: "task management"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app to track workouts, set fitness goals, and monitor progress with detailed analytics.",
    tech: ["Flutter", "Supabase", "Google Fit API"],
    category: "Mobile",
    image: "https://placehold.co/600x400.png",
    github: "#",
    live: "#",
    aiHint: "fitness tracker"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills, developed using Flutter Web for a smooth, app-like feel.",
    tech: ["Flutter Web", "Dart"],
    category: "Web",
    image: "https://placehold.co/600x400.png",
    github: "#",
    live: "#",
    aiHint: "portfolio website"
  },
]

export function ProjectsGallery() {
  // In a real app, you'd use state to manage the filter.
  // For this static version, we'll just display all projects.
  return (
    <AnimatedSection id="projects" className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud to have worked on.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <CardHeader className="p-0">
                 <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <div className="flex flex-1 flex-col p-6">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="mt-2 flex-1">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
              <CardFooter className="flex justify-end gap-2 bg-muted/50 p-4">
                <Button asChild variant="ghost" size="sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button asChild variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
