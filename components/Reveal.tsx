"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Envolve o conteúdo e aplica um fade-in sutil quando entra na viewport.
 *
 * IMPORTANTE: o conteúdo é SEMPRE visível por padrão (opacity: 1). A
 * animação de entrada é apenas um efeito complementar aplicado via classe
 * "will-animate" quando o elemento entra na viewport — se o
 * IntersectionObserver não disparar por qualquer motivo (ex.: previews
 * embutidos em iframe), o conteúdo permanece normalmente visível, nunca
 * escondido. Respeita prefers-reduced-motion via CSS global.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${animate ? "will-animate" : ""} ${className}`}
      style={{ animationDelay: animate ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
