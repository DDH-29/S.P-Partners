"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    title: "Strategi yang relevan",
    description: "Setiap saran hukum kami sesuaikan dengan konteks bisnis, risiko, dan target klien.",
  },
  {
    title: "Komunikasi yang jelas",
    description:
      "Bahasa hukum kami sederhanakan tanpa menghilangkan ketepatan dan bobot analisisnya.",
  },
  {
    title: "Kerahasiaan yang dijaga",
    description:
      "Setiap informasi klien kami kelola dengan standar profesional dan penuh kehati-hatian.",
  },
  {
    title: "Responsif dan terukur",
    description:
      "Kami menjaga alur kerja yang cepat, rapi, dan terdokumentasi di setiap penugasan.",
  },
];

export default function Highlights() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="keunggulan" className="section highlights" ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Mengapa Memilih Kami</p>
        <h2>Elegan dalam penyampaian, tegas dalam strategi, dan disiplin dalam eksekusi.</h2>
      </div>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
