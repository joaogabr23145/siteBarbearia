import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME } from "@/data/barbershop";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// TODO: alterar para o domínio real assim que o site for publicado
const SITE_URL = "https://dudusbarbershop.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Barbearia em Goiânia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "barbearia em Goiânia",
    "barbearia Goiânia",
    "corte masculino em Goiânia",
    "barba em Goiânia",
    "Dudu's Barber Shop",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: `${SITE_NAME} | Barbearia em Goiânia`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Barbearia em Goiânia`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
