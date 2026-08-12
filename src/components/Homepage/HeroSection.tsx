'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShoppingCart, Headset } from 'lucide-react'

// Tambahkan properti 'bg' untuk memasukkan URL foto Anda nanti
const slides = [
  {
    id: 1,
    title: 'ODM & OEM\nDesign',
    bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: '20V Brushless\nMotor',
    bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: '20+ Years\nExpertise',
    bg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop'
  },
]

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1)

  // Efek Auto-Slide (Ganti setiap 5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1))
    }, 5000) // 5000 = 5 detik. Bisa Anda sesuaikan.

    // Membersihkan timer saat komponen di-unmount agar tidak bocor memory
    return () => clearInterval(timer)
  }, [])

  // Mendapatkan data slide yang sedang aktif
  const currentSlide = slides.find(slide => slide.id === activeSlide)

  return (
    <section className="hero-nle-wrapper">
      {/* Background Dinamis dengan Animasi Fade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeSlide} // Key berubah memicu animasi
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Durasi transisi fade 1 detik
          className="hero-nle-bg"
          style={{ backgroundImage: `url(${currentSlide?.bg})` }}
        />
      </AnimatePresence>

      {/* Overlay Gelap (Pindahkan keluar dari bg agar tidak ikut transisi berulang) */}
      <div className="hero-nle-overlay" />

      {/* Konten Utama di Tengah */}
      <div className="hero-nle-content-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-nle-inner"
        >
          <h1 className="hero-nle-title">
            Power Tools & <br /> Industrial Innovation
          </h1>

          <Link href="/products" className="btn-nle-red-pill">
            View More <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>

      {/* 3 Kotak Indikator di Kiri Bawah */}
      <div className="hero-nle-nav-boxes">
        {slides.map((slide) => (
          <button
            key={slide.id}
            className={`nav-box ${activeSlide === slide.id ? 'active-blur' : ''}`}
            // Jika user klik, auto-slide akan menimpa dari slide yang diklik
            onClick={() => setActiveSlide(slide.id)}
          >
            <span className="nav-box-num">0{slide.id}</span>
            <span className="nav-box-title">{slide.title}</span>
          </button>
        ))}
      </div>
    </section>
  )
}