import { treatments } from '@/data/treatments'
import { faqItems } from '@/data/faqItems'
import { businessServices, dentists, siteConfig } from '@/lib/seo'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: siteConfig.phone,
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.googleMapsUrl,
    siteConfig.googleReviewsUrl,
  ],
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { '@id': `${siteConfig.url}/#organization` },
  inLanguage: 'pt-BR',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  about: { '@id': `${siteConfig.url}/#dentist` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}${siteConfig.ogImage}`,
  },
  inLanguage: 'pt-BR',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
  '@id': `${siteConfig.url}/#dentist`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  telephone: siteConfig.phone,
  priceRange: '$$',
  parentOrganization: { '@id': `${siteConfig.url}/#organization` },
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.coordinates.latitude,
    longitude: siteConfig.coordinates.longitude,
  },
  hasMap: siteConfig.googleMapsUrl,
  areaServed: {
    '@type': 'City',
    name: 'Belo Horizonte',
  },
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.googleMapsUrl,
    siteConfig.googleReviewsUrl,
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
    },
  ],
  makesOffer: businessServices.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'MedicalProcedure',
      name: service,
    },
  })),
}

const servicesItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tratamentos odontológicos da BS Odonto',
  itemListElement: treatments.map((treatment, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: treatment.title,
    url: `${siteConfig.url}/tratamentos/${treatment.slug}`,
  })),
}

const physicianSchemas = dentists.map((dentist) => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: dentist.name,
  jobTitle: dentist.jobTitle,
  medicalSpecialty: dentist.specialty,
  image: `${siteConfig.url}${dentist.image}`,
  worksFor: { '@id': `${siteConfig.url}/#dentist` },
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
}))

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: siteConfig.url,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const schemas = [
  organizationSchema,
  websiteSchema,
  webPageSchema,
  localBusinessSchema,
  servicesItemListSchema,
  breadcrumbSchema,
  faqSchema,
  ...physicianSchemas,
]

export default function StructuredData() {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
