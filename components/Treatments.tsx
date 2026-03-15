import React from 'react'
import { LuActivity, LuSmile, LuStethoscope, LuBraces, LuBaby, LuLayers, LuScissors } from 'react-icons/lu'
import { FiMoon, FiSmile } from 'react-icons/fi'

const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

// Icon wrapper for consistent styling
function TreatmentIcon({ Icon }: { Icon: React.ComponentType<React.SVGAttributes<SVGElement>> }) {
  return (
    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mb-4">
      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
    </div>
  )
}

const treatments = [
  {
    title: 'DTM / Dor Orofacial',
    description:
      'Diagnóstico e tratamento das disfunções da articulação temporomandibular, com foco na função, alívio da dor e equilíbrio muscular.',
    Icon: LuActivity,
  },
  {
    title: 'Bruxismo',
    description:
      'Soluções personalizadas com placas oclusais e abordagens multidisciplinares para proteger seus dentes e melhorar sua qualidade de sono.',
    Icon: LuSmile,
  },
  {
    title: 'Ronco / Apneia',
    description:
      'Tratamento com aparelhos intraorais para controle do ronco e da apneia leve a moderada, promovendo melhor respiração e qualidade do sono.',
    Icon: FiMoon,
  },
  {
    title: 'Implantes dentários',
    description:
      'Reposição de dentes perdidos com implantes seguros e planejados individualmente, restaurando função e estética.',
    Icon: LuLayers,
  },
  {
    title: 'Reabilitação / Estética',
    description:
      'Transforme seu sorriso com procedimentos estéticos modernos, incluindo clareamento, facetas, harmonização facial, próteses totais e parciais.',
    Icon: FiSmile,
  },
  {
    title: 'Ortodontia',
    description:
      'Correção do alinhamento dentário e da mordida com aparelhos ortodônticos adequados a cada caso.',
    Icon: LuBraces,
  },
  {
    title: 'Tratamento de Canal',
    description:
      'Tratamento endodôntico para remover infecção, preservar o dente e aliviar a dor.',
    Icon: LuStethoscope,
  },
  {
    title: 'Cirurgia de Siso',
    description:
      'Extração dos dentes do siso quando há dor, inflamação, infecção ou falta de espaço na arcada.',
    Icon: LuScissors,
  },
  {
    title: 'Atendimento infantil',
    description:
      'Atendimento especializado para a saúde bucal infantil, com foco em prevenção e desenvolvimento saudável.',
    Icon: LuBaby,
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
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-secondary/20 hover:border-primary/20"
            >
              <TreatmentIcon Icon={treatment.Icon} />
              <h3 className="text-2xl font-bold text-primary mb-4">
                {treatment.title}
              </h3>
              <p className="text-neutral-gray mb-6 leading-relaxed">
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
