import { Reveal } from "@/components/reveal";

export function IntroSection() {
  return (
    <section className="w-full bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p
            className="text-2xl leading-relaxed text-mist/80 lg:text-3xl"
            style={{
              fontFamily: "Figtree",
              letterSpacing: "-2px",
            }}
          >
            Saplaya Residency is a{" "}
            <em
              className="font-display italic text-gold not-italic"
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
              }}
            >
              mediterranean-inspired
            </em>{" "}
            residential development designed to meet the growing demand for
            premium housing in Apapa.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="mt-7 text-[30px] leading-relaxed text-mist/80"
            style={{
              fontFamily: "Figtree",
              letterSpacing: "-2px",
            }}
          >
            Built for executives, expatriates, homeowners, and investors, the
            development combines luxury residences, modern amenities, and
            long-term investment value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
