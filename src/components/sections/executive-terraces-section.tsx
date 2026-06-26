import Image from "next/image";
import { Reveal } from "@/components/reveal";

const specs = [
  { label: "Area", value: "370 sqm" },
  { label: "Bedrooms", value: "4 en-suite" },
  { label: "Outdoor", value: "Balcony · Courtyard" },
  { label: "Extras", value: "Lift · Kitchen (optional)" },
];

export function ExecutiveTerracesSection() {
  return (
    <section id="residences" className="w-full bg-[#fff9ef] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <Reveal>
            <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
              <span className="font-display italic text-navy">Executive</span>{" "}
              <span className="font-display italic text-gold">Terraces</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} from="right" className="max-w-xs">
            <p className="text-sm leading-relaxed text-mist">
              10 executive terraces designed for families and executives seeking
              privacy, space, and premium living.
            </p>
          </Reveal>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Aerial image */}
          <Reveal
            from="left"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/saplaya.png"
              alt="Aerial drone view of Saplaya Residency executive terraces with landscaped courtyards"
              fill
              sizes="(min-width:1024px) 50vw, 90vw"
              className="object-cover"
            />
          </Reveal>

          {/* Details */}
          <Reveal
            delay={0.1}
            from="right"
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl italic text-navy lg:text-4xl">
              Space,{" "}
              <em
                className="text-gold not-italic"
                style={{ fontStyle: "italic" }}
              >
                privacy
              </em>{" "}
              &amp; presence.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-mist">
              A four-bedroom terrace designed for families and executives who
              expect room to live, and an address that signals arrival.
            </p>

            {/* Specs */}
            <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line">
              {specs.map((s) => (
                <div key={s.label} className="bg-cream px-5 py-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-mist/60">
                    {s.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Price + CTA */}
            <div className="mt-8 flex items-center gap-5">
              <span className="font-display text-3xl font-semibold text-navy">
                ₦375M
              </span>
              <button className="rounded border border-navy/30 px-5 py-2 text-xs font-medium uppercase tracking-wider text-navy transition-all hover:bg-navy hover:text-cream">
                View Details
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
