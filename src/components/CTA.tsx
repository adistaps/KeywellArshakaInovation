import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative w-full bg-[#F5A200] py-20 px-6 md:px-16 font-sans text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-white/80 block mb-3">
            LET'S BUILD BETTER
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white m-0">
            Tools that work as hard as you do.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shrink-0 shadow-lg"
          style={{ color: '#F5A200' }}
        >
          Talk to Our Team <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
