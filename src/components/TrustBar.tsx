"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TrustBar() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="trust-bar" aria-label="Kepercayaan klien" ref={ref}>
      <p>
        Dipercaya untuk kebutuhan corporate counsel, sengketa bisnis, kontrak komersial, dan
        compliance.
      </p>
    </section>
  );
}
