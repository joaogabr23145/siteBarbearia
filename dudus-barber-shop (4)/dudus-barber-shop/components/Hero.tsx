import Image from "next/image";
import { BARBERSHOP_CITY, BARBERSHOP_STATE, SITE_DESCRIPTION } from "@/data/barbershop";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pt-28"
    >
      {/* Imagem de demonstração — SUBSTITUIR pela foto real da barbearia */}
      <Image
        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop"
        alt="Barbeiro finalizando um corte masculino em ambiente premium"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-16 sm:px-8 sm:pb-20 md:pb-24">
        <div className="mb-5 flex items-center gap-3 font-sans text-xs uppercase tracking-widest2 text-boneMuted">
          <span className="h-1.5 w-1.5 rounded-full bg-brass" />
          {BARBERSHOP_CITY} • {BARBERSHOP_STATE}
        </div>

        <h1 className="font-display text-[13vw] leading-[0.95] text-bone sm:text-6xl md:text-7xl lg:text-8xl">
          Dudu&apos;s
          <br />
          <span className="text-brass">Barber Shop</span>
        </h1>

        <p className="mt-6 max-w-xl font-sans text-base text-boneMuted sm:text-lg">
          {SITE_DESCRIPTION}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#agendar" className="btn-primary">
            Agendar horário
          </a>
          <a href="#servicos" className="btn-secondary">
            Conhecer serviços
          </a>
        </div>

        <p className="mt-6 font-sans text-xs uppercase tracking-widest2 text-steel">
          Técnica apurada • Atendimento sob medida
        </p>
      </div>
    </section>
  );
}
