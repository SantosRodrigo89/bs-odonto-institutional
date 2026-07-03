export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-neutral-offWhite"
      role="status"
      aria-live="polite"
      aria-label="Carregando página"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"
          aria-hidden="true"
        />
        <p className="text-neutral-gray text-sm">Carregando...</p>
      </div>
    </div>
  )
}
