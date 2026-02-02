import React from "react"

const differentials = [
  {
    icon: '🤝',
    title: 'Atendimento acolhedor',
    description: 'Ambiente confortável e profissionais dedicados ao seu bem-estar',
  },
  {
    icon: '🎯',
    title: 'Especialização em dor orofacial',
    description: 'Experiência comprovada no tratamento de DTM e dores faciais',
  },
  {
    icon: '💻',
    title: 'Tecnologia moderna',
    description: 'Equipamentos de última geração para tratamentos eficazes',
  },
]

export default function Differentials() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-offWhite">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher a BS Odonto?
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Diferenciais que fazem a diferença no seu tratamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            >
              <div className="text-5xl mb-4">{differential.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {differential.title}
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
