import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

const treatments = [
  {
    title: 'DTM / Dor Orofacial',
    description:
      'Tratamento especializado para disfunções temporomandibulares e dores faciais, restaurando a função e eliminando o desconforto.',
    icon: '🎯',
  },
  {
    title: 'Bruxismo',
    description:
      'Soluções personalizadas com placas oclusais e abordagens multidisciplinares para proteger seus dentes e melhorar sua qualidade de sono.',
    icon: '😴',
  },
  {
    title: 'Odontologia Estética',
    description:
      'Transforme seu sorriso com procedimentos estéticos modernos, incluindo clareamento, facetas, harmonização facial, próteses totais e parciais.',
    icon: '✨',
  },
  {
    title: 'Ronco / Apneia',
    description:
      'Tratamento com aparelhos intraorais para ronco e apneia do sono, melhorando sua respiração e qualidade de vida.',
    icon: '🌙',
  },
  {
    title: 'Tratamento de canal',
    description:
      'Procedimentos avançados para salvar dentes comprometidos, aliviando a dor e restaurando a saúde bucal.',
    icon: '🦷',
  },
  {
    title: 'Aparelhos ortodônticos',
    description:
      'Correção de alinhamento dentário e mordida com opções modernas de aparelhos, proporcionando um sorriso saudável e bonito.',
    icon: '📐',
  },
  {
    title: 'Implantes dentários',
    description:
      'Soluções de implantes para substituir dentes perdidos, restaurando a função mastigatória e a estética do sorriso.',
    icon: '🔩',
  },
  { title: "Cirurgia de ciso", 
    description: "Procedimento cirúrgico para correção de problemas estruturais da mandíbula e maxilar.",
    icon: "🩺",
  },
  {
    title: 'Atendimento infantil',
    description: 'Cuidados especializados para a saúde bucal de crianças, promovendo hábitos saudáveis e prevenindo problemas futuros.',
    icon: '👶',
  }
]

export default function Treatments() {
  return (
    <section id="tratamentos" className="section-padding bg-gradient-to-b from-white to-neutral-offWhite">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Tratamentos
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Especialização em tratamentos que transformam vidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary/20 hover:border-primary/30"
            >
              <div className="text-5xl mb-4">{treatment.icon}</div>
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

        <div className="text-center mt-12">
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
