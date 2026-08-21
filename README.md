# Dudu's Barber Shop — Site institucional

Site institucional em Next.js (App Router) para a Dudu's Barber Shop, em Goiânia (GO).

## Tecnologias

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- next/image e next/font (Google Fonts: Fraunces + Inter)

## Como executar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

Para gerar a build de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
app/            layout, página principal, sitemap
components/     Navbar, Hero, Services, Booking, About, Differentials,
                Gallery, Testimonials, Location, FinalCta, Footer,
                WhatsAppFloat, Reveal (animação), icons
data/           barbershop.ts — TODA a informação editável do site
lib/            whatsapp.ts — geração de links do WhatsApp
public/         favicon, robots.txt
```

## Onde alterar cada informação

Tudo fica centralizado em `data/barbershop.ts`:

| O que alterar | Constante |
|---|---|
| Número do WhatsApp | `WHATSAPP_NUMBER` (formato `55DDDNUMERO`, só dígitos) |
| Endereço | `BARBERSHOP_ADDRESS` |
| Preços e serviços | array `SERVICES` |
| Instagram | `INSTAGRAM_URL` |
| Link do Google Maps ("Como chegar") | `GOOGLE_MAPS_URL` |
| Mapa incorporado | `MAP_EMBED_SRC` |
| Depoimentos | array `TESTIMONIALS` (substituir pelas avaliações reais) |
| Imagens da galeria/hero/sobre | array `GALLERY_IMAGES` e os componentes `Hero.tsx`/`About.tsx` (comentários `// TODO` indicam onde trocar) |
| Barbeiros da equipe | array `BARBERS` (substituir pelos nomes e especialidades reais) |
| Dias sem atendimento | `BOOKING_CLOSED_WEEKDAYS` (0 = domingo … 6 = sábado) |
| Horários oferecidos para agendamento | array `TIME_SLOTS` |
| Quantos dias à frente dá para agendar | `BOOKING_WINDOW_DAYS` |

## Como funciona o agendamento (seção "Agendar")

A seção `#agendar` (componente `Booking.tsx`) é um formulário funcional: o
cliente escolhe barbeiro, serviço, data e horário e informa o nome. Como o
site é estático (sem banco de dados/backend), a confirmação final acontece
pelo WhatsApp — ao clicar em "Confirmar pelo WhatsApp", todos os dados
escolhidos são montados automaticamente em uma mensagem e o cliente é
levado para o WhatsApp da barbearia (número definido em `WHATSAPP_NUMBER`)
para a equipe validar a disponibilidade e confirmar o horário.

Se quiser um agendamento 100% automático (sem depender da confirmação
manual pelo WhatsApp, com verificação de horários já ocupados), é
necessário adicionar um backend com banco de dados — posso ajudar a
implementar isso caso vocês queiram evoluir para esse modelo.

Todas as imagens atuais são demonstrativas (Unsplash) e estão marcadas com comentários indicando onde substituir pelas fotos reais da barbearia.

## Deploy

O jeito mais simples é a [Vercel](https://vercel.com) (criadora do Next.js):

1. Suba o projeto para um repositório no GitHub.
2. Importe o repositório na Vercel.
3. A Vercel detecta o Next.js automaticamente e faz o deploy.

Também funciona em qualquer host que suporte Node.js (Netlify, Render etc.), rodando `npm run build` seguido de `npm run start`.
