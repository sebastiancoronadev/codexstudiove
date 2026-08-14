export default function PageDivider({ variant = 'default' }: { variant?: string }) {
  if (variant === 'glow') {
    return (
      <div className="relative py-4 md:py-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent"></div>
        </div>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className="py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full h-px bg-zinc-900"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative py-6 md:py-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      </div>
    </div>
  )
}
