import Image from "next/image";
import { RESTAURANT } from "@/data/menu";

export default function Footer() {
  const mapsQuery = encodeURIComponent(RESTAURANT.address);

  return (
    <footer id="infos" className="border-t border-gold/15 bg-ink px-5 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
          {/* Identité */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Logo Le Siblys"
                width={48}
                height={48}
                className="rounded-full border border-gold/40"
              />
              <span className="font-display text-xl text-cream">{RESTAURANT.name}</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-cream/65">
              {RESTAURANT.tagline}. {RESTAURANT.type}, au cœur de Libreville.
            </p>
            <a
              href={RESTAURANT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light"
            >
              <FacebookIcon />
              Suivez-nous sur Facebook
            </a>
          </div>

          {/* Contact et localisation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold/80">
              Contact &amp; Localisation
            </h3>
            <ul className="space-y-3 font-body text-sm text-cream/80">
              <li>
                <a
                  href={`tel:+${RESTAURANT.whatsapp}`}
                  className="hover:text-gold-light"
                >
                  {RESTAURANT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${RESTAURANT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light"
                >
                  Discuter sur WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light"
                >
                  {RESTAURANT.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold/80">
              Heures d&apos;ouverture
            </h3>
            <ul className="space-y-2 font-body text-sm text-cream/80">
              {RESTAURANT.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-cream/60">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fork-divider mb-8" />

        <div className="flex flex-col items-center justify-between gap-3 pb-8 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-cream/45">
            © {new Date().getFullYear()} {RESTAURANT.name} — Restaurant, Bar &amp; Service
            Traiteur, Libreville.
          </p>
          <p className="font-body text-xs text-cream/45">Fait avec soin, pour la table.</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.4h2.8l.42-3.26h-3.22V8.24c0-.94.26-1.58 1.6-1.58h1.72V3.74A23 23 0 0 0 14.3 3.6c-2.44 0-4.11 1.49-4.11 4.22v2.52H7.4v3.26h2.79V22h3.31Z" />
    </svg>
  );
}
