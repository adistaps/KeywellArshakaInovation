'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

const nav = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Products', '/products'],
  ['Why Choose Us', '/why-choose-us'],
  ['Contact', '/contact']
]

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
        {/* Logo */}
        <div className={`navbar-logo transition-opacity duration-200 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Link href="/" className="logo-nle" onClick={() => setMenuOpen(false)}>
            <img
              src="/logokey.webp"
              alt="Keywell Arshaka Innovation"
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main navigation">
          {nav.map(([name, url]) => {
            const isActive = pathname === url
            return (
              <Link
                key={name}
                href={url}
                className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
              >
                {isActive && (
                  <span className="navbar-active-arrow">
                    <ChevronRight size={18} strokeWidth={4} />
                  </span>
                )}
                {name}.
              </Link>
            )
          })}
        </nav>

        {/* Spacer (desktop) */}
        <div className="navbar-right-spacer" aria-hidden="true" />

        {/* Hamburger Button (mobile only) */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'mobile-menu-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Close backdrop */}
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <nav
          className={`mobile-menu-drawer ${menuOpen ? 'mobile-drawer-open' : ''}`}
          aria-label="Mobile navigation"
        >
          {/* Drawer Header */}
          <div className="mobile-menu-header">
            <span className="text-white font-bold text-sm tracking-widest uppercase opacity-80">Menu</span>
            <button
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="mobile-menu-list">
            {nav.map(([name, url], index) => {
              const isActive = pathname === url
              return (
                <li
                  key={name}
                  className="mobile-menu-item"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Link
                    href={url}
                    className={`mobile-menu-link ${isActive ? 'mobile-menu-link-active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mobile-menu-link-text">{name}</span>
                    {isActive && (
                      <ChevronRight
                        size={18}
                        strokeWidth={3}
                        className="mobile-menu-link-arrow"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Drawer Footer */}
          <div className="mobile-menu-footer">
            <p className="mobile-menu-footer-text">
              PT. Keywell Arshaka Innovation
            </p>
            <p className="mobile-menu-footer-sub">
              hello@keywellarshaka.com
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}