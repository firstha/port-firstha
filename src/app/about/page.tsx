// src/app/about/page.tsx
import { PageHeader } from "@/components/layout/PageHeader";
import { AboutContent } from "@/components/sections/AboutContent";
import { SkillsSection } from "@/components/sections/SkillsSection";

export const metadata = {
  title: "About",
  description: "Tentang Firstha Noventia — Full Stack Web Developer",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <PageHeader
          eyebrow="About me"
          title="Kenalan dulu, yuk"
          description="Cerita singkat tentang siapa saya, apa yang saya kerjakan, dan skill yang saya kuasai."
        />
        <AboutContent />
      </section>

      <SkillsSection />
    </main>
  );
}