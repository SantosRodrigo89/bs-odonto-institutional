'use client'

import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { faqItems } from '@/data/faqItems'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="section-padding bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Perguntas frequentes
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Tire suas dúvidas sobre procedimentos e tratamentos
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div
                key={item.question}
                className="bg-neutral-offWhite rounded-2xl shadow-md border border-secondary/20 overflow-hidden"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-semibold text-neutral-dark pr-4">
                      {item.question}
                    </span>
                    <LuChevronDown
                      className={`w-6 h-6 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-neutral-gray leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
