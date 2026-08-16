"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES, RESTAURANT } from "@/data/menu";

// Chaque scène est un fond anime en CSS/SVG (braises, verres, plats) en
// attendant que le restaurant fournisse des photos/vidéos haute résolution.
// Pour les remplacer : dépose tes fichiers dans /public/images/hero/ et
// echange le contenu de chaque <div className="absolute inset-0 ..."> par
// un <Image fill src="/images/hero/ton-fichier.jpg" ... />.

const SCENES = ["grill", "bar", "traiteur"] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex h-[92vh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      {SCENES.map((scene, i) => (
        <div
          key={scene}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <SceneBackground kind={scene} active={i === index} />
        </div>
      ))}

      {/* voile pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <Image
          src="/images/logo.jpg"
          alt="Le Siblys"
          width={112}
          height={112}
          className="mb-6 rounded-full border border-gold/50 shadow-gold"
          priority
        />

        <p className="eyebrow mb-2">{RESTAURANT.tagline}</p>

        <h1 className="section-title mb-4 text-4xl sm:text-5xl md:text-6xl">
          {RESTAURANT.name}
        </h1>

        <p className="mb-8 font-body text-sm uppercase tracking-[0.3em] text-gold/80">
          {RESTAURANT.type}
        </p>

        <div
          key={index}
          className="mb-10 min-h-[3.5rem] max-w-xl animate-[fadeUp_0.7s_ease-out]"
        >
          <p className="font-display text-xl italic text-cream/90 sm:text-2xl">
            « {HERO_SLIDES[index].eyebrow} »
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#reservation" className="btn-primary">
            Réserver une table
          </a>
          <a href="#menu" className="btn-outline">
            Découvrir le menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            aria-label={`Voir : ${slide.title}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-1.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function SceneBackground({
  kind,
  active
}: {
  kind: (typeof SCENES)[number];
  active: boolean;
}) {
  if (kind === "grill") {
    return (
      <div className="h-full w-full bg-[radial-gradient(ellipse_at_50%_100%,_#3a1408_0%,_#0F0C0A_62%)]">
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1 opacity-90">
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              className={`h-24 w-[2px] origin-bottom bg-gradient-to-t from-ember via-ember-light/70 to-transparent ${
                active ? "animate-[flicker_2.4s_ease-in-out_infinite]" : ""
              }`}
              style={{ animationDelay: `${(i % 6) * 0.22}s` }}
            />
          ))}
        </div>
        <style>{`
          @keyframes flicker {
            0%, 100% { transform: scaleY(0.7) scaleX(1); opacity: 0.55; }
            50% { transform: scaleY(1.15) scaleX(1.3); opacity: 0.95; }
          }
        `}</style>
      </div>
    );
  }

  if (kind === "bar") {
    return (
      <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_50%_30%,_#241712_0%,_#0F0C0A_65%)]">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-gold/25 blur-3xl ${
              active ? "animate-[glow_5s_ease-in-out_infinite]" : ""
            }`}
            style={{
              width: 260 + i * 60,
              height: 260 + i * 60,
              left: `${20 + i * 28}%`,
              top: `${18 + i * 12}%`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
        <style>{`
          @keyframes glow {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.55; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_50%_20%,_#1c2318_0%,_#0F0C0A_65%)]">
      <div
        className={`absolute inset-x-0 top-1/3 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-gold/50 to-transparent ${
          active ? "animate-[expand_3.6s_ease-in-out_infinite]" : ""
        }`}
      />
      <style>{`
        @keyframes expand {
          0%, 100% { transform: scaleX(0.6); opacity: 0.4; }
          50% { transform: scaleX(1); opacity: 0.85; }
        }
      `}</style>
    </div>
  );
}
