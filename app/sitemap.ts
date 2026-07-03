import type { MetadataRoute } from 'next'
import { treatments } from '@/data/treatments'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const treatmentPages = treatments.map((treatment) => ({
    url: `${siteConfig.url}/tratamentos/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...treatmentPages,
  ]
}
