"use client";

import { useMemo, useState, type MouseEvent } from "react";
import {
  BARBERS,
  BOOKING_CLOSED_WEEKDAYS,
  BOOKING_WINDOW_DAYS,
  SERVICES,
  TIME_SLOTS,
} from "@/data/barbershop";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CalendarIcon, CheckIcon, WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

function toISODate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateBR(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

const WEEKDAY_LABELS = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

export default function Booking() {
  const today = useMemo(() => new Date(), []);
  const minDate = useMemo(() => toISODate(today), [today]);
  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + BOOKING_WINDOW_DAYS);
    return toISODate(d);
  }, [today]);

  const [barberId, setBarberId] = useState<string>("");
  const [serviceId, setServiceId] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const selectedBarber = BARBERS.find((b) => b.id === barberId);
  const selectedService = SERVICES.find((s) => s.id === serviceId);

  const dateWeekday = date ? new Date(`${date}T00:00:00`).getDay() : null;
  const isClosedDay =
    dateWeekday !== null && BOOKING_CLOSED_WEEKDAYS.includes(dateWeekday);
  const dateError = date && isClosedDay
    ? `Fechado às ${WEEKDAY_LABELS[dateWeekday]}s — escolha outra data.`
    : null;

  const isValid =
    !!barberId && !!serviceId && !!date && !dateError && !!time && name.trim().length >= 2;

  const message = useMemo(() => {
    if (!isValid || !selectedBarber || !selectedService) return "";
    const lines = [
      "Olá! Gostaria de agendar um horário na Dudu's Barber Shop.",
      "",
      `👤 Nome: ${name.trim()}`,
      `💈 Barbeiro: ${selectedBarber.name}`,
      `✂️ Serviço: ${selectedService.name}`,
      `📅 Data: ${formatDateBR(date)}`,
      `🕒 Horário: ${time}`,
      "",
      "Aguardo a confirmação, obrigado!",
    ];
    return lines.join("\n");
  }, [isValid, selectedBarber, selectedService, name, date, time]);

  const whatsappUrl = isValid ? getWhatsAppUrl("agendamento", message) : "#";

  const handleSubmitClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isValid) {
      e.preventDefault();
      setTouched(true);
    }
  };

  return (
    <section id="agendar" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Agendar horário</span>
          <h2 className="section-title mt-4 max-w-xl">
            Escolha o barbeiro, o serviço e o melhor horário para você.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-sm text-boneMuted">
            Preencha os dados abaixo. Ao confirmar, sua solicitação é enviada
            direto para o WhatsApp da barbearia para confirmarmos o horário
            com você.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            {/* Formulário */}
            <div className="rounded-sm border border-line bg-surface p-6 sm:p-8">
              {/* Barbeiro */}
              <fieldset>
                <legend className="font-sans text-xs font-semibold uppercase tracking-widest2 text-brass">
                  1. Escolha o barbeiro
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {BARBERS.map((barber) => {
                    const selected = barber.id === barberId;
                    return (
                      <button
                        key={barber.id}
                        type="button"
                        onClick={() => setBarberId(barber.id)}
                        aria-pressed={selected}
                        className={`flex items-start gap-3 rounded-sm border p-4 text-left transition-colors duration-200 ${
                          selected
                            ? "border-brass bg-surfaceLight"
                            : "border-line bg-ink/40 hover:border-brass/50"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            selected
                              ? "border-brass bg-brass text-ink"
                              : "border-line text-transparent"
                          }`}
                        >
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span>
                          <span className="block font-display text-lg text-bone">
                            {barber.name}
                          </span>
                          <span className="mt-0.5 block font-sans text-xs text-boneMuted">
                            {barber.specialty}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Serviço */}
              <fieldset className="mt-8">
                <legend className="font-sans text-xs font-semibold uppercase tracking-widest2 text-brass">
                  2. Escolha o serviço
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {SERVICES.map((service) => {
                    const selected = service.id === serviceId;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setServiceId(service.id)}
                        aria-pressed={selected}
                        className={`flex items-center justify-between gap-3 rounded-sm border p-4 text-left transition-colors duration-200 ${
                          selected
                            ? "border-brass bg-surfaceLight"
                            : "border-line bg-ink/40 hover:border-brass/50"
                        }`}
                      >
                        <span className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              selected
                                ? "border-brass bg-brass text-ink"
                                : "border-line text-transparent"
                            }`}
                          >
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          <span className="font-sans text-sm text-bone">
                            {service.name}
                          </span>
                        </span>
                        <span className="shrink-0 font-display text-base text-brass">
                          {service.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Data e horário */}
              <fieldset className="mt-8">
                <legend className="font-sans text-xs font-semibold uppercase tracking-widest2 text-brass">
                  3. Escolha o dia e o horário
                </legend>
                <div className="mt-4">
                  <label
                    htmlFor="booking-date"
                    className="block font-sans text-xs text-boneMuted"
                  >
                    Data
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={date}
                    min={minDate}
                    max={maxDate}
                    onChange={(e) => {
                      setDate(e.target.value);
                      setTime("");
                    }}
                    className="mt-2 w-full max-w-xs rounded-sm border border-line bg-ink/40 px-4 py-3 font-sans text-sm text-bone outline-none transition-colors focus:border-brass [color-scheme:dark]"
                  />
                  {dateError && (
                    <p className="mt-2 font-sans text-xs text-red-400">
                      {dateError}
                    </p>
                  )}
                </div>

                {date && !dateError && (
                  <div className="mt-5">
                    <span className="block font-sans text-xs text-boneMuted">
                      Horário
                    </span>
                    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                      {TIME_SLOTS.map((slot) => {
                        const selected = slot === time;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            aria-pressed={selected}
                            className={`rounded-sm border py-2.5 text-center font-sans text-sm transition-colors duration-200 ${
                              selected
                                ? "border-brass bg-brass text-ink font-semibold"
                                : "border-line bg-ink/40 text-boneMuted hover:border-brass/50 hover:text-bone"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </fieldset>

              {/* Nome */}
              <fieldset className="mt-8">
                <legend className="font-sans text-xs font-semibold uppercase tracking-widest2 text-brass">
                  4. Seus dados
                </legend>
                <div className="mt-4">
                  <label
                    htmlFor="booking-name"
                    className="block font-sans text-xs text-boneMuted"
                  >
                    Nome completo
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="mt-2 w-full max-w-sm rounded-sm border border-line bg-ink/40 px-4 py-3 font-sans text-sm text-bone placeholder:text-steel outline-none transition-colors focus:border-brass"
                  />
                  {touched && name.trim().length < 2 && (
                    <p className="mt-2 font-sans text-xs text-red-400">
                      Informe seu nome para continuar.
                    </p>
                  )}
                </div>
              </fieldset>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSubmitClick}
                aria-disabled={!isValid}
                className={`btn-primary mt-9 w-full gap-2.5 sm:w-fit ${
                  !isValid ? "cursor-not-allowed opacity-50 hover:bg-brass" : ""
                }`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Confirmar pelo WhatsApp
              </a>
              {touched && !isValid && (
                <p className="mt-3 font-sans text-xs text-red-400">
                  Preencha o barbeiro, o serviço, a data, o horário e seu nome
                  para confirmar.
                </p>
              )}
            </div>

            {/* Resumo */}
            <div className="h-fit rounded-sm border border-line bg-surface p-6 sm:p-8 lg:sticky lg:top-28">
              <div className="flex items-center gap-2.5">
                <CalendarIcon className="h-5 w-5 text-brass" />
                <h3 className="font-display text-xl text-bone">
                  Resumo do agendamento
                </h3>
              </div>

              <dl className="mt-6 space-y-4 font-sans text-sm">
                <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
                  <dt className="text-boneMuted">Barbeiro</dt>
                  <dd className="text-right text-bone">
                    {selectedBarber ? selectedBarber.name : "—"}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
                  <dt className="text-boneMuted">Serviço</dt>
                  <dd className="text-right text-bone">
                    {selectedService ? selectedService.name : "—"}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
                  <dt className="text-boneMuted">Data</dt>
                  <dd className="text-right text-bone">
                    {date && !dateError ? formatDateBR(date) : "—"}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3 pb-1">
                  <dt className="text-boneMuted">Horário</dt>
                  <dd className="text-right text-bone">{time || "—"}</dd>
                </div>
              </dl>

              {selectedService && (
                <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
                  <span className="font-sans text-xs uppercase tracking-widest2 text-boneMuted">
                    Valor estimado
                  </span>
                  <span className="font-display text-2xl text-brass">
                    {selectedService.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              )}

              <p className="mt-6 font-sans text-xs leading-relaxed text-steel">
                A confirmação final do horário é feita pela equipe via
                WhatsApp, sujeita à disponibilidade da agenda.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
