import type { Project } from "@/domain/types";

export const projects: readonly Project[] = [
  {
    title: "Membership Landing Page",
    description:
      "Landing page membership yang responsif dengan komponen UI reusable dan optimasi performa.",
    details:
      "Menyusun struktur halaman berbasis komponen, membuat section CTA, pricing, serta interaksi sederhana. Fokus pada konsistensi spacing/typography dan pengalaman pengguna.",
    status: "active",
    featured: true, // ✅ TAMBAHKAN INI
    href: "https://example.com/membership",
    repoHref: "https://github.com/your-username/membership-landing",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    start: "2025-01-10",
    end: "2025-02-01",
    highlights: [
      "Struktur komponen scalable (section-based).",
      "Desain UI modern dengan spacing & typography yang konsisten.",
      "Optimasi loading untuk aset dan rendering.",
    ],
  },
  {
    title: "Sistem Kasir",
    description:
      "Aplikasi kasir untuk transaksi penjualan dengan alur checkout, laporan sederhana, dan manajemen produk.",
    details:
      "Membangun sistem CRUD produk, proses transaksi, serta tampilan dashboard ringkas untuk kebutuhan operasional.",
    status: "active",
    featured: true, // ✅ TAMBAHKAN INI
    href: "https://example.com/cashier",
    repoHref: "https://github.com/your-username/cashier-system",
    tech: ["Laravel", "PHP", "MySQL", "React", "Tailwind CSS"],
    start: "2024-09-01",
    end: "2024-12-01",
    highlights: [
      "Alur transaksi terstruktur dari cart sampai pembayaran.",
      "Validasi data input dan flow error handling.",
      "Laporan ringkas untuk transaksi harian.",
    ],
  },
  {
    title: "Company Profile",
    description:
      "Website company profile modern dengan layout informatif, section timeline, dan CTA.",
    status: "active",
    featured: false,
    href: "https://example.com/company-profile",
    repoHref: "https://github.com/your-username/company-profile",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    start: "2025-03-15",
    end: "2025-04-05",
    highlights: [
      "Reusable section components untuk mempercepat pengembangan.",
      "Skema warna konsisten untuk brand identity.",
      "Performa baik untuk halaman informasi.",
    ],
  },
  {
    title: "Sistem Absensi",
    description:
      "Sistem absensi untuk pencatatan kehadiran dengan role-based access dan histori.",
    details:
      "Menyediakan fitur absensi, pengelolaan jadwal sederhana, dan tampilan histori berdasarkan tanggal.",
    status: "planned",
    featured: false,
    href: "https://example.com/attendance",
    repoHref: "https://github.com/your-username/attendance-system",
    tech: ["Laravel", "PHP", "MySQL", "React", "Tailwind CSS"],
    start: "2025-05-01",
    highlights: [
      "Model data untuk histori absensi yang scalable.",
      "Integrasi permission untuk role yang berbeda.",
      "Tampilan histori yang mudah dipahami.",
    ],
  },
] as const;