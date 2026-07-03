import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="section-padding pt-32 md:pt-40 bg-gradient-to-b from-neutral-offWhite to-white"
      aria-labelledby="hero-heading"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
            >
              Seu sorriso é nossa especialidade.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray mb-8 leading-relaxed">
              Clínica odontológica em Belo Horizonte com atendimento
              personalizado para DTM, bruxismo, ronco, apneia do sono,
              implantes, ortodontia e estética dental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Agendar avaliação
              </a>
              <Link
                href="#tratamentos"
                className="btn-secondary text-lg px-8 py-4"
              >
                Conheça nossos tratamentos
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/beatriz-silvia.jpeg"
                alt="Dra. Beatriz Alvarenga e Dra. Sílvia Santos - BS Odonto, clínica odontológica em Belo Horizonte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/30 rounded-full blur-2xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
