import { ApartmentCard } from "@/components/apartment-card";
import { Reveal } from "@/components/reveal";

const apartments = [
  {
    image: "/images/apartment-2.png",
    hoverImage: "/images/apartment-1.jpeg",
    imageAlt:
      "Two-bedroom apartment building facade with resident courtyard, Saplaya Residency",
    type: "Two Bedrooms",
    heading: "Young Families & Senior Professionals",
    size: "78SQM",
    features: [
      "Generous open-plan living",
      "Two en-suite bedrooms",
      "Premium lifestyle",
    ],
  },
  {
    image: "/images/apartment-3.png",
    hoverImage: "/images/apartment-6.png",
    imageAlt:
      "One-bedroom apartment exterior with contemporary street-level entrance, Saplaya Residency",
    type: "One Bedroom",
    heading: "Corporate Tenants",
    size: "46SQM",
    features: [
      "Efficient luxury layout",
      "Floor-to-ceiling light",
      "Turnkey ready",
    ],
  },
  {
    image: "/images/apartment-5.png",
    hoverImage: "/images/apartment-4.png",
    imageAlt:
      "Studio apartment building with secure access and bike storage, Saplaya Residency",
    type: "The Studio",
    heading: "Diaspora & First Investors",
    size: "30SQM",
    features: [
      "Smart compact design",
      "Premium shared amenities",
      "Low entry point",
    ],
  },
];

export function PremiumApartmentsSection() {
  return (
    <section className="w-full bg-cream pb-24 pt-16 lg:pb-32 lg:pt-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl">
              <span className="font-display text-[#083d80]">Premium</span>{" "}
              <span className="font-display italic text-gold">Apartments</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} from="right" className="max-w-xs">
            <p className="text-lg leading-relaxed text-mist/80">
              60 apartments, designed for professionals,
              <br className="hidden sm:block" />
              investors, and corporate rentals.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {apartments.map((apt, i) => (
            <ApartmentCard key={apt.type} {...apt} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
