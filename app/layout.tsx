import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'BS Odonto - Seu sorriso é a nossa especialidade | DTM, Bruxismo, Ronco/Apneia',
  description: 'Atendimento personalizado, diagnóstico preciso e tratamentos que priorizam saúde, conforto e resultados duradouros.',
  keywords: 'odontologia Belo Horizonte, DTM, bruxismo, ronco, apneia, odontologia estética, dentista BH',
  authors: [{ name: 'BS Odonto' }],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'BS Odonto - Seu sorriso é a nossa especialidade',
    description: 'Clínica odontológica especializada em DTM, bruxismo, ronco/apneia e odontologia estética em Belo Horizonte.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
