'use client'

import React, { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'

const faqItems = [
  {
    question: 'Quando é necessário extrair o siso?',
    answer:
      'A extração é indicada quando há dor, inflamação, infecção, falta de espaço ou risco de desalinhamento dos demais dentes. A avaliação clínica e radiográfica define a necessidade.',
  },
  {
    question: 'Implante dentário dói?',
    answer:
      'O procedimento é realizado com anestesia local e planejamento individualizado. O pós-operatório costuma ser leve e controlável com medicação adequada.',
  },
  {
    question: 'Quanto tempo dura um tratamento ortodôntico?',
    answer:
      'A duração varia conforme o grau de desalinhamento e a resposta biológica de cada paciente. Em média, o tratamento pode durar de 12 a 24 meses.',
  },
  {
    question: 'Quando é necessário refazer um tratamento de canal?',
    answer:
      'O retratamento pode ser indicado quando há infecção persistente, dor recorrente ou falha na vedação anterior.',
  },
  {
    question: 'Bruxismo tem cura?',
    answer:
      'O bruxismo pode ser controlado com placas oclusais personalizadas e acompanhamento funcional, protegendo os dentes e reduzindo a sobrecarga muscular.',
  },
  {
    question: 'Ronco pode ser tratado pelo dentista?',
    answer:
      'Em casos leves a moderados, aparelhos intraorais podem auxiliar no controle do ronco e da apneia do sono, melhorando a respiração e a qualidade do sono.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Tire suas dúvidas sobre procedimentos e tratamentos
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-offWhite rounded-2xl shadow-md border border-secondary/20 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-neutral-dark pr-4">
                  {item.question}
                </span>
                <LuChevronDown
                  className={`w-6 h-6 shrink-0 text-primary transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-neutral-gray leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
