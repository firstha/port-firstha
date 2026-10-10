// src/data/certificates.ts
export type Certificate = Readonly<{
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  pdfPath: string;
  credentialId?: string;
  featured?: boolean;
}>;

export const certificates: readonly Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Dicoding Indonesia",
    date: "2024-11-15",
    description:
      "Sertifikasi pengembangan web full stack mencakup frontend, backend, dan deployment.",
    pdfPath: "/sertif/sertif1.pdf",
    credentialId: "DIC-2024-001",
    featured: true,
  },
  {
    id: 2,
    title: "Advanced TypeScript & React",
    issuer: "Udemy",
    date: "2024-10-20",
    description:
      "Pendalaman TypeScript lanjutan dan pola React modern untuk aplikasi skala besar.",
    pdfPath: "/sertif/sertif2.pdf",
    credentialId: "UDM-2024-002",
    featured: true,
  },
  {
    id: 3,
    title: "Laravel Professional",
    issuer: "Coding Studio",
    date: "2024-09-10",
    description:
      "Penguasaan Laravel untuk membangun REST API dan aplikasi enterprise.",
    pdfPath: "/sertif/sertif8.pdf",
    credentialId: "CDS-2024-003",
  },
  {
    id: 4,
    title: "Database Design & Management",
    issuer: "Oracle Academy",
    date: "2024-08-05",
    description:
      "Perancangan database relasional, normalisasi, dan optimasi query.",
    pdfPath: "/sertif/sertif4.pdf",
    credentialId: "ORA-2024-004",
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    issuer: "Google",
    date: "2024-07-18",
    description: "Prinsip desain antarmuka, riset pengguna, dan prototyping.",
    pdfPath: "/sertif/sertif3.pdf",
    credentialId: "GOO-2024-005",
  },
  {
    id: 6,
    title: "API Development & Integration",
    issuer: "Postman",
    date: "2024-06-22",
    description:
      "Pengembangan, pengujian, dan integrasi API modern dengan standar industri.",
    pdfPath: "/sertif/sertif7.pdf",
    credentialId: "PST-2024-006",
  },
  
  {
    id: 7,
    title: "API Development & Integration",
    issuer: "Postman",
    date: "2024-06-22",
    description:
      "Pengembangan, pengujian, dan integrasi API modern dengan standar industri.",
    pdfPath: "/sertif/sertif5.pdf",
    credentialId: "PST-2024-006",
  },

  {
    id: 8,
    title: "API Development & Integration",
    issuer: "Postman",
    date: "2024-06-22",
    description:
      "Pengembangan, pengujian, dan integrasi API modern dengan standar industri.",
    pdfPath: "/sertif/sertif6.pdf",
    credentialId: "PST-2024-006",
  },
] as const;