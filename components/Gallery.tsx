"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/data/barbershop";
import Reveal from "./Reveal";

const SPAN_CLASSES: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <section id="galeria" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Galeria</span>
          <h2 className="section-title mt-4 max-w-lg">
            Detalhes que mostram o nosso padrão.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
          {GALLERY_IMAGES.map((image, i) => (
            <Reveal
              key={image.id}
              delay={i * 40}
              className={`relative aspect-square overflow-hidden rounded-sm sm:aspect-auto ${
                SPAN_CLASSES[image.span ?? "normal"]
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Ampliar imagem: ${image.alt}`}
                className="group relative h-full w-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da imagem"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 animate-fadeIn"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Fechar visualização"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone"
          >
            ✕
          </button>
          <div
            className="relative h-[70vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
