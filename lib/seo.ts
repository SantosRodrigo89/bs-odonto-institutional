const DEFAULT_SITE_URL = 'https://www.bsodonto.com.br'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL

export const address = {
  streetAddress: 'Rua Pedra Preciosa 55A',
  addressLocality: 'Belo Horizonte',
  addressRegion: 'MG',
  postalCode: '31570-580',
  addressCountry: 'BR',
} as const

export const fullAddress = `${address.streetAddress}, ${address.addressLocality} – ${address.addressRegion}, ${address.postalCode}`

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${address.streetAddress}, ${address.addressLocality} - ${address.addressRegion}, ${address.postalCode}`
)}`

export const siteConfig = {
  name: 'BS Odonto',
  legalName: 'Consultório Odontológico BS Odonto',
  description:
    'Clínica odontológica em Belo Horizonte especializada em DTM, bruxismo, ronco, apneia do sono, implantes, ortodontia, clareamento dental e estética dental. Atendimento personalizado de segunda a sexta.',
  url: siteUrl.replace(/\/$/, ''),
  phone: '+55 31 98528-0016',
  whatsappUrl:
    'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  instagramUrl: 'https://www.instagram.com/bs_odonto',
  googleMapsUrl,
  googleReviewsUrl: 'https://share.google/d91F6fjQNPMp94lT9',
  address,
  fullAddress,
  coordinates: {
    latitude: -19.8124475,
    longitude: -43.9848298,
  },
  ogImage: '/images/beatriz-silvia.jpeg',
  logo: '/images/logo.png',
  keywords: [
    'dentista em Belo Horizonte',
    'clínica odontológica em Belo Horizonte',
    'clínica odontológica Belo Horizonte',
    'DTM Belo Horizonte',
    'bruxismo Belo Horizonte',
    'apneia do sono Belo Horizonte',
    'ronco Belo Horizonte',
    'implante dentário Belo Horizonte',
    'implantes dentários Belo Horizonte',
    'ortodontia Belo Horizonte',
    'estética dental Belo Horizonte',
    'clareamento dental Belo Horizonte',
    'dentista de emergência Belo Horizonte',
    'consultório odontológico Belo Horizonte',
  ],
}

export const dentists = [
  {
    name: 'Dra. Beatriz Gomes de Alvarenga',
    jobTitle: 'Cirurgiã-Dentista',
    specialty:
      'Dentística restauradora (estética, clareamento, próteses e implantes)',
    image: '/images/beatriz.jpeg',
    cro: '25292',
  },
  {
    name: 'Dra. Sílvia Regina Batista dos Santos',
    jobTitle: 'Cirurgiã-Dentista',
    specialty:
      'Endodontia, DTM, bruxismo, apneia do sono e odontopediatria',
    image: '/images/silvia.jpeg',
    cro: '24836',
  },
  {
    name: 'Dr. Afonso Lara',
    jobTitle: 'Cirurgiã-Dentista',
    specialty: 'Cirurgia (implantes e sisos) e periodontia',
    image: '/images/afonso-lara.jpeg',
    cro: '28477',
  },
  {
    name: 'Dra. Cíntia Mota',
    jobTitle: 'Cirurgiã-Dentista',
    specialty: 'Ortodontia',
    image: '/images/cintia.jpeg',
    cro: '45663',
  },
  {
    name: 'Dra. Mara Cristina Amorim',
    jobTitle: 'Cirurgiã-Dentista',
    specialty: 'Estomatologia (doenças da cavidade oral)',
    image: '/images/mara.jpeg',
    cro: '24899',
  },
] as const

export const businessServices = [
  'DTM e dor orofacial',
  'Bruxismo',
  'Ronco e apneia do sono',
  'Implantes dentários',
  'Ortodontia',
  'Tratamento de canal',
  'Cirurgia de siso',
  'Estética dental',
  'Odontopediatria',
]
