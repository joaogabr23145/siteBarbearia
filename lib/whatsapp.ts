import { SITE_NAME, WHATSAPP_NUMBER } from "@/data/barbershop";

export type WhatsAppIntent = "agendamento" | "duvidas" | "localizacao";

const MESSAGES: Record<WhatsAppIntent, string> = {
  agendamento: `Olá! Gostaria de agendar um horário na ${SITE_NAME}.`,
  duvidas: `Olá! Tenho uma dúvida sobre os serviços da ${SITE_NAME}.`,
  localizacao: `Olá! Gostaria de saber como chegar até a ${SITE_NAME}.`,
};

/**
 * Monta a URL do WhatsApp com mensagem pré-preenchida.
 * Se WHATSAPP_NUMBER ainda não tiver sido preenchido em /data/barbershop.ts,
 * retorna "#" para evitar links quebrados em produção.
 */
export function getWhatsAppUrl(
  intent: WhatsAppIntent = "agendamento",
  customMessage?: string
): string {
  if (!WHATSAPP_NUMBER) return "#";
  const message = customMessage ?? MESSAGES[intent];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
