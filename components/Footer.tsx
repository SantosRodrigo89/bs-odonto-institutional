import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531985280016&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export default function Footer() {
  return (
    <footer className="bg-primary text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Slogan */}
          <div>
            <Image
              src="/images/logo.png"
              alt="BS Odonto Logo"
              width={80}
              height={80}
              className="mb-4 rounded-lg"
            />
            <p className="text-white/90 mb-4">
              Seu sorriso é a nossa especialidade.
            </p>
            <p className="text-white/80 text-sm">
              Especialistas em DTM, Bruxismo, Ronco/Apneia e Odontologia Estética
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#tratamentos" className="text-white/80 hover:text-white transition-colors">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-white/80 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-white/80 mb-2 text-sm">
              Rua Pedra Preciosa 55A<br />
              Belo Horizonte – MG<br />
              31570-580
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors"
              >
                <span className="mr-2">💬</span>
                WhatsApp: (31) 98528-0016
              </a>
              <div>
                <a
                  href="https://www.instagram.com/bs_odonto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <span className="mr-2">📷</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} BS Odonto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
