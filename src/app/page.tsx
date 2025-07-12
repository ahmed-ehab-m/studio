import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsShowcase } from '@/components/skills-showcase';
import { ProjectsGallery } from '@/components/projects-gallery';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsShowcase />
        <ProjectsGallery />
      </main>
      <Footer />
    </div>
  );
}
