"use client";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { MapPin, ShieldCheck, ArrowUpRight, Briefcase } from "lucide-react";

const locationFeatures = [
  {
    icon: MapPin,
    title: "PRIME ADDRESS",
    desc: "A recognised, high-status Apapa location.",
  },
  {
    icon: ArrowUpRight,
    title: "EXCELLENT CONNECTIVITY",
    desc: "Minutes from the Island and mainland.",
  },
  {
    icon: ShieldCheck,
    title: "SECURE ENVIRONMENT",
    desc: "Adjacent to the Naval Barracks",
  },
  {
    icon: Briefcase,
    title: "CORPORATE DEMAND",
    desc: "Surrounded by HQs and port operations.",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="w-full bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-cream/80 mb-16">
            LOCATION
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Image (Map) */}
          <Reveal className="relative w-full aspect-square max-h-[600px] overflow-hidden rounded-xl bg-cream/10 border border-line/20">
            {/* Placeholder for map image */}
            <Image
              src="/images/map.png"
              alt="Saplaya Residency Location Map"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {/* Right Content */}
          <div className="flex flex-col gap-12">
            <Reveal delay={0.1}>
              <h3 className="text-5xl font-semibold leading-[1.1] lg:text-6xl text-cream">
                Connected.{" "}
                <span className="font-display italic text-gold">Secure.</span>
                <br />
                In Demand.
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {locationFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Reveal key={feature.title} delay={0.2 + 0.1 * idx}>
                    <div className="flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-full border border-line/20 flex items-center justify-center text-cream shrink-0">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-xs font-medium tracking-[0.1em] text-gold mb-2 uppercase">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-cream/80 leading-relaxed max-w-[200px]">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
