"use client";

import { useEffect, useState } from "react";
import { SITE_NAME } from "@/data/barbershop";
import { CalendarIcon, MenuIcon } from "./icons";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#agendar", label: "Agendar" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="font-display text-lg sm:text-xl tracking-wide text-bone"
          onClick={handleLinkClick}
        >
          Dudu&apos;s <span className="text-brass">Barber Shop</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 font-sans text-sm text-boneMuted">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-brass"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#agendar" className="btn-primary">
            Agendar horário
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#agendar"
            aria-label="Agendar horário"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brass text-ink"
          >
            <CalendarIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-bone"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-0 z-40 bg-ink transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`transform transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-display text-3xl text-bone hover:text-brass"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#agendar"
            onClick={handleLinkClick}
            className="btn-primary mt-10 w-fit"
          >
            Agendar horário
          </a>
        </div>
      </div>
    </header>
  );
}


