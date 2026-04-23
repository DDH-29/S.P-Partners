"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="kontak" className="section contact" ref={ref}>
      <div className="contact-card">
        <div>
          <p className="eyebrow">Kontak</p>
          <h2>Diskusikan kebutuhan hukum Anda bersama kami.</h2>
          <p>
            Siap untuk konsultasi awal, review dokumen, atau pendampingan berkelanjutan bagi
            perusahaan maupun kebutuhan personal.
          </p>
        </div>

        <div className="contact-details">
          <a href="mailto:contact@S.P.Partners.com">contact@SP.Partners.com</a>
          <a href="tel:+622112345678">+62 21 1234 5678</a>
          <p>Temp Location</p>
        </div>
      </div>
    </section>
  );
}
