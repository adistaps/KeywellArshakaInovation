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
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // Mendapatkan data slide yang sedang aktif
  const currentSlide = slides.find(slide => slide.id === activeSlide)

  return (
    /* Tinggi hero di HP dipangkas lebih pendek lagi (50vh, min-height 360px) */
    <section className="hero-nle-wrapper max-md:h-[50vh] max-md:min-h-[360px]">
      {/* Background Dinamis dengan Animasi Fade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="hero-nle-bg"
          style={{ backgroundImage: `url(${currentSlide?.bg})` }}
        />
      </AnimatePresence>

      {/* Overlay Gelap */}
      <div className="hero-nle-overlay" />

      {/* Konten Utama di Tengah */}
      <div className="hero-nle-content-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-nle-inner"
        >
          {/* Ukuran font diperkecil lagi ke text-xl di HP */}
          <h1 className="hero-nle-title max-md:text-xl max-md:leading-snug">
            Power Tools & <br /> Industrial Innovation
          </h1>

          <Link href="/products" className="btn-nle-red-pill max-md:text-xs max-md:py-2 max-md:px-4">
            View More <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>

      {/* 3 Kotak Indikator di Kiri Bawah */}
      <div className="hero-nle-nav-boxes">
        {slides.map((slide) => (
          <button
            key={slide.id}
            className={`nav-box ${activeSlide === slide.id ? 'active-blur' : ''}`}
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