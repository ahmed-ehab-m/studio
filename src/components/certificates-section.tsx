"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"

const certificateCategories = portfolioData.certificates;

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
        <div className="mt-12 space-y-12">
          {Object.entries(certificateCategories).map(([category, certificates]) => (
            <div key={category}>
              <h3 className="font-headline text-2xl font-bold tracking-tighter text-secondary sm:text-3xl text-center mb-8">{category}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {certificates.map((certificate, index) => (
                  <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4 p-4">
                      <div className="flex-1 space-y-1">
                        <CardTitle className="text-lg font-bold">{certificate.title}</CardTitle>
                        <p className="text-sm text-secondary">Issued by {certificate.issuer}</p>
                        <div className="flex items-center gap-2 pt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{certificate.date}</span>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="icon" className="shrink-0">
                        <Link href={certificate.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                          <span className="sr-only">View Certificate</span>
                        </Link>
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
