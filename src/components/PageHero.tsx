import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section 
      className="relative w-full pt-36 pb-20 px-6 md:px-16 font-sans text-white overflow-hidden border-b border-white/10"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Subtle Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A200]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold mb-4">
          <Link href="/" className="hover:text-[#F5A200] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#F5A200]" />
          <span className="text-[#F5A200] font-bold">{crumb}</span>
          <ChevronRight size={14} className="text-white/40" />
          <span className="text-white/80">{title}</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h1>
      </div>
    </section>
  )
}
