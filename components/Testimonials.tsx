import React from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Excelente atendimento! Resolveram meu problema de bruxismo que me incomodava há anos.',
      rating: 5,
    },
    {
      name: 'João Santos',
      text: 'Profissionais muito competentes e acolhedores. Recomendo!',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      text: 'Tratamento de DTM foi um sucesso. Muito satisfeita com os resultados.',
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Depoimentos reais de quem confia na gente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-offWhite p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-neutral-gray mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-primary font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-gray mb-4">
            Veja mais depoimentos no Google
          </p>
          <a
            href="https://www.google.com/search?q=Consultório+Odontológico+BS+Belo+Horizonte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
          >
            Ver avaliações no Google
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
      </div>
    </section>
  )
}
