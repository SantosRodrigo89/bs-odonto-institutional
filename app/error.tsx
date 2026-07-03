'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-offWhite px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Algo deu errado
        </h1>
        <p className="text-neutral-gray mb-8">
          Não foi possível carregar a página. Tente novamente ou entre em
          contato pelo WhatsApp.
        </p>
        <button type="button" onClick={reset} className="btn-primary">
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
