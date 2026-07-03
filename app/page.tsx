import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Symptoms from '@/components/Symptoms'
import Treatments from '@/components/Treatments'
import About from '@/components/About'
import Institutional from '@/components/Institutional'
import Differentials from '@/components/Differentials'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import StructuredData from '@/components/StructuredData'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title:
    'BS Odonto | Dentista em Belo Horizonte para DTM, Bruxismo e Estética Dental',
  description: siteConfig.description,
  path: '/',
})

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="conteudo-principal" className="min-h-screen">
        <Hero />
        <Symptoms />
        <Treatments />
        <About />
        <Institutional />
        <Testimonials />
        <Differentials />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
