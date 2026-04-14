import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: 'Chatyou – Atendimento Centralizado via WhatsApp, Instagram e Messenger',
  description: 'Centralize WhatsApp, Instagram, Messenger e E-mail em um único painel. Ganhe velocidade, colaboração em equipe e relatórios completos.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
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
        <Script id="chatwoot" strategy="afterInteractive">
          {`
            (function(d,t) {
              var BASE_URL="https://app.chatyou.chat";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g,s);
              g.onload=function(){
                window.chatwootSDK.run({
                  websiteToken: 's9wnTns4DNYjC4FdARLPyqWu',
                  baseUrl: BASE_URL
                })
              }
            })(document,"script");
          `}
        </Script>
      </body>
    </html>
  )
}
