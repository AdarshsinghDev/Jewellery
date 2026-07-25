import type { Metadata } from "next";
import { Cormorant, Jost } from "next/font/google";
import "./globals.css";

// ── Display serif — Cormorant (not Cormorant Garamond)
// True optical high-contrast — razor thin strokes, razor thick stems.
// Used by Vogue, Bottega Veneta digital, luxury ateliers.
// At regular weight (400) at display sizes it has extraordinary refinement.
// font-black (900) Playfair was the problem — massive, newspaper-like.
const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// ── UI sans — Jost: geometric, precise, not the default Inter
const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indo Nordic — Fine Jewelry House",
  description:
    "Indo Nordic is an independent luxury jewelry house. Every piece passes through the hands of a single artisan. Rooted in Paris since 2010.",
  keywords: ["luxury jewelry", "fine jewelry", "bespoke jewelry", "Indo Nordic", "Paris jewelry"],
  openGraph: {
    title: "Indo Nordic — Fine Jewelry House",
    description: "Where craft becomes identity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <body className="bg-canvas text-ink antialiased selection:bg-silver-pale selection:text-ink">
        {children}
      </body>
    </html>
  );
}
