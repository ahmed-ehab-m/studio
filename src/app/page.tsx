import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { SkillsShowcase } from '@/components/skills-showcase';
import { ProjectsGallery } from '@/components/projects-gallery';
import { Footer } from '@/components/footer';
import { CertificatesSection } from '@/components/certificates-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsShowcase />
        <ProjectsGallery />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  );
}
