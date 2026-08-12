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
        <div className="flex flex-col px-8 py-16 xl:p-16 min-h-[450px]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
              <img src="/footer.webp" alt="Keywell Arshaka Innovation" className="h-12 w-auto object-contain" />
            </Link>

            <p className="!text-white text-[15px] leading-relaxed max-w-[280px]" style={{ color: '#ffffff' }}>
              Professional power tools built for the people who build the world. Fasilitas manufaktur mutakhir alat listrik presisi tinggi.
            </p>
          </div>

          <div className="mt-auto pt-16">
            <div className="flex items-center gap-6 mb-6">
              <Link href="#" aria-label="Website" className="!text-white hover:!text-[#F5A200] transition-colors" style={{ color: '#ffffff' }}>
                <Globe2 size={20} color="#ffffff" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="!text-white hover:!text-[#F5A200] transition-colors" style={{ color: '#ffffff' }}>
                <BriefcaseBusiness size={20} color="#ffffff" />
              </Link>
              <Link href="#" aria-label="Email" className="!text-white hover:!text-[#F5A200] transition-colors" style={{ color: '#ffffff' }}>
                <Mail size={20} color="#ffffff" />
              </Link>
            </div>

            <p className="!text-white text-sm leading-relaxed max-w-[220px]" style={{ color: '#ffffff' }}>
              All Rights Reserved © 2026<br />
              PT. Keywell Arshaka Innovation
            </p>
          </div>
        </div>

        {/* KOLOM 2: Quick Links */}
        <div className="flex flex-col px-8 py-16 xl:p-16">
          <div className="flex items-center gap-3 mb-10">
            <OrangeChevron />
            <h4 className="!text-white font-bold text-[19px] tracking-wide" style={{ color: '#ffffff' }}>Quick Links</h4>
          </div>
          <ul className="flex flex-col gap-5">
            <li><Link href="/" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Home</Link></li>
            <li><Link href="/about-us" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>About Us</Link></li>
            <li><Link href="/products" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Products</Link></li>
            <li><Link href="/why-choose-us" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Why Choose Us</Link></li>
            <li><Link href="/contact" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* KOLOM 3: Categories */}
        <div className="flex flex-col px-8 py-16 xl:p-16">
          <div className="flex items-center gap-3 mb-10">
            <OrangeChevron />
            <h4 className="!text-white font-bold text-[19px] tracking-wide" style={{ color: '#ffffff' }}>Categories</h4>
          </div>
          <ul className="flex flex-col gap-5">
            <li><Link href="/products" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Impact Tools</Link></li>
            <li><Link href="/products" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Reciprocating Saw</Link></li>
            <li><Link href="/products" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Circular Saw</Link></li>
            <li><Link href="/products" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Jigsaw 20V</Link></li>
            <li><Link href="/products" className="!text-white hover:!text-[#F5A200] transition-colors text-[15px] font-medium" style={{ color: '#ffffff' }}>Rivet Gun</Link></li>
          </ul>
        </div>

        {/* KOLOM 4: Contact */}
        <div className="flex flex-col px-8 py-16 xl:p-16 relative">
          <div className="flex items-center gap-3 mb-10">
            <OrangeChevron />
            <h4 className="!text-white font-bold text-[19px] tracking-wide" style={{ color: '#ffffff' }}>Contact</h4>
          </div>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <MapPin size={20} color="#F5A200" className="shrink-0 mt-0.5" />
              <span className="!text-white text-[15px] leading-relaxed font-medium" style={{ color: '#ffffff' }}>Jakarta, Indonesia</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} color="#F5A200" className="shrink-0" />
              <span className="!text-white text-[15px] font-medium" style={{ color: '#ffffff' }}>+62 21 0000 0000</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} color="#F5A200" className="shrink-0" />
              <span className="!text-white text-[15px] font-medium" style={{ color: '#ffffff' }}>hello@keywellarshaka.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Scroll Up Button Kanan Bawah */}
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll to top"
        className="absolute right-4 bottom-4 z-20 w-10 h-10 bg-[#F5A200] text-white flex items-center justify-center hover:bg-[#D98B00] transition-colors rounded-sm hidden md:flex shadow-lg"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>

    </footer>
  )
}