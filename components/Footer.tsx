import Image from 'next/image'
import Link from 'next/link'
import { FiMessageCircle, FiInstagram } from 'react-icons/fi'
import { footerNavItems } from '@/lib/navigation'
import { siteConfig } from '@/lib/seo'

export default function Footer() {
  return (
    <footer className="bg-primary text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="BS Odonto - Clínica odontológica em Belo Horizonte"
              width={80}
              height={80}
              className="mb-4 rounded-lg"
              loading="lazy"
            />
            <p className="text-white/90 mb-4">
              Seu sorriso é nossa especialidade.
            </p>
            <p className="text-white/80 text-sm">
              Especialistas em DTM, Bruxismo, Ronco/Apneia e Odontologia
              Estética
            </p>
            <p className="text-white/80 text-sm mt-2">
              Atendimento de segunda a sexta
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-xl font-bold mb-4">Links Rápidos</h2>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xl font-bold mb-4">Contato</h2>
            <address className="not-italic text-white/80 mb-2 text-sm">
              {siteConfig.fullAddress}
            </address>
            <div className="mt-4 space-y-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <FiMessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                WhatsApp: (31) 98528-0016
              </a>
              <div>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <FiInstagram className="w-5 h-5 shrink-0" aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} BS Odonto. Todos os direitos
            reservados.
          </p>
          <p className="mt-1 text-white/80 text-sm">
            Feito por{' '}
            <a
              href="https://github.com/SantosRodrigo89"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition"
            >
              Rodrigo Vieira
            </a>{' '}
            |{' '}
            <a
              href="https://www.linkedin.com/in/rodrigo-v-b9ba696a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
