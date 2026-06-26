import { Reveal } from "@/components/reveal";

export function IntroSection() {
  return (
    <section className="w-full bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="text-2xl leading-relaxed text-mist lg:text-3xl">
            Saplaya Residency is a{" "}
            <em
              className="font-display italic text-gold not-italic"
              style={{ fontStyle: "italic" }}
            >
              mediterranean-inspired
            </em>{" "}
            residential development designed to meet the growing demand for
            premium housing in Apapa.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-7 text-xl leading-relaxed text-mist/80 lg:text-2xl">
            Built for executives, expatriates, homeowners, and investors, the
            development combines luxury residences, modern amenities, and
            long-term investment value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
