import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nado-livre.example"),
  title: "Nado Livre | Natação Infantil e Hidroginástica",
  description: "Conheça a Nado Livre, uma escola aquática demonstrativa com aulas de natação e hidroginástica.",
  openGraph: { title: "Nado Livre — Escola Aquática", description: "Natação infantil e hidroginástica em um ambiente acolhedor.", locale: "pt_BR", type: "website" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`}><body>{children}</body></html>;
}
