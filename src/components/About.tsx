"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="tentang" className="section intro" ref={ref}>
      <div className="section-heading">
        <p className="eyebrow">Tentang Kami</p>
        <h2>Profesionalisme hukum yang dibangun di atas ketelitian dan kepercayaan.</h2>
      </div>

      <div className="intro-grid">
        <article className="panel soft">
          <p>
            S.P & Partners hadir untuk memberikan layanan hukum yang modern, terstruktur, dan
            selaras dengan dinamika bisnis masa kini. Kami percaya bahwa solusi hukum terbaik
            lahir dari pemahaman mendalam terhadap tujuan klien.
          </p>
        </article>
        <article className="panel">
          <h3>Pendekatan Kami</h3>
          <p>
            Menggabungkan analisis hukum yang tajam dengan komunikasi yang jelas, sehingga setiap
            strategi dapat dipahami, diukur, dan dieksekusi dengan percaya diri.
          </p>
        </article>
        <article className="panel">
          <h3>Nilai Utama</h3>
          <p>
            Integritas, kerahasiaan, respons cepat, dan komitmen untuk melindungi kepentingan
            klien dalam setiap tahap pendampingan.
          </p>
        </article>
      </div>
    </section>
  );
}
