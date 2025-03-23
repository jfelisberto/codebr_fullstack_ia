import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portifolio Fullstack IA",
  description: "Projeto Fullstack React | NestJS | Integração com ferramentas de IA",
};

const fonte = Montserrat({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fonte.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
