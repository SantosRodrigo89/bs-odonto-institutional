import type { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

type PageMetadataOptions = {
  title: string
  description: string
  path: string
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'pt_BR',
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export const geoMetadata: Metadata = {
  other: {
    'geo.region': 'BR-MG',
    'geo.placename': 'Belo Horizonte',
    'geo.position': `${siteConfig.coordinates.latitude};${siteConfig.coordinates.longitude}`,
    ICBM: `${siteConfig.coordinates.latitude}, ${siteConfig.coordinates.longitude}`,
  },
}
