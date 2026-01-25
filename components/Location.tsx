import React from "react"

const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export default function Location() {
  const address = 'Rua Pedra Preciosa 55A, Belo Horizonte – MG, 31570-580'
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Venha nos visitar em Belo Horizonte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div className="bg-neutral-offWhite p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Informações de Contato
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold text-neutral-dark mb-1">Endereço</p>
                  <p className="text-neutral-gray">{address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <p className="font-semibold text-neutral-dark mb-1">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    (31) 98528-0016
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">🕒</span>
                <div>
                  <p className="font-semibold text-neutral-dark mb-1">Horário de Funcionamento</p>
                  <p className="text-neutral-gray">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Traçar rota
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279646.8971501937!2d-43.984829844039844!3d-19.812447529039225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68f0063b9f393%3A0x17ce29c9de361fac!2sConsult%C3%B3rio%20Odontol%C3%B3gico%20BS!5e1!3m2!1spt-BR!2sbr!4v1769356573922!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização BS Odonto - Consultório Odontológico"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
