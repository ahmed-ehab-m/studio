"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar, GraduationCap } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { portfolioData } from "@/lib/data"

const certificates = portfolioData.certificates;

export function CertificatesSection() {
  return (
    <AnimatedSection id="certificates" className="bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Certificates & Courses</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My commitment to continuous learning is demonstrated through these certifications.
            </p>
          </div>
        </div>
        <div className="relative mt-12 pl-6">
          {/* Vertical line */}
          <div className="absolute left-[30px] h-full w-0.5 bg-border -translate-x-1/2"></div>

          <div className="space-y-12">
            {certificates.map((certificate, index) => (
              <div key={index} className="relative">
                {/* Dot on the timeline */}
                <div className="absolute left-[30px] top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-primary border-4 border-secondary/20 flex items-center justify-center">
                   <GraduationCap className="h-3 w-3 text-primary-foreground" />
                </div>

                {/* Card */}
                <div className="ml-16">
                  <Card className="shadow-lg transition-transform duration-300 hover:scale-105">
                     <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                        <Image
                          src={certificate.logo}
                          alt={`${certificate.issuer} logo`}
                          width={48}
                          height={48}
                          className="rounded-lg border"
                          data-ai-hint={certificate.aiHint}
                        />
                        <div className="flex-1 space-y-1">
                          <CardTitle className="text-lg font-bold">{certificate.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">Issued by {certificate.issuer}</p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
