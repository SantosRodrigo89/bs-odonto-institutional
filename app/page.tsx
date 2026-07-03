import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Symptoms from '@/components/Symptoms'
import Treatments from '@/components/Treatments'
import About from '@/components/About'
import Institutional from '@/components/Institutional'
import Differentials from '@/components/Differentials'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/seo'

const Testimonials = dynamic(() => import('@/components/Testimonials'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'))

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
