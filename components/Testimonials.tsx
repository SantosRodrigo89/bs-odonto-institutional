import { LuStar } from 'react-icons/lu'

const testimonials = [
  {
    name: 'Sanzio F F (San)',
    text: 'A Dr Silvia é uma pessoa fantástica! Tranquiliza a gente, muito atenciosa e profissional! A secretaria Monica é muito educada e gentil. Recomendo demais ! Deus abençoe 🙏🏽',
    rating: 5,
  },
  {
    name: 'Paula Souza',
    text: 'Dra Sílvia é uma super profissional, dedicada e nos passa uma calma e segurança recomendo demais a clínica , Mônica sempre muito paciente e atenciosa nota 100000000',
    rating: 5,
  },
  {
    name: 'Mozart Gabriel Rocha',
    text: 'Eu consulto sempre com a Doutora Beatriz, e ela sempre foi muito carinhosa, calma, compreensiva e acima de tudo, direta e sem demoras.',
    rating: 5,
  },
  {
    name: 'Shirlei Lovisi',
    text: 'Excelentes profissionais super indico',
    rating: 5,
  },
  {
    name: 'Ademir Oliveira',
    text: 'Atendimento Sensacional, Beatriz e Silvia!',
    rating: 5,
  },
  {
    name: 'Luiz Carlos',
    text: 'Local bonito bem decorado muito limpinho percebe-se um grande asseio profissionais muito competentes',
    rating: 5,
  },
] as const

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            O que nossos pacientes dizem
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Depoimentos reais de quem confia na gente
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:auto-rows-fr">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="bg-neutral-offWhite p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-secondary/20 h-full flex flex-col"
            >
              <div
                className="flex gap-1 mb-4"
                role="img"
                aria-label={`${testimonial.rating} de 5 estrelas`}
              >
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <LuStar
                    key={i}
                    className="w-5 h-5 text-primary fill-primary/30"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-neutral-gray mb-4 italic leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="text-primary font-semibold">
                — {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-gray mb-4">
            Veja mais depoimentos no Google
          </p>
          <a
            href="https://share.google/d91F6fjQNPMp94lT9"
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
              aria-hidden="true"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
