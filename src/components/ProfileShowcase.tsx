"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const showcaseItems = [
  {
    label: "Visi",
    description:
      "Menjadi firma hukum terpercaya yang menghadirkan solusi modern dengan kualitas layanan personal.",
  },
  {
    label: "Misi",
    description:
      "Menyediakan pendampingan hukum yang efektif, elegan, dan berdampak nyata bagi klien.",
  },
  {
    label: "Fokus",
    description:
      "Membantu klien bergerak lebih pasti melalui strategi hukum yang matang dan berorientasi hasil.",
  },
];

export default function ProfileShowcase() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="section profile-showcase" ref={ref}>
      <div className="showcase-panel">
        <p className="eyebrow">Profil Perusahaan</p>
        <h2>Mitra hukum untuk keputusan penting dan pertumbuhan jangka panjang.</h2>
        <p>
          Berbasis pada standar layanan premium, Lexora Counsel mendukung klien mulai dari
          konsultasi preventif hingga pendampingan intensif pada situasi yang memerlukan ketepatan,
          ketenangan, dan daya negosiasi tinggi.
        </p>
      </div>

      <div className="showcase-list">
        {showcaseItems.map((item) => (
          <article key={item.label}>
            <strong>{item.label}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
