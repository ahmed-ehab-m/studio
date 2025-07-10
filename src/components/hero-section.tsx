import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

export function HeroSection() {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <AnimatedSection id="hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Ahmed
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Expert Flutter Developer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              I build beautiful, high-performance mobile applications with Flutter, transforming ideas into reality.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact" onClick={scrollToContact}>Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/550x550.png"
              width="550"
              height="550"
              alt="Ahmed's Portrait"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
