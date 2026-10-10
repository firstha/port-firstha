// src/app/certificates/page.tsx
import { PageHeader } from "@/components/layout/PageHeader";
import { CertificatesGrid } from "@/components/sections/CertificatesGrid";

export const metadata = {
  title: "Certificates",
  description: "Sertifikat & pencapaian profesional Firstha Noventia",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <PageHeader
          eyebrow="Certificates"
          title="Sertifikat"
        />
        <CertificatesGrid />
      </section>
    </main>
  );
}