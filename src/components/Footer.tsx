'use client'

import Link from 'next/link'
import { ArrowUp, Globe2, BriefcaseBusiness, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const OrangeChevron = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1">
      <path d="M0 0L12 12L0 24L7 24L19 12L7 0Z" fill="#F5A200" />
    </svg>
  )

  return (
    <footer
      className="relative w-full font-sans text-white"
      style={{ backgroundColor: '#0A1628' }}
    >

      {/* Grid 4 Kolom */}
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/10 border-t border-white/10">

        {/* KOLOM 1: Logo, Deskripsi, Socials, & Copyright */}
        <div className="flex flex-col px-6 py-8 md:py-10 xl:p-10 justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <img src="/footer.webp" alt="Keywell Arshaka Innovation" className="h-10 w-auto object-contain" />
            </Link>

            <p className="text-white/90 text-sm leading-relaxed max-w-[280px]">
              Professional power tools built for the people who build the world. Fasilitas manufaktur mutakhir alat listrik presisi tinggi.
            </p>
          </div>

          <div className="pt-8 md:pt-10">
            <div className="flex items-center gap-5 mb-4">
              <Link href="#" aria-label="Website" className="text-white hover:text-[#F5A200] transition-colors">
                <Globe2 size={18} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-white hover:text-[#F5A200] transition-colors">
                <BriefcaseBusiness size={18} />
              </Link>
              <Link href="#" aria-label="Email" className="text-white hover:text-[#F5A200] transition-colors">
                <Mail size={18} />
              </Link>
            </div>

            <p className="text-white/70 text-xs leading-relaxed max-w-[220px]">
              All Rights Reserved © 2026<br />
              PT. Keywell Arshaka Innovation
            </p>
          </div>
        </div>

        {/* KOLOM 2: Quick Links */}
        <div className="flex flex-col px-6 py-8 md:py-10 xl:p-10">
          <div className="flex items-center gap-2.5 mb-6">
            <OrangeChevron />
            <h4 className="text-white font-bold text-lg tracking-wide">Quick Links</h4>
          </div>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="/" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Home</Link></li>
            <li><Link href="/about-us" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">About Us</Link></li>
            <li><Link href="/products" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Products</Link></li>
            <li><Link href="/why-choose-us" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Why Choose Us</Link></li>
            <li><Link href="/contact" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Contact Us</Link></li>
          </ul>
        </div>

        {/* KOLOM 3: Categories */}
        <div className="flex flex-col px-6 py-8 md:py-10 xl:p-10">
          <div className="flex items-center gap-2.5 mb-6">
            <OrangeChevron />
            <h4 className="text-white font-bold text-lg tracking-wide">Categories</h4>
          </div>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="/products" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Impact Tools</Link></li>
            <li><Link href="/products" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Reciprocating Saw</Link></li>
            <li><Link href="/products" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Circular Saw</Link></li>
            <li><Link href="/products" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Jigsaw 20V</Link></li>
            <li><Link href="/products" className="text-white/90 hover:text-[#F5A200] transition-colors text-sm font-medium">Rivet Gun</Link></li>
          </ul>
        </div>

        {/* KOLOM 4: Contact */}
        <div className="flex flex-col px-6 py-8 md:py-10 xl:p-10 relative">
          <div className="flex items-center gap-2.5 mb-6">
            <OrangeChevron />
            <h4 className="text-white font-bold text-lg tracking-wide">Contact</h4>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3.5">
              <MapPin size={18} color="#F5A200" className="shrink-0 mt-0.5" />
              <span className="text-white/90 text-sm leading-relaxed font-medium">Jakarta, Indonesia</span>
            </li>
            <li className="flex items-center gap-3.5">
              <Phone size={18} color="#F5A200" className="shrink-0" />
              <span className="text-white/90 text-sm font-medium">+62 21 0000 0000</span>
            </li>
            <li className="flex items-center gap-3.5">
              <Mail size={18} color="#F5A200" className="shrink-0" />
              <span className="text-white/90 text-sm font-medium">hello@keywellarshaka.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Scroll Up Button Kanan Bawah */}
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll to top"
        className="absolute right-4 bottom-4 z-20 w-9 h-9 bg-[#F5A200] text-white hidden md:flex items-center justify-center hover:bg-[#D98B00] transition-colors rounded-xs shadow-lg"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>

    </footer>
  )
}