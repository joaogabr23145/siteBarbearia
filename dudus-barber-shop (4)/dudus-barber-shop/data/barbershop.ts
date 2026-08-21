// =============================================================================
// DUDU'S BARBER SHOP — CONFIGURAÇÃO CENTRAL
// =============================================================================
// Este arquivo concentra TODAS as informações editáveis do site.
// Ao receber os dados reais da barbearia, altere apenas os valores abaixo —
// nenhum componente precisa ser tocado.
// =============================================================================

// -----------------------------------------------------------------------------
// CONTATO / WHATSAPP
// -----------------------------------------------------------------------------
// Preencha com o número real, no formato internacional, apenas dígitos.
// Exemplo Goiânia: "5562999999999" (55 + DDD 62 + número)
export const WHATSAPP_NUMBER = ""; // TODO: inserir número real

// -----------------------------------------------------------------------------
// REDES SOCIAIS E LINKS
// -----------------------------------------------------------------------------
export const INSTAGRAM_URL = ""; // TODO: inserir link real do Instagram
export const GOOGLE_MAPS_URL = ""; // TODO: inserir link real do Google Maps

// -----------------------------------------------------------------------------
// ENDEREÇO
// -----------------------------------------------------------------------------
// TODO: inserir endereço real assim que disponível.
export const BARBERSHOP_ADDRESS = "Endereço a definir — Goiânia, GO";

export const BARBERSHOP_CITY = "Goiânia";
export const BARBERSHOP_STATE = "GO";

// -----------------------------------------------------------------------------
// IDENTIFICAÇÃO
// -----------------------------------------------------------------------------
export const SITE_NAME = "Dudu's Barber Shop";
export const SITE_TAGLINE = "Seu estilo começa aqui.";
export const SITE_DESCRIPTION =
  "Barbearia em Goiânia feita para quem valoriza estilo, precisão e experiência. Cortes, barba e cuidados masculinos com atendimento premium.";

// -----------------------------------------------------------------------------
// SERVIÇOS E PREÇOS
// -----------------------------------------------------------------------------
// Preços fictícios (projeto demonstrativo). Basta alterar os valores abaixo.
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "corte",
    name: "Corte masculino",
    description: "Corte personalizado com acabamento na máquina e na tesoura.",
    price: 45,
  },
  {
    id: "corte-barba",
    name: "Corte + Barba",
    description: "O combo completo: corte alinhado e barba desenhada.",
    price: 65,
    featured: true,
  },
  {
    id: "barba",
    name: "Barba",
    description: "Modelagem completa com toalha quente e navalha.",
    price: 30,
  },
  {
    id: "acabamento",
    name: "Acabamento",
    description: "Retoque de contorno, nuca e acabamento na máquina.",
    price: 20,
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    description: "Design e alinhamento para completar o visual.",
    price: 15,
  },
  {
    id: "combo",
    name: "Combo personalizado",
    description: "Monte seu atendimento ideal com o barbeiro.",
    price: 80,
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// -----------------------------------------------------------------------------
// EQUIPE / BARBEIROS (CONTEÚDO DEMONSTRATIVO — SUBSTITUIR PELA EQUIPE REAL)
// -----------------------------------------------------------------------------
export interface Barber {
  id: string;
  name: string;
  specialty: string;
}

export const BARBERS: Barber[] = [
  {
    id: "sem-preferencia",
    name: "Sem preferência",
    specialty: "Qualquer barbeiro disponível no horário",
  },
  {
    id: "barbeiro-1",
    name: "Dudu",
    specialty: "Fundador • cortes clássicos e navalhado",
  },
  {
    id: "barbeiro-2",
    name: "Barbeiro 2",
    specialty: "Especialista em barba",
  },
  {
    id: "barbeiro-3",
    name: "Barbeiro 3",
    specialty: "Cortes modernos e degradê",
  },
];

// -----------------------------------------------------------------------------
// AGENDAMENTO — DIAS E HORÁRIOS DISPONÍVEIS
// -----------------------------------------------------------------------------
// Dias da semana em que a barbearia NÃO funciona (0 = domingo ... 6 = sábado).
// Ajuste conforme o funcionamento real informado em Location.tsx.
export const BOOKING_CLOSED_WEEKDAYS = [0]; // fechado aos domingos

// Horários fixos oferecidos para agendamento (intervalo de almoço já considerado
// no espaço entre 11:40 e 14:00). Ajuste livremente conforme a agenda real.
export const TIME_SLOTS: string[] = [
  "09:00",
  "09:40",
  "10:20",
  "11:00",
  "11:40",
  "14:00",
  "14:40",
  "15:20",
  "16:00",
  "16:40",
  "17:20",
  "18:00",
  "18:40",
];

// Quantos dias à frente o cliente pode agendar.
export const BOOKING_WINDOW_DAYS = 30;

// -----------------------------------------------------------------------------
// DIFERENCIAIS
// -----------------------------------------------------------------------------
export interface Differential {
  id: string;
  title: string;
  description: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    id: "atendimento",
    title: "Atendimento personalizado",
    description: "Cada corte parte de uma conversa sobre o que combina com você.",
  },
  {
    id: "precisao",
    title: "Precisão nos detalhes",
    description: "Contornos, acabamentos e linhas trabalhados com atenção total.",
  },
  {
    id: "ambiente",
    title: "Ambiente confortável",
    description: "Espaço pensado para você relaxar do início ao fim do atendimento.",
  },
  {
    id: "estilo",
    title: "Estilo sob medida",
    description: "Recomendações que respeitam seu rosto, sua rotina e seu jeito.",
  },
];

// -----------------------------------------------------------------------------
// DEPOIMENTOS (CONTEÚDO DEMONSTRATIVO — SUBSTITUIR POR AVALIAÇÕES REAIS)
// -----------------------------------------------------------------------------
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  isDemo: true;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "demo-1",
    quote:
      "Depoimento demonstrativo — substituir pela avaliação real do cliente.",
    author: "Cliente demonstrativo",
    isDemo: true,
  },
  {
    id: "demo-2",
    quote:
      "Depoimento demonstrativo — substituir pela avaliação real do cliente.",
    author: "Cliente demonstrativo",
    isDemo: true,
  },
  {
    id: "demo-3",
    quote:
      "Depoimento demonstrativo — substituir pela avaliação real do cliente.",
    author: "Cliente demonstrativo",
    isDemo: true,
  },
];

// -----------------------------------------------------------------------------
// GALERIA (IMAGENS DEMONSTRATIVAS — SUBSTITUIR PELAS FOTOS REAIS)
// -----------------------------------------------------------------------------
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
    alt: "Corte masculino finalizado com acabamento preciso",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    alt: "Barbeiro aparando a barba de um cliente",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    alt: "Ferramentas de barbeiro organizadas na bancada",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
    alt: "Ambiente interno da barbearia",
    span: "wide",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalhe de acabamento de corte na máquina",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200&auto=format&fit=crop",
    alt: "Cliente sendo atendido na cadeira de barbeiro",
    span: "tall",
  },
];

// -----------------------------------------------------------------------------
// MAPA
// -----------------------------------------------------------------------------
// TODO: substituir pelo embed real do Google Maps assim que o endereço
// definitivo estiver disponível.
export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Goi%C3%A2nia%2C%20GO&output=embed";
