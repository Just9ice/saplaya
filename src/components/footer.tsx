const footerLinks = ["Residences", "Location", "Amenities", "Contact"];

export function Footer() {
  return (
    <footer className="w-full border-t border-line/60 bg-cream">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
        <span className="font-display text-base font-semibold italic text-navy">Saplaya Residency</span>
        <nav className="flex flex-wrap gap-6">
          {footerLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-xs uppercase tracking-wider text-mist transition-colors hover:text-navy">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
