import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata = {
  title: "Proyek",
  description:
    "Kumpulan proyek Firstha Noventia Sari dari pembelajaran, pengalaman pengembangan aplikasi, dan eksplorasi teknologi.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <PageHeader
          eyebrow="Proyek Saya"
          title="Proyek yang pernah saya kerjakan"
          description="Kumpulan proyek yang saya kerjakan selama belajar Rekayasa Perangkat Lunak, mengikuti kompetisi, dan mengembangkan keterampilan sebagai mahasiswa Informatika."
        />
        <ProjectsGrid />
      </section>
    </main>
  );
}