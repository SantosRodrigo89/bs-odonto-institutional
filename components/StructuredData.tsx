import { faqItems } from '@/data/faqItems'
import { businessServices, siteConfig } from '@/lib/seo'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${siteConfig.url}/#dentist`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  telephone: siteConfig.phone,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.coordinates.latitude,
    longitude: siteConfig.coordinates.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality} - ${siteConfig.address.addressRegion}, ${siteConfig.address.postalCode}`
  )}`,
  areaServed: {
    '@type': 'City',
    name: 'Belo Horizonte',
  },
  sameAs: [siteConfig.instagramUrl],
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

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
