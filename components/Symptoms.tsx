'use client'

import React from 'react'
import { LuActivity } from 'react-icons/lu'
import { LuSmile } from 'react-icons/lu'
import { FiMoon } from 'react-icons/fi'
import { FiSmile } from 'react-icons/fi'

const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

const symptomCards = [
  {
    icon: LuActivity,
    title: 'Dor na face ou mandíbula',
    category: 'Disfunções da ATM',
    items: [
      'Desconforto constante ou ao mastigar',
      'Estalos na articulação (ATM)',
      'Limitação na abertura da boca',
      'Dificuldade para abrir ou movimentar a mandíbula',
      'Dor de cabeça recorrente ao acordar',
    ],
  },
  {
    icon: LuSmile,
    title: 'Apertamento ou ranger dos dentes',
    category: 'Bruxismo',
    items: [
      'Pode ocorrer durante o sono ou ao longo do dia',
      'Desgaste dental',
      'Dentes encurtados, fraturas ou sensibilidade',
      'Dor muscular ao acordar',
      'Tensão na face e no pescoço',
    ],
  },
  {
    icon: FiMoon,
    title: 'Sono e Respiração',
    category: 'Sono e Respiração',
    items: [
      'Ronco frequente',
      'Alterações respiratórias',
      'Sono não reparador',
      'Cansaço ao acordar',
    ],
  },
  {
    icon: FiSmile,
    title: 'Reabilitação e Estética',
    category: 'Reabilitação e Estética',
    items: [
      'Ausência de dentes',
      'Desgaste severo dos dentes',
      'Insatisfação com a estética do sorriso',
    ],
  },
]

function IconCircle({ Icon }: { Icon: React.ComponentType<React.SVGAttributes<SVGElement>> }) {
  return (
    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
    </div>
  )
}

export default function Symptoms() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sintomas que merecem avaliação odontológica especializada
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Alguns sinais podem indicar alterações funcionais ou estruturais que exigem diagnóstico preciso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {symptomCards.map((card, index) => (
            <div
              key={index}
              className="bg-neutral-offWhite p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconCircle Icon={card.icon} />
                <div>
                  <span className="text-sm font-medium text-primary/80 uppercase tracking-wide">
                    {card.category}
                  </span>
                  <h3 className="text-xl font-semibold text-primary">
                    {card.title}
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 text-neutral-gray leading-relaxed flex-1">
                {card.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
