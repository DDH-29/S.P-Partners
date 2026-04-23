"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="hero" ref={ref}>
      <div className="hero-copy">
        <p className="eyebrow">Firma Hukum Korporasi &amp; Litigasi</p>
        <h1>Nasihat hukum yang tenang, tajam, dan mewakili integritas bisnis Anda.</h1>
        <p className="hero-lead">
          Kami mendampingi perusahaan, pemimpin usaha, dan individu dalam pengambilan keputusan
          penting melalui strategi hukum yang presisi, komunikatif, dan berkelas.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#kontak">
            Jadwalkan Konsultasi
          </a>
          <a className="button button-secondary" href="#layanan">
            Lihat Layanan
          </a>
        </div>
      </div>

      <div className="hero-card">
        <span className="card-label">Profil Singkat</span>
        <h2>S.P & Partners</h2>
        <p>
          Boutique law firm dengan fokus pada advisory, dispute resolution, dan perlindungan
          kepentingan hukum klien secara menyeluruh.
        </p>
        <div className="hero-stats">
          <article>
            <strong>12+</strong>
            <span>Tahun pengalaman gabungan</span>
          </article>
          <article>
            <strong>150+</strong>
            <span>Perkara &amp; mandat hukum</span>
          </article>
          <article>
            <strong>24/7</strong>
            <span>Respons untuk isu prioritas</span>
          </article>
        </div>
      </div>
    </section>
  );
}
