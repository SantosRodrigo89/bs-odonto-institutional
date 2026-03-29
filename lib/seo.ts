const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000'

export const siteConfig = {
  name: 'BS Odonto',
  legalName: 'Consultório Odontológico BS Odonto',
  description:
    'Clínica odontológica em Belo Horizonte especializada em DTM, bruxismo, ronco, apneia do sono, implantes, ortodontia e estética dental.',
  url: siteUrl.replace(/\/$/, ''),
  phone: '+55 31 98528-0016',
  whatsappUrl:
    'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  instagramUrl: 'https://www.instagram.com/bs_odonto',
  address: {
    streetAddress: 'Rua Pedra Preciosa 55A',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '31570-580',
    addressCountry: 'BR',
  },
  coordinates: {
    latitude: -19.8124475,
    longitude: -43.9848298,
  },
  ogImage: '/images/beatriz-silvia.jpeg',
  logo: '/images/logo.png',
  keywords: [
    'dentista em Belo Horizonte',
    'clínica odontológica em Belo Horizonte',
    'DTM Belo Horizonte',
    'bruxismo Belo Horizonte',
    'apneia do sono Belo Horizonte',
    'ronco Belo Horizonte',
    'implante dentário Belo Horizonte',
    'ortodontia Belo Horizonte',
    'estética dental Belo Horizonte',
  ],
}

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
