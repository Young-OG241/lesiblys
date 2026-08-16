import { RESTAURANT } from "@/data/menu";

const items = [
  {
    label: "Adresse",
    value: RESTAURANT.address
  },
  {
    label: "Téléphone / WhatsApp",
    value: RESTAURANT.phoneDisplay
  },
  {
    label: "Aujourd'hui",
    value: RESTAURANT.hours[0].time
  }
];

export default function InfoBar() {
  return (
    <div className="border-y border-gold/15 bg-wood/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gold/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 px-5 sm:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 py-4 sm:justify-center sm:py-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold/70">
              {item.label}
            </span>
            <span className="font-body text-sm text-cream/90">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
