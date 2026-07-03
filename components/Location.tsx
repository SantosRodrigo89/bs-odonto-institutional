import { FiMapPin, FiPhone, FiClock, FiExternalLink } from 'react-icons/fi'
import { siteConfig } from '@/lib/seo'

export default function Location() {
  return (
    <section
      id="contato"
      className="section-padding bg-white below-fold-section"
      aria-labelledby="location-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2
            id="location-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Nossa Localização
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Venha nos visitar em Belo Horizonte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-offWhite p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Informações de Contato
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <FiMapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark mb-1">
                    Endereço
                  </p>
                  <address className="not-italic text-neutral-gray">
                    {siteConfig.fullAddress}
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <FiPhone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    (31) 98528-0016
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <FiClock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-dark mb-1">
                    Horário de atendimento
                  </p>
                  <p className="text-neutral-gray">
                    Atendimento de segunda a sexta
                  </p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Traçar rota
              </a>
            </div>
          </div>

          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden shadow-md min-h-[400px] bg-primary/5 border border-secondary/20 flex flex-col items-center justify-center p-8 text-center hover:bg-primary/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label={`Ver localização da BS Odonto no Google Maps: ${siteConfig.fullAddress}`}
          >
            <div
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              aria-hidden="true"
            >
              <FiMapPin className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-primary mb-2">
              Consultório Odontológico BS
            </p>
            <p className="text-neutral-gray mb-4">{siteConfig.fullAddress}</p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold">
              Abrir no Google Maps
              <FiExternalLink className="w-5 h-5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
