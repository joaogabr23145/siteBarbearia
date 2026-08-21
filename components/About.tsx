import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="eyebrow">Sobre a barbearia</span>
          <h2 className="section-title mt-4">
            Técnica, estilo e experiência em um só lugar.
          </h2>
          {/* Texto institucional genérico — SUBSTITUIR pela história real da Dudu's Barber Shop */}
          <p className="mt-6 font-sans text-base leading-relaxed text-boneMuted">
            A Dudu&apos;s Barber Shop nasceu para unir técnica apurada, estilo
            autêntico e uma experiência diferenciada em cada atendimento. Aqui,
            cada corte é pensado para valorizar sua identidade — com atenção
            aos detalhes que fazem a diferença entre um corte comum e um corte
            que tem a sua cara.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-boneMuted">
            Mais do que um serviço, buscamos entregar um momento de cuidado:
            ambiente confortável, atendimento atencioso e resultado que você
            leva com confiança para o dia a dia.
          </p>
          <a href={getWhatsAppUrl("duvidas")} className="btn-secondary mt-8 w-fit">
            Quero conhecer
          </a>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={100}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            {/* Imagem de demonstração — SUBSTITUIR por foto real da barbearia/barbeiro */}
            <Image
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop"
              alt="Barbeiro trabalhando com atenção aos detalhes em ambiente premium"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
