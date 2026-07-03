export const treatments = [
  {
    slug: 'dtm-dor-orofacial',
    title: 'DTM / Dor Orofacial',
    seoTitle: 'Tratamento de DTM em Belo Horizonte',
    seoDescription:
      'Diagnóstico e tratamento de DTM e dor orofacial em Belo Horizonte. Alívio da dor, equilíbrio muscular e recuperação da função mandibular na BS Odonto.',
    description:
      'Diagnóstico e tratamento das disfunções da articulação temporomandibular, com foco na função, alívio da dor e equilíbrio muscular.',
  },
  {
    slug: 'bruxismo',
    title: 'Bruxismo',
    seoTitle: 'Tratamento de Bruxismo em Belo Horizonte',
    seoDescription:
      'Tratamento de bruxismo em Belo Horizonte com placas oclusais personalizadas. Proteja seus dentes e melhore a qualidade do sono na BS Odonto.',
    description:
      'Soluções personalizadas com placas oclusais e abordagens multidisciplinares para proteger seus dentes e melhorar sua qualidade de sono.',
  },
  {
    slug: 'ronco-apneia',
    title: 'Ronco / Apneia',
    seoTitle: 'Tratamento de Ronco e Apneia do Sono em Belo Horizonte',
    seoDescription:
      'Tratamento de ronco e apneia do sono em Belo Horizonte com aparelhos intraorais. Melhore sua respiração e qualidade do sono na BS Odonto.',
    description:
      'Tratamento com aparelhos intraorais para controle do ronco e da apneia leve a moderada, promovendo melhor respiração e qualidade do sono.',
  },
  {
    slug: 'implantes-dentarios',
    title: 'Implantes dentários',
    seoTitle: 'Implantes Dentários em Belo Horizonte',
    seoDescription:
      'Implantes dentários em Belo Horizonte com planejamento individualizado. Reposição segura de dentes perdidos com função e estética na BS Odonto.',
    description:
      'Reposição de dentes perdidos com implantes seguros e planejados individualmente, restaurando função e estética.',
  },
  {
    slug: 'reabilitacao-estetica',
    title: 'Reabilitação / Estética',
    seoTitle: 'Estética Dental em Belo Horizonte',
    seoDescription:
      'Estética dental em Belo Horizonte: clareamento, facetas, próteses e reabilitação oral. Transforme seu sorriso com a BS Odonto.',
    description:
      'Transforme seu sorriso com procedimentos estéticos modernos, incluindo clareamento, facetas, próteses totais e parciais.',
  },
  {
    slug: 'ortodontia',
    title: 'Ortodontia',
    seoTitle: 'Ortodontia em Belo Horizonte',
    seoDescription:
      'Ortodontia em Belo Horizonte para correção de alinhamento dentário e mordida. Aparelhos ortodônticos personalizados na BS Odonto.',
    description:
      'Correção do alinhamento dentário e da mordida com aparelhos ortodônticos adequados a cada caso.',
  },
  {
    slug: 'tratamento-de-canal',
    title: 'Tratamento de Canal',
    seoTitle: 'Tratamento de Canal em Belo Horizonte',
    seoDescription:
      'Tratamento de canal (endodontia) em Belo Horizonte. Remoção de infecção, preservação do dente e alívio da dor na BS Odonto.',
    description:
      'Tratamento endodôntico para remover infecção, preservar o dente e aliviar a dor.',
  },
  {
    slug: 'cirurgia-de-siso',
    title: 'Cirurgia de Siso',
    seoTitle: 'Cirurgia de Siso em Belo Horizonte',
    seoDescription:
      'Cirurgia de siso em Belo Horizonte com avaliação clínica e radiográfica. Extração segura quando indicada na BS Odonto.',
    description:
      'Extração dos dentes siso quando há dor, inflamação, infecção ou falta de espaço na arcada.',
  },
  {
    slug: 'atendimento-infantil',
    title: 'Atendimento infantil',
    seoTitle: 'Odontopediatria em Belo Horizonte',
    seoDescription:
      'Odontopediatria em Belo Horizonte com foco em prevenção e saúde bucal infantil. Atendimento acolhedor para crianças na BS Odonto.',
    description:
      'Atendimento focado na saúde bucal infantil, com foco em prevenção e desenvolvimento saudável.',
  },
] as const

export type Treatment = (typeof treatments)[number]

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug)
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((t) => t.slug)
}
