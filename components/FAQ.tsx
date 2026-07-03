import { LuChevronDown } from 'react-icons/lu'
import { faqItems } from '@/data/faqItems'

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding bg-white below-fold-section"
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
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group bg-neutral-offWhite rounded-2xl shadow-md border border-secondary/20 overflow-hidden"
            >
              <summary className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer list-none hover:bg-white/50 transition-colors [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-neutral-dark pr-4">
                  {item.question}
                </span>
                <LuChevronDown
                  className="w-6 h-6 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-neutral-gray leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
