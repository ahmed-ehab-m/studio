import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    quote: "Ahmed is a brilliant developer who brings not only technical expertise but also a creative and problem-solving mindset to the table. His work on our Flutter app was exceptional.",
    name: "Jane Doe",
    title: "Project Manager, Tech Solutions Inc.",
    avatar: "JD",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait"
  },
  {
    quote: "Working with Ahmed was a pleasure. He is a great communicator, meets deadlines without fail, and the quality of his code is top-notch. Highly recommended.",
    name: "John Smith",
    title: "CEO, Innovate Co.",
    avatar: "JS",
    image: "https://placehold.co/100x100.png",
    aiHint: "man portrait"
  },
  {
    quote: "His attention to detail and dedication to creating a perfect user experience is what sets Ahmed apart. He transformed our app's UI and performance.",
    name: "Emily White",
    title: "Lead Designer, Creative Minds",
    avatar: "EW",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman professional"
  },
]

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">What Others Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feedback from colleagues and clients I've had the pleasure to work with.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-sm md:max-w-xl lg:max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full shadow-lg">
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <p className="text-muted-foreground flex-1">"{testimonial.quote}"</p>
                        <div className="mt-4 flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </AnimatedSection>
  )
}
