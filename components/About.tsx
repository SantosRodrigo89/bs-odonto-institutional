import Image from 'next/image'
import { dentists } from '@/lib/seo'

export default function About() {
  return (
    <section
      id="sobre"
      className="section-padding bg-white below-fold-section"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Nossos profissionais
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Profissionalismo, acolhimento e excelência em odontologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {dentists.map((dentist) => (
            <article key={dentist.name} className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={dentist.image}
                  alt={`${dentist.name} - ${dentist.specialty} na BS Odonto, Belo Horizonte`}
                  fill
                  sizes="256px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {dentist.name}
              </h3>
              <p className="text-neutral-gray mb-4">{dentist.specialty}</p>
              <p className="text-sm text-neutral-gray">CRO-MG: [{dentist.cro}]</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
