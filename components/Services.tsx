import { formatPrice, SERVICES } from "@/data/barbershop";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Serviços</span>
          <h2 className="section-title mt-4 max-w-xl">
            Tudo o que você precisa para sair daqui no seu melhor estilo.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <article
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-sm border p-6 transition-colors duration-300 sm:p-7 ${
                  service.featured
                    ? "border-brass/60 bg-surfaceLight"
                    : "border-line bg-surface hover:border-brass/40"
                }`}
              >
                {service.featured && (
                  <span className="absolute right-0 top-0 rounded-bl-sm bg-brass px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest2 text-ink">
                    Mais pedido
                  </span>
                )}

                <div>
                  <h3 className="font-display text-2xl text-bone">{service.name}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-boneMuted">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between border-t border-line pt-5">
                  <span className="font-display text-3xl text-brass">
                    {formatPrice(service.price)}
                  </span>
                  <a
                    href={getWhatsAppUrl(
                      "agendamento",
                      `Olá! Gostaria de agendar o serviço "${service.name}" na Dudu's Barber Shop.`
                    )}
                    className="font-sans text-sm font-medium text-bone underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass"
                  >
                    Agendar
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
