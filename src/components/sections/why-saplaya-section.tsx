"use client";
import { Reveal } from "@/components/reveal";
import { MapPin } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "Prime Apapa Frontage",
    desc: "A recognised, high-status Apapa location; 25 Point Road Apapa",
  },
  {
    num: "02",
    title: "Strong Rental Market",
    desc: "Corporate and diplomatic tenants drive premium yields with multi-year lease preferences.",
  },
  {
    num: "03",
    title: "Executive Tenants",
    desc: "Shipping companies, government agencies and multinationals employees will create a stable tenant pipeline.",
  },
  {
    num: "04",
    title: "Long -Term Appreciation",
    desc: "Lagos Prime real estate has consistently outperformed inflation.",
  },
  {
    num: "05",
    title: "Limited Luxury Supply",
    desc: "There is virtually no comparable luxury product in Apapa Saplaya captures first-mover advantage.",
  },
  {
    num: "06",
    title: "Institutional Credibility",
    desc: "Strategic partnership with Bank of Industry Trustees further proves the project's integrity.",
  },
];

export function WhySaplayaSection() {
  return (
    <section id="why-saplaya" className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        
        <Reveal>
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-mist mb-12">
            WHY SAPLAYA?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <Reveal key={reason.num} delay={0.1 * idx}>
              <div className="flex flex-col h-full p-8 md:p-10 bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-line/60 flex items-center justify-center text-[#083d80] mb-8 shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <h3 className="font-display text-2xl lg:text-3xl text-[#083d80] mb-4 leading-tight tracking-tight">
                  {reason.title}
                </h3>
                
                <p className="text-sm text-mist leading-relaxed mb-12">
                  {reason.desc}
                </p>

                {/* Footer Number */}
                <div className="mt-auto">
                  <div className="w-full h-px bg-line/60 mb-4"></div>
                  <span className="text-mist/50 text-sm font-medium">
                    {reason.num}
                  </span>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
