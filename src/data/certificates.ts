export type Certificate = Readonly<{
  id: number;
  title: string;
  description?: string;
  pdfPath: string;
}>;

export const certificates: readonly Certificate[] = [
  {
    id: 1,
    title: "Certificate 1",
    description: "Professional certification in web development",
    pdfPath: "/sertif/sertif1.pdf",
  },
  {
    id: 2,
    title: "Certificate 2",
    description: "Advanced TypeScript & React development",
    pdfPath: "/sertif/sertif2.pdf",
  },
  {
    id: 3,
    title: "Certificate 3",
    description: "Full Stack Web Development",
    pdfPath: "/sertif/sertif3.pdf",
  },
  {
    id: 4,
    title: "Certificate 4",
    description: "Database design and management",
    pdfPath: "/sertif/sertif4.pdf",
  },
  {
    id: 5,
    title: "Certificate 5",
    description: "UI/UX Design principles",
    pdfPath: "/sertif/sertif5.pdf",
  },
  {
    id: 6,
    title: "Certificate 6",
    description: "API development and integration",
    pdfPath: "/sertif/sertif6.pdf",
  },
  {
    id: 7,
    title: "Certificate 7",
    description: "Cloud deployment and DevOps",
    pdfPath: "/sertif/sertif7.pdf",
  },
  {
    id: 8,
    title: "Certificate 8",
    description: "Professional web development certification",
    pdfPath: "/sertif/sertif8.pdf",
  },
] as const;
