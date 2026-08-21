import { DIFFERENTIALS } from "@/data/barbershop";
import Reveal from "./Reveal";

const ICONS: Record<string, JSX.Element> = {
  atendimento: (
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5Z" />
  ),
  precisao: (
    <path d="M4 20 20 4M15 4h5v5M9 20H4v-5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  ambiente: (
    <path d="M4 11 12 4l8 7M6 10v9h12v-9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  estilo: (
    <path d="M6 4v16M18 4v16M6 12h12" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function Differentials() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Diferenciais</span>
          <h2 className="section-title mt-4 max-w-lg">
            O que muda quando você senta na nossa cadeira.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <div className="flex h-full flex-col gap-4 rounded-sm border border-line bg-surface p-5 sm:p-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-7 w-7 text-brass"
                  aria-hidden="true"
                >
                  {ICONS[item.id]}
                </svg>
                <h3 className="font-display text-lg text-bone sm:text-xl">
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-boneMuted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
