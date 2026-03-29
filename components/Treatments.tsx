import React from 'react'

const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

const treatments = [
  {
    title: 'DTM / Dor Orofacial',
    description:
      'Diagnóstico e tratamento das disfunções da articulação temporomandibular, com foco na função, alívio da dor e equilíbrio muscular.',
  },
  {
    title: 'Bruxismo',
    description:
      'Soluções personalizadas com placas oclusais e abordagens multidisciplinares para proteger seus dentes e melhorar sua qualidade de sono.',
  },
  {
    title: 'Ronco / Apneia',
    description:
      'Tratamento com aparelhos intraorais para controle do ronco e da apneia leve a moderada, promovendo melhor respiração e qualidade do sono.',
  },
  {
    title: 'Implantes dentários',
    description:
      'Reposição de dentes perdidos com implantes seguros e planejados individualmente, restaurando função e estética.',
  },
  {
    title: 'Reabilitação / Estética',
    description:
      'Transforme seu sorriso com procedimentos estéticos modernos, incluindo clareamento, facetas, próteses totais e parciais.',
  },
  {
    title: 'Ortodontia',
    description:
      'Correção do alinhamento dentário e da mordida com aparelhos ortodônticos adequados a cada caso.',
  },
  {
    title: 'Tratamento de Canal',
    description:
      'Tratamento endodôntico para remover infecção, preservar o dente e aliviar a dor.',
  },
  {
    title: 'Cirurgia de Siso',
    description:
      'Extração dos dentes siso quando há dor, inflamação, infecção ou falta de espaço na arcada.',
  },
  {
    title: 'Atendimento infantil',
    description:
      'Atendimento focado na saúde bucal infantil, com foco em prevenção e desenvolvimento saudável.',
  },
]

export default function Treatments() {
  return (
    <section id="tratamentos" className="section-padding bg-gradient-to-b from-white to-neutral-offWhite">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Tratamentos
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Atendimento personalizado com foco em saúde, função e estética
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-secondary/20 hover:border-primary/20 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {treatment.title}
              </h3>
              <p className="text-neutral-gray mb-6 leading-relaxed flex-1">
                {treatment.description}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
              >
                Saiba mais
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
