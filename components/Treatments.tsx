import { treatments } from '@/data/treatments'
import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

export default function Treatments() {
  return (
    <section
      id="tratamentos"
      className="section-padding bg-gradient-to-b from-white to-neutral-offWhite"
      aria-labelledby="treatments-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2
            id="treatments-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Nossos Tratamentos
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Atendimento personalizado com foco em saúde, função e estética
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment) => (
            <article
              key={treatment.slug}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-secondary/20 hover:border-primary/20 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {treatment.title}
              </h3>
              <p className="text-neutral-gray mb-6 leading-relaxed flex-1">
                {treatment.description}
              </p>
              <Link
                href={`/tratamentos/${treatment.slug}`}
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
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={siteConfig.whatsappUrl}
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
