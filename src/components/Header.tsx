"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="#top" aria-label="S.P & Partners">
        <span className="brand-mark">S.P</span>
        <span className="brand-text">
          <strong>S.P & Partners</strong>
          <small>Strategic Legal Practice</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </button>

      <nav
        id="site-nav"
        className={`site-nav${isOpen ? " is-open" : ""}`}
        aria-label="Navigasi utama"
      >
        <Link href="#tentang" onClick={() => setIsOpen(false)}>Tentang</Link>
        <Link href="#layanan" onClick={() => setIsOpen(false)}>Layanan</Link>
        <Link href="#keunggulan" onClick={() => setIsOpen(false)}>Keunggulan</Link>
        <Link href="#kontak" onClick={() => setIsOpen(false)}>Kontak</Link>
      </nav>
    </header>
  );
}
