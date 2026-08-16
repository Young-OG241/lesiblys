"use client";

import { FormEvent, useState } from "react";
import { RESTAURANT } from "@/data/menu";

type FormState = {
  name: string;
  guests: string;
  date: string;
  time: string;
  note: string;
};

const initialState: FormState = {
  name: "",
  guests: "2",
  date: "",
  time: "",
  note: ""
};

export default function Reservation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name.trim() || !form.date || !form.time) {
      setError("Merci de renseigner ton nom, la date et l'heure de réservation.");
      return;
    }
    setError("");

    const formattedDate = new Date(form.date).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const lines = [
      `Bonjour ${RESTAURANT.name} 👋`,
      `Je souhaite réserver une table.`,
      ``,
      `👤 Nom : ${form.name}`,
      `🧑‍🤝‍🧑 Nombre de personnes : ${form.guests}`,
      `📅 Date : ${formattedDate}`,
      `🕒 Heure : ${form.time}`
    ];

    if (form.note.trim()) {
      lines.push(``, `📝 Précision : ${form.note.trim()}`);
    }

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${RESTAURANT.whatsapp}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="reservation" className="bg-wood/40 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-2">Nous vous attendons</p>
          <h2 className="section-title">Réserver une table</h2>
          <p className="mt-4 font-body text-sm text-cream/70">
            Complète le formulaire ci-dessous : ta demande s&apos;ouvrira directement dans
            WhatsApp, prête à envoyer au restaurant.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-gold/15 bg-ink/60 p-6 sm:p-10"
          noValidate
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Ex : Edouard"
                className="w-full rounded-sm border border-gold/25 bg-wood/40 px-4 py-3 font-body text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="guests" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
                Nombre de personnes
              </label>
              <select
                id="guests"
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className="w-full rounded-sm border border-gold/25 bg-wood/40 px-4 py-3 font-body text-cream focus:border-gold focus:outline-none"
              >
                {Array.from({ length: 19 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-wood text-cream">
                    {n} {n > 1 ? "personnes" : "personne"}
                  </option>
                ))}
                <option value="20+" className="bg-wood text-cream">
                  Plus de 20 personnes
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
                Date
              </label>
              <input
                id="date"
                type="date"
                value={form.date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => update("date", e.target.value)}
                className="w-full rounded-sm border border-gold/25 bg-wood/40 px-4 py-3 font-body text-cream focus:border-gold focus:outline-none [color-scheme:dark]"
              />
            </div>

            <div>
              <label htmlFor="time" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
                Heure
              </label>
              <input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="w-full rounded-sm border border-gold/25 bg-wood/40 px-4 py-3 font-body text-cream focus:border-gold focus:outline-none [color-scheme:dark]"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="note" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
                Précision (optionnel)
              </label>
              <textarea
                id="note"
                value={form.note}
                onChange={(e) => update("note", e.target.value)}
                rows={3}
                placeholder="Ex : table en terrasse, anniversaire, allergie..."
                className="w-full resize-none rounded-sm border border-gold/25 bg-wood/40 px-4 py-3 font-body text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-4 text-sm text-ember-light">
              {error}
            </p>
          )}

          <button type="submit" className="btn-primary mt-7 w-full">
            <WhatsAppIcon />
            Confirmer sur WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.91-1.26-4.8-4.19-4.94-4.38-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.11.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.38-.41.51-.14.15-.28.31-.12.6.16.29.71 1.16 1.52 1.88 1.05.93 1.93 1.22 2.22 1.36.29.14.46.12.63-.07.17-.19.72-.83.91-1.12.19-.29.38-.24.63-.14.26.09 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.35Z" />
    </svg>
  );
}
