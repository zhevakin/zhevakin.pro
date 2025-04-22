import HeroSection from '@/components/sections/HeroSection';
import SocialNetworksSection from '@/components/sections/SocialNetworksSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <HeroSection />
        <SocialNetworksSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
