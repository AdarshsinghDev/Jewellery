/**
 * Ticker — not a generic "marquee bar"
 * Full-width, warm surface, editorial cadence
 * Each item is a material / craft fact — not marketing bullets
 */
const ITEMS = [
  "18k Yellow Gold",
  "Lost-wax Casting",
  "Hand-set Diamonds",
  "Ethical Provenance",
  "Lifetime Refinishing",
  "Single Artisan, Zero Assembly Line",
  "Rose-cut & Brilliant-cut Gemstones",
  "Paris · Tokyo · Milan",
];

export default function Ticker() {
  const all = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="bg-surface border-y border-tint py-4 overflow-hidden"
      aria-hidden="true"
    >
      <div className="ticker-track">
        {all.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 label text-ghost whitespace-nowrap"
          >
            {item}
            <span className="inline-block w-[3px] h-[3px] rounded-full bg-bronze-light/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
