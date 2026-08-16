"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU, SAUCES } from "@/data/menu";

function formatPrice(price: number) {
  if (price === 0) return "";
  return `${price.toLocaleString("fr-FR")} FCFA`;
}

export default function MenuSection() {
  const [activeId, setActiveId] = useState(MENU[0].id);
  const active = MENU.find((c) => c.id === activeId) ?? MENU[0];

  return (
    <section id="menu" className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-2">Notre carte</p>
          <h2 className="section-title">Le Menu</h2>
          <div className="fork-divider mt-5">
            <ForkIcon />
          </div>
        </div>

        {/* Navigation par catégorie */}
        <div
          role="tablist"
          aria-label="Catégories du menu"
          className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {MENU.map((category) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(category.id)}
                className={`rounded-full border px-4 py-2 font-body text-sm uppercase tracking-[0.08em] transition-all duration-200 sm:px-5 ${
                  isActive
                    ? "border-gold bg-gold text-ink font-semibold"
                    : "border-gold/25 text-cream/80 hover:border-gold/60 hover:text-gold-light"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Accroche de la catégorie */}
        {active.note && (
          <p className="mb-8 text-center font-display italic text-gold-light/90">
            {active.note}
          </p>
        )}

        {/* Groupes de plats */}
        <div className="space-y-12">
          {active.groups.map((group) => (
            <div key={group.title ?? "principal"}>
              {group.title && (
                <h3 className="mb-5 font-display text-xl text-gold sm:text-2xl">
                  {group.title}
                </h3>
              )}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.dishes.map((dish) => (
                  <article key={dish.name} className="menu-card overflow-hidden !p-0">
                    {dish.image && (
                      <div className="relative h-40 w-full">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-between p-5">
                      <h4 className="font-display text-lg text-cream sm:text-xl">
                        {dish.name}
                      </h4>
                      {dish.price > 0 && (
                        <p className="mt-3 font-body text-sm font-semibold tracking-wide text-gold">
                          {formatPrice(dish.price)}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sauces disponibles */}
        {(active.id === "grill" || active.id === "locales" || active.id === "ailleurs") && (
          <div className="mt-12 border-t border-gold/10 pt-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold/70">
              Sauces au choix
            </p>
            <p className="font-body text-sm text-cream/75">{SAUCES.join(" · ")}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ForkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-gold"
      aria-hidden="true"
    >
      <path
        d="M6 2v7a2 2 0 0 0 4 0V2M8 9v13M18 2c-1.5 0-3 1.5-3 4s1.5 4 3 4v11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
