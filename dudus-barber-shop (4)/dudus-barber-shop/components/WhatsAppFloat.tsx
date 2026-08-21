import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl("agendamento")}
      aria-label="Agendar horário pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-ink shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
