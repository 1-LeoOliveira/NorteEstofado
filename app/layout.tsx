import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Norte Estofados | Tapeçaria Automotiva e Náutica Premium",
  description:
    "Estofamento automotivo e náutico de alto padrão: bancos em couro, volante, painéis, forro de teto, cabines e capotas para embarcações. Personalização com acabamento impecável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">{children}</body>
    </html>
  );
}
