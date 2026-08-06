"use client";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Battery, Power, Wifi, Droplets, ShieldCheck, Flame, Home, Recycle } from "lucide-react";

const features = [
  { icon: Battery, label: "Solar + Battery Backup" },
  { icon: Power, label: "Dual Generators" },
  { icon: Wifi, label: "Building-Wide Connectivity" },
  { icon: Droplets, label: "Private Water Treatment" },
  { icon: ShieldCheck, label: "Integrated Security" },
  { icon: Flame, label: "Engineered Fire Safety" },
  { icon: Home, label: "Smart Home Automation" },
  { icon: Recycle, label: "On-Site Sewage Treatment" },
];

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-lg">
            <Reveal>
              <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-mist">
                INFRASTRUCTURE
              </h3>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="text-5xl font-semibold leading-[1.1] lg:text-6xl text-navy">
                Always <span className="font-display italic text-gold">Powered.</span>
                <br />
                Always <span className="font-display italic text-gold">Protected.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-mist">
                Dedicated infrastructure ensures reliable power, water, security, and smart living from day one.
              </p>
            </Reveal>
          </div>

          {/* Right Image */}
          <Reveal delay={0.3} className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl">
            <Image
              src="/images/infrastructure.png"
              alt="Saplaya Residency infrastructure aerial view"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Features Grid */}
        <div className="mt-16 lg:mt-24 rounded-3xl border border-line/60 bg-cream/50 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Reveal 
                  key={feature.label} 
                  delay={0.1 * (idx % 4)}
                  className="flex items-center gap-4 p-8 border-b border-line/60 last:border-b-0 sm:border-r sm:even:border-r-0 lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
                >
                  <div className="flex-shrink-0 text-navy">
                    <Icon strokeWidth={1.25} className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium text-mist">
                    {feature.label}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
