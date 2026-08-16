"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RESTAURANT } from "@/data/menu";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#menu", label: "Menu" },
  { href: "#reservation", label: "Réservation" },
  { href: "#infos", label: "Infos & Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/95 shadow-lg shadow-black/30 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#accueil" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Logo Le Siblys"
            width={44}
            height={44}
            className="rounded-full border border-gold/40"
            priority
          />
          <span className="font-display text-xl tracking-wide text-cream">
            {RESTAURANT.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm uppercase tracking-[0.12em] text-cream/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#reservation" className="btn-primary">
            Réserver une table
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/15 bg-ink/98 px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 font-body text-base uppercase tracking-[0.1em] text-cream/90 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="btn-primary mt-5 w-full"
          >
            Réserver une table
          </a>
        </div>
      )}
    </header>
  );
}
