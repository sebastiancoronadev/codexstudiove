export default function PageDivider({ variant = 'default' }: { variant?: 'default' | 'glow' | 'minimal' | 'wave' | 'diagonal' }) {
  if (variant === 'glow') {
    return (
      <div className="relative py-4 md:py-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent blur-sm"></div>
        </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className="py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full h-px bg-zinc-900"></div>
        </div>
    )
  }

  if (variant === 'wave') {
    return (
      <div className="relative py-6 md:py-12 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-8 md:h-16 text-black transform rotate-180"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,37.3C240,74,480,74,720,37.3C960,0.7,1200,0.7,1440,37.3L1440,74L0,74Z" />
        </svg>
      </div>
    )
  }

  if (variant === 'diagonal') {
    return (
      <div className="relative py-8 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-pink/5 to-transparent transform -skew-y-3"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent transform -skew-y-3"></div>
        </div>
    )
  }

  return (
    <div className="relative py-6 md:py-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      </div>
  )
}
