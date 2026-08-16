import type { Metadata } from "next";
import { Fraunces, Manrope, Playball } from "next/font/google";
import "./globals.css";
import { RESTAURANT } from "@/data/menu";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"]
});

const playball = Playball({
  subsets: ["latin"],
  variable: "--font-playball",
  weight: "400"
});

export const metadata: Metadata = {
  title: `${RESTAURANT.name} — Restaurant, Bar & Traiteur à Libreville`,
  description:
    "Le Siblys : restaurant, bar et service traiteur à Libreville, Gabon. Grillades, saveurs locales et internationales, réservation de table simple et rapide.",
  keywords: [
    "restaurant Libreville",
    "bar Libreville",
    "traiteur Gabon",
    "Le Siblys",
    "restaurant gabonais"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${playball.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
