'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const nav = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Products', '/products'],
  ['Why Choose Us', '/why-choose-us'],
  ['Contact', '/contact']
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="site-header-nle">
      {/* 1. Logo bergaya geometris seperti referensi gambar */}
      <div className="logo-container">
        <Link className="logo-nle" href="/">
          <img src="/logokey.webp" alt="Keywell Arshaka Innovation" className="h-10 w-auto object-contain" />
        </Link>
      </div>

      {/* 2. Navigasi Tengah */}
      <nav className="desktop-nav-nle">
        {nav.map(([name, url]) => {
          // Ganti kondisi ini sesuai kebutuhan routing Anda
          const isActive = pathname === url || (name === 'Home' && pathname === '/')

          return (
            <Link key={name} href={url} className={`nav-link-nle ${isActive ? 'active' : ''}`}>
              {/* Panah merah sejajar di KIRI teks */}
              {isActive && (
                <span className="active-arrow">
                  <ChevronRight size={20} strokeWidth={4} />
                </span>
              )}
              {name}.
            </Link>
          )
        })}
      </nav>

      {/* 3. Spacer kosong di kanan agar menu Navigasi tetap 100% di tengah */}
      <div className="right-spacer" aria-hidden="true"></div>
    </header>
  )
}