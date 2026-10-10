// src/app/projects/page.tsx
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata = {
  title: "Projects",
  description: "Portfolio project Firstha Noventia",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <PageHeader
          eyebrow="Portfolio"
          title="Projects yang pernah saya kerjakan"
          description="Kumpulan project web yang saya bangun dari requirement sampai deployment."
        />
        <ProjectsGrid />
      </section>
    </main>
  );
}