"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Award } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"

const certificates = portfolioData.certificates;

export function CertificatesSection() {
  return (
    <AnimatedSection id="certificates">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Certificates & Courses</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My commitment to continuous learning is demonstrated through these certifications.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {certificates.map((certificate, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{certificate.title}</CardTitle>
                <CardDescription className="pt-2">
                  <Badge variant="secondary" className="gap-2">
                    <Award className="h-4 w-4" />
                    Issued by {certificate.issuer}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <div className="flex flex-1 flex-col justify-end">
                <CardFooter className="flex justify-end gap-2 bg-muted/50 p-4">
                  <Button asChild variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={certificate.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
