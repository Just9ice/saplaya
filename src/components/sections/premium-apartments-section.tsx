import { ApartmentCard } from "@/components/apartment-card";
import { Reveal } from "@/components/reveal";

const apartments = [
  {
    image: "/images/apt-two-bed-ext.png",
    hoverImage: "/images/apt-two-bed-hover.png",
    imageAlt: "Two-bedroom apartment building facade with resident courtyard, Saplaya Residency",
    type: "Two Bedrooms",
    size: "78SQM",
    price: "₦175M",
    features: ["Generous open-plan living", "Two en-suite bedrooms", "Premium lifestyle"],
  },
  {
    image: "/images/apt-one-bed-ext.png",
    hoverImage: "/images/apt-one-bed-hover.png",
    imageAlt: "One-bedroom apartment exterior with contemporary street-level entrance, Saplaya Residency",
    type: "One Bedroom",
    size: "46SQM",
    price: "₦145M",
    features: ["Efficient luxury layout", "Floor-to-ceiling light", "Turnkey ready"],
  },
  {
    image: "/images/apt-studio-ext.png",
    hoverImage: "/images/apt-studio-hover.png",
    imageAlt: "Studio apartment building with secure access and bike storage, Saplaya Residency",
    type: "The Studio",
    size: "30SQM",
    price: "₦110M",
    features: ["Smart compact design", "Premium shared amenities", "Low entry point"],
  },
];

export function PremiumApartmentsSection() {
  return (
    <section className="w-full bg-cream pb-24 pt-16 lg:pb-32 lg:pt-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <Reveal>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              <span className="font-display font-semibold italic text-navy">Premium</span>{" "}
              <span className="font-display italic text-gold">Apartments</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} from="right" className="max-w-xs">
            <p className="text-sm leading-relaxed text-mist">
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
