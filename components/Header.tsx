import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/lib/navigation'
import { siteConfig } from '@/lib/seo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-white/95 backdrop-blur-sm shadow-sm">
      <nav
        className="container-custom px-4 md:px-6 lg:px-8 py-4"
        aria-label="Navegação principal"
      >
        <div className="flex items-center justify-between">
          <Link href="#inicio" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="BS Odonto - Clínica odontológica em Belo Horizonte"
              width={84}
              height={84}
              className="rounded-lg shadow-sm"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-gray hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar avaliação
            </a>
          </div>

          <details className="md:hidden relative">
            <summary
              className="list-none p-2 rounded-lg cursor-pointer [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menu de navegação"
            >
              <svg
                className="w-6 h-6 text-neutral-dark"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-56 bg-white shadow-lg rounded-xl p-4 space-y-4 border border-secondary/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-neutral-gray hover:text-primary font-medium transition-colors py-1"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center w-full"
              >
                Agendar avaliação
              </a>
            </div>
          </details>
        </div>
      </nav>
    </header>
  )
}
