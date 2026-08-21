import Reveal from "./Reveal";
import { CalendarIcon } from "./icons";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brass/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-content px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-bone sm:text-5xl md:text-6xl">
            Seu próximo corte
            <br />
            <span className="text-brass">começa aqui.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md font-sans text-base text-boneMuted">
            Agende seu horário e venha viver a experiência Dudu&apos;s Barber
            Shop.
          </p>
          <a
            href="#agendar"
            className="btn-primary mx-auto mt-9 w-fit gap-2.5"
          >
            <CalendarIcon className="h-4 w-4" />
            Agendar horário
          </a>
        </Reveal>
      </div>
    </section>
  );
}
