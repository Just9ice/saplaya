"use client";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

const partners = [
  { name: "LSDPC", role: "Marketing partner", logo: "lsdpc.png" },
  {
    name: "BOI Investment and Trust Company Limited",
    role: "Institutional governance & investor security",
    logo: "boi.png",
  },
  {
    name: "Stone Depot",
    role: "Premium materials and finishing",
    logo: "stone-depot.png",
  },
  {
    name: "Powerec",
    role: "Power, water & smart-systems engineering",
    logo: "powerc.png",
  },
  { name: "SIMPLY", role: "Interior Design fit out", logo: "simply.png" },
  {
    name: "Muse Studio",
    role: "Architecture & interior design",
    logo: "muse-studio.png",
  },
  { name: "Union Bank", role: "Mortgage Loan Partner", logo: "union-bank.png" },
  {
    name: "Impacto",
    role: "Premium materials and finishing",
    logo: "impacto.png",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="text-4xl font-semibold leading-tight lg:text-5xl text-[#083d80] mb-16">
            Built by names you can trust.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <Reveal key={partner.name} delay={0.1 * (idx % 4)}>
              <div className="flex flex-col justify-between h-[200px] p-6 border border-line/60 bg-cream-dark/20 rounded-lg">
                <h4 className="text-lg font-medium text-[#083d80] leading-tight">
                  {partner.name}
                </h4>

                <div className="flex items-end justify-between gap-4 mt-auto">
                  <p className="text-xs text-mist max-w-[120px]">
                    {partner.role}
                  </p>

                  <div className="relative w-20 h-20 shrink-0 opacity-80 mix-blend-multiply">
                    {/* Placeholder for the user to add the actual image */}
                    <Image
                      src={`/images/logos/${partner.logo}`}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="(min-width: 1024px) 100px, 80vw"
                      className="object-contain object-center border border-[#BE9F70] p-2 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
