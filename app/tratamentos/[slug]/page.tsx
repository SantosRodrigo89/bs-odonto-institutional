import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import {
  getAllTreatmentSlugs,
  getTreatmentBySlug,
} from '@/data/treatments'
import { createPageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/seo'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const treatment = getTreatmentBySlug(slug)

  if (!treatment) {
    return { title: 'Tratamento não encontrado' }
  }

  return createPageMetadata({
    title: `${treatment.seoTitle} | BS Odonto`,
    description: treatment.seoDescription,
    path: `/tratamentos/${treatment.slug}`,
  })
}

function TreatmentStructuredData({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}) {
  const url = `${siteConfig.url}/tratamentos/${slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description,
    url,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: {
      '@type': 'MedicalProcedure',
      name: title,
      description,
    },
    provider: { '@id': `${siteConfig.url}/#dentist` },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: siteConfig.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tratamentos',
          item: `${siteConfig.url}/#tratamentos`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params
  const treatment = getTreatmentBySlug(slug)

  if (!treatment) {
    notFound()
  }

  return (
    <>
      <TreatmentStructuredData
        slug={treatment.slug}
        title={treatment.seoTitle}
        description={treatment.seoDescription}
      />
      <Header />
      <main id="conteudo-principal" className="min-h-screen">
        <article className="section-padding pt-32 md:pt-40 bg-gradient-to-b from-neutral-offWhite to-white">
          <div className="container-custom max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-gray">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/#tratamentos"
                    className="hover:text-primary transition-colors"
                  >
                    Tratamentos
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-primary font-medium">{treatment.title}</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              {treatment.seoTitle}
            </h1>
            <p className="text-lg text-neutral-gray leading-relaxed mb-8">
              {treatment.description}
            </p>
            <p className="text-neutral-gray leading-relaxed mb-10">
              Na BS Odonto, em Belo Horizonte, cada tratamento é planejado de
              forma individualizada, com acompanhamento direto pelas dentistas
              responsáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 text-center"
              >
                Agendar avaliação
              </a>
              <Link
                href="/#tratamentos"
                className="btn-secondary text-lg px-8 py-4 text-center"
              >
                Ver todos os tratamentos
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
