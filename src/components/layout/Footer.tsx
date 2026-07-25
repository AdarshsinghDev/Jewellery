import Link from "next/link";
import Image from "next/image";

const COLS = {
  "Maison":    ["Collections", "Archive", "Atelier", "About"],
  "Discover":  ["Lumière", "Ombre", "Silence", "Bespoke"],
  "Services":  ["Commission", "Engraving", "Resizing", "Care Guide"],
  "Contact":   ["Paris Atelier", "Tokyo Studio", "Milan Studio", "Press"],
};
const SOCIAL = [
  { l: "Instagram", h: "#" },
  { l: "Pinterest",  h: "#" },
  { l: "WeChat",     h: "#" },
];

export default function Footer() {
  return (
    <footer
      className="bg-canvas border-t border-tint pt-20 pb-12"
      role="contentinfo"
    >
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">

        {/* Top row */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block group mb-5" aria-label="Indo Nordic home">
              <Image
                src="/IndoNordiclogoL.webp"
                alt="Indo Nordic — Fine Jewelry House"
                width={160}
                height={52}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="body-copy max-w-[260px] mb-8">
              An independent luxury house founded in Paris in 2010. Every piece is
              made by a single artisan from concept to completion.
            </p>
            <div className="flex items-center gap-6">
              {SOCIAL.map(s => (
                <a key={s.l} href={s.h} aria-label={s.l}
                  className="label text-ghost hover:text-ink transition-colors duration-300">
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(COLS).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="label text-bronze-mid mb-5">{heading}</h3>
                <ul className="space-y-3" role="list">
                  {items.map(item => (
                    <li key={item}>
                      <a href="#"
                        className="label text-ghost hover:text-ink transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Rule */}
        <div className="rule mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="label text-ghost">
            © 2025 Indo Nordic Fine Jewelry House · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Legal", "Terms", "Cookies"].map(i => (
              <a key={i} href="#"
                className="label text-ghost hover:text-ink transition-colors duration-300">
                {i}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
