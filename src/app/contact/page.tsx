// src/app/contact/page.tsx
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata = {
  title: "Contact",
  description: "Hubungi Firstha Noventia",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <PageHeader
          eyebrow="Contact"
          title="Let's Connect"
          description="Punya project atau ide? Kirim pesan dan kita bisa diskusi dari requirement sampai deployment."
        />
        <ContactContent />
      </section>
    </main>
  );
}