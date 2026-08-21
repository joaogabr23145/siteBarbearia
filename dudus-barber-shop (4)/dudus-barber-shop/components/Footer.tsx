import {
  BARBERSHOP_CITY,
  BARBERSHOP_STATE,
  INSTAGRAM_URL,
  SITE_NAME,
} from "@/data/barbershop";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-2xl text-bone">{SITE_NAME}</p>
            <p className="mt-2 font-sans text-sm text-steel">
              {BARBERSHOP_CITY} — {BARBERSHOP_STATE}
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-col gap-3 font-sans text-sm">
            <a
              href={INSTAGRAM_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-boneMuted transition-colors hover:text-brass"
            >
              Instagram
            </a>
            <a
              href={getWhatsAppUrl("duvidas")}
              className="text-boneMuted transition-colors hover:text-brass"
            >
              WhatsApp
            </a>
            <a href="#localizacao" className="text-boneMuted transition-colors hover:text-brass">
              Localização
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="font-sans text-xs text-steel">
            © {year} {SITE_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
