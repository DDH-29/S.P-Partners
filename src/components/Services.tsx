"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    number: "01",
    title: "Corporate & Commercial",
    description:
      "Penyusunan kontrak, legal due diligence, pendirian perusahaan, dan transaksi bisnis.",
  },
  {
    number: "02",
    title: "Litigasi & Sengketa",
    description:
      "Pendampingan perkara perdata, sengketa bisnis, negosiasi, dan strategi penyelesaian sengketa.",
  },
  {
    number: "03",
    title: "Ketenagakerjaan",
    description:
      "Nasihat hubungan industrial, penyusunan kebijakan internal, dan mitigasi risiko tenaga kerja.",
  },
  {
    number: "04",
    title: "Regulatory & Compliance",
    description:
      "Audit kepatuhan, review perizinan, dan dukungan terhadap tata kelola perusahaan.",
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="layanan" className="section services" ref={ref}>
      <div className="section-heading split">
        <div>
          <p className="eyebrow">Layanan Hukum</p>
          <h2>Bidang praktik yang dirancang untuk kebutuhan hukum strategis.</h2>
        </div>
        <p className="section-note">
          Layanan kami disusun untuk memberi rasa aman sekaligus nilai tambah bagi bisnis dan
          keputusan personal Anda.
        </p>
      </div>

      <div className="card-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
