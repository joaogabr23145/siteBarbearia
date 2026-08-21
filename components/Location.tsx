import {
  BARBERSHOP_ADDRESS,
  BARBERSHOP_CITY,
  BARBERSHOP_STATE,
  GOOGLE_MAPS_URL,
  MAP_EMBED_SRC,
} from "@/data/barbershop";
import Reveal from "./Reveal";

export default function Location() {
  const directionsUrl =
    GOOGLE_MAPS_URL ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `Dudu's Barber Shop, ${BARBERSHOP_CITY}, ${BARBERSHOP_STATE}`
    )}`;

  return (
    <section id="localizacao" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow">Localização</span>
          <h2 className="section-title mt-4">
            Estamos em {BARBERSHOP_CITY}.
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-boneMuted">
            {BARBERSHOP_ADDRESS}
          </p>
          <p className="mt-2 font-sans text-sm text-steel">
            {BARBERSHOP_CITY} — {BARBERSHOP_STATE}
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-fit"
          >
            Como chegar
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-72 w-full overflow-hidden rounded-sm border border-line sm:h-80 lg:h-full lg:min-h-[320px]">
            <iframe
              src={MAP_EMBED_SRC}
              title={`Mapa de localização da Dudu's Barber Shop em ${BARBERSHOP_CITY}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale invert-[0.92] contrast-[0.9]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
