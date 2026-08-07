

export function Footer() {
  return (
    <footer className="w-full bg-[#FCFAF6]">
      {/* Top Section */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-6 py-12 sm:flex-row lg:px-10">
        <span className="font-display text-4xl text-[#083d80]">
          Saplaya Residency
        </span>
        <nav className="flex flex-wrap gap-8">
          {["About Us", "Residences", "Amenities"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-mist transition-colors hover:text-[#083d80]"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-line/40">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-10">
          <span className="text-xs text-mist">
            Â© 2026 Saplaya Residency. All rights reserved.
          </span>
          <span className="text-xs text-mist">
            Apapa Â· Lagos Â· Nigeria
          </span>
        </div>
      </div>
    </footer>
  );
}
