import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      'BS Odonto | Dentista em Belo Horizonte para DTM, Bruxismo e Estética Dental',
    template: '%s | BS Odonto',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: 'BS Odonto' }],
  creator: 'BS Odonto',
  publisher: 'BS Odonto',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/images/logo.png' }],
    apple: [{ url: '/images/logo.png' }],
  },
  openGraph: {
    title: 'BS Odonto | Dentista em Belo Horizonte',
    description: siteConfig.description,
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Equipe da BS Odonto em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BS Odonto | Dentista em Belo Horizonte',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a href="#conteudo-principal" className="skip-link">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
