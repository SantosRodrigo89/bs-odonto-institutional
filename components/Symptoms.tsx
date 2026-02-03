import React from "react"

const symptoms = [
  { 
    icon: '😮',
    title: 'Insatisfeito com a estética dos seus dentes',
    description: 'Deseja melhorar o sorriso e a aparência facial',
  },
  {
    icon: '😖',
    title: 'Dor de dente',
    description: 'Sensibilidade ou dor persistente nos dentes',
  },
  {
    icon: '😤',
    title: 'Falha de dentes',
    description: 'Limitação no movimento da mandíbula',
  },
  {
    icon: '😣',
    title: 'Dor na face ou mandíbula',
    description: 'Desconforto constante que afeta seu dia a dia',
  },
  {
    icon: '😬',
    title: 'Bruxismo',
    description: 'Ranger ou apertar os dentes durante o sono ou mesmo durante o dia',
  },
  {
    icon: '🔊',
    title: 'Estalos na ATM',
    description: 'Sons ao abrir ou fechar a boca',
  },
  {
    icon: '🤕',
    title: 'Dor de cabeça',
    description: 'Cefaleias frequentes relacionadas à ATM',
  },
  {
    icon: '😴',
    title: 'Ronco',
    description: 'Problemas respiratórios durante o sono',
  },
  {
    icon: '🦷',
    title: 'Desgaste dentário',
    description: 'Dentes desgastados ou fraturados',
  }
]

export default function Symptoms() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Você tem algum desses problemas?
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Estes são sinais que podem indicar a necessidade de tratamento especializado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-neutral-offWhite p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            >
              <div className="text-5xl mb-4 text-center">{symptom.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-center">
                {symptom.title}
              </h3>
              <p className="text-neutral-gray text-center">
                {symptom.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
