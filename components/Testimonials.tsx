import { TESTIMONIALS } from "@/data/barbershop";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Avaliações</span>
          <h2 className="section-title mt-4 max-w-lg">
            O que dizem sobre a experiência.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-sm text-steel">
            Conteúdo demonstrativo — substituir por avaliações reais de
            clientes assim que disponíveis.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 60}>
              <figure className="flex h-full flex-col justify-between rounded-sm border border-line bg-surface p-6">
                <div>
                  <span className="mb-4 inline-block rounded-sm border border-brass/40 px-2 py-0.5 font-sans text-[10px] uppercase tracking-widest2 text-brass">
                    Demonstrativo
                  </span>
                  <blockquote className="font-display text-lg leading-snug text-bone">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 font-sans text-sm text-boneMuted">
                  — {testimonial.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
