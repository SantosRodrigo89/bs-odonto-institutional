import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-offWhite px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Página não encontrada
        </h1>
        <p className="text-neutral-gray mb-8">
          A página que você procura não existe ou foi movida.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
