import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section
      className="relative w-full pt-28 pb-12 md:pt-40 md:pb-20 px-4 sm:px-6 md:px-16 font-sans text-white overflow-hidden border-b border-white/10"
      style={{ backgroundColor: '#0A1628' }}
    >

      {/* Subtle Radial Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#F5A200]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Breadcrumbs: Ditambahkan flex-wrap & shrink-0 agar jika judul panjang tidak merusak alur di HP */}
        <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs md:text-sm text-gray-300 font-semibold mb-3 md:mb-4">
          <Link href="/" className="hover:text-[#F5A200] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#F5A200] shrink-0" />
          <span className="text-[#F5A200] font-bold">{crumb}</span>
          <ChevronRight size={14} className="text-white/40 shrink-0" />
          <span className="text-white/80">{title}</span>
        </div>

        {/* Title: Diperkecil di HP dari text-4xl ke text-3xl agar tidak terlalu dominan */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h1>
      </div>
    </section>
  )
}