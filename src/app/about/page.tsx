import { PageHeader } from "@/components/layout/PageHeader";
import { AboutContent } from "@/components/sections/AboutContent";
import { SkillsSection } from "@/components/sections/SkillsSection";

export const metadata = {
  title: "Tentang Saya",
  description:
    "Tentang Firstha Noventia Sari, mahasiswa Informatika dengan latar belakang Rekayasa Perangkat Lunak dan minat di bidang teknologi.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <PageHeader
          eyebrow="Tentang Saya"
          title="Kenalan lebih dekat, yuks!"
          description="Perjalanan saya dari Rekayasa Perangkat Lunak hingga menjadi mahasiswa Informatika yang terus belajar dan berkembang di bidang teknologi."
        />
        <AboutContent />
      </section>

      <SkillsSection />
    </main>
  );
}