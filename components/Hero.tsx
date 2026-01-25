import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export default function Hero() {
  return (
    <section id="inicio" className="section-padding pt-32 md:pt-40 bg-gradient-to-b from-neutral-offWhite to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Seu sorriso é a nossa especialidade.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray mb-8 leading-relaxed">
              Tratamentos personalizados para eliminar a dor, restaurar a função e transformar o seu sorriso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={whatsappUrl}
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

          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/beatriz-silvia.jpeg"
                alt="Dra. Beatriz Alvarenga e Dra. Sílvia Santos - BS Odonto"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
