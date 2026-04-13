import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: 'Chatyou – Atendimento Centralizado via WhatsApp, Instagram e Messenger',
  description: 'Centralize WhatsApp, Instagram, Messenger e E-mail em um único painel. Ganhe velocidade, colaboração em equipe e relatórios completos.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
