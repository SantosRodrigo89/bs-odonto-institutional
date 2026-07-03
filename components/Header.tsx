'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { navItems } from '@/lib/navigation'
import { siteConfig } from '@/lib/seo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-hidden ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-neutral-offWhite/95 backdrop-blur-sm'
      }`}
    >
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

          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-neutral-gray hover:text-primary font-medium transition-colors py-1"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              onClick={closeMobileMenu}
            >
              Agendar avaliação
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
