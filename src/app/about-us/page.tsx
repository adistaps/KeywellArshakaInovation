'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Globe2, Plus, Minus } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CTA } from '@/components/CTA'
import { MarqueeSection } from '@/components/Homepage/MarqueeSection'
import { TeamSection } from '@/components/Homepage/TeamSection'
import { BrandsSection } from '@/components/Homepage/BrandsSection'

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } }
}

const milestones = [
  { year: '2002', text: 'Xinju Tools didirikan, produsen alat listrik R&D terkemuka' },
  { year: '2016', text: 'Xinju Tools mulai merencanakan & mengeksekusi ekspansi manufaktur luar negeri' },
  { year: '2020', text: 'Xinju Tools berkolaborasi dengan Keywell Ark Holdings membentuk Keywell Arshaka' },
  { year: '2021', text: 'Mulai proses pemilihan lokasi strategis pabrik manufaktur di Indonesia' },
  { year: '2024', text: 'PT. Keywell Arshaka Innovation resmi didirikan di Indonesia' },
  { year: '2026', text: '(Rencana) Keywell Arshaka Innovation beroperasi penuh secara lokal & global' }
]

const bannerSlides = [
  {
    id: 1,
    title: 'Precision\nEngineering',
    bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Global\nDistribution',
    bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Sustainable\nProduction',
    bg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop'
  }
]

export default function Page() {
  const [activeTimeline, setActiveTimeline] = useState<number>(0)
  const [activeSlide, setActiveSlide] = useState<number>(1)

  // Fungsi next slide
  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === bannerSlides.length ? 1 : prev + 1))
  }, [])

  // Efek Auto-Slide untuk Banner (Ganti setiap 5 detik)
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const currentSlide = bannerSlides.find((slide) => slide.id === activeSlide)

  return (
    <main className="bg-white font-sans overflow-hidden">
      <PageHero title="About Us" crumb="Company" />

      {/* STORY SECTION */}
      <section className="py-12 md:py-20 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-4 sm:mb-6">
              New energy.<br />
              <em className="not-italic text-[#F5A200]">Deep experience.</em>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              PT. Keywell Arshaka Innovation adalah fasilitas produsen alat listrik baru yang didirikan pada tahun 2024.
            </p>
            <div className="w-16 h-1 bg-[#F5A200] rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="lg:col-span-7 space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            <p>
              Meskipun fasilitas ini baru, tim kami terdiri dari 2 kekuatan besar yang sudah sangat berpengalaman dalam pembuatan produk serta pemasaran alat listrik tingkat internasional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
              <div className="p-5 sm:p-6 bg-[#F4F6F8] border border-gray-200">
                <div className="mb-3 sm:mb-4 text-black flex items-center">
                  <Zap size={26} className="text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Xinju Tools</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Tim ahli dengan pengalaman <strong>20+ tahun</strong> berfokus pada penelitian, pengembangan (R&D), dan produksi alat listrik berkualitas tinggi.
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-[#F4F6F8] border border-gray-200">
                <div className="mb-3 sm:mb-4 text-black flex items-center">
                  <Globe2 size={26} className="text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Keywell Ark Holdings</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Grup jaringan bisnis global yang berpengalaman luas memasarkan alat listrik secara internasional ke berbagai belahan dunia.
                </p>
              </div>
            </div>

            <p className="pt-2">
              Tujuan utama kami adalah memecahkan kebutuhan pengguna akhir profesional akan alat listrik berkinerja tinggi, aman, dan tahan lama untuk menunjang pekerjaan terberat di lapangan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BANNER AUTO-SLIDE SECTION */}
      <section className="relative w-full h-[480px] sm:h-[500px] md:h-[550px] overflow-hidden bg-black flex flex-col justify-end">
        {/* Background Dinamis */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide?.bg})` }}
          />
        </AnimatePresence>

        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-transparent z-0" />

        {/* Konten (Judul & Kotak Navigasi) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pb-8 sm:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">

          {/* Judul Kiri */}
          <motion.h2
            key={`title-${activeSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl"
          >
            Advanced Manufacturing <br className="hidden sm:inline" />
            With Global Reach
          </motion.h2>

          {/* Kotak Navigasi Kanan (Responsif untuk Layar Kecil) */}
          <div className="flex gap-2.5 sm:gap-4 overflow-x-auto pb-1 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {bannerSlides.map((slide) => {
              const isActive = activeSlide === slide.id
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(slide.id)}
                  aria-label={`Slide ${slide.id}: ${slide.title.replace('\n', ' ')}`}
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 shrink-0 flex flex-col justify-between p-2.5 sm:p-3 md:p-5 text-left transition-all duration-300 backdrop-blur-sm
                    ${isActive
                      ? 'bg-[#0A1628] border-none shadow-lg scale-100 sm:scale-105'
                      : 'bg-black/40 border border-white/20 hover:bg-white/10'
                    }`}
                >
                  <span className="self-end text-xs sm:text-sm md:text-base font-bold text-white">
                    0{slide.id}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight whitespace-pre-line">
                    {slide.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION (Accordion) */}
      <section className="pb-16 sm:pb-24 pt-12 sm:pt-16 px-6 md:px-16 border-t border-white/10 bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Timeline */}
          <div className="mb-8 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              A timeline of <em className="not-italic text-[#F5A200]">intent.</em>
            </h2>
          </div>

          {/* Table / List Header (Sembunyi di Mobile Sangat Kecil) */}
          <div className="hidden sm:grid grid-cols-12 gap-6 pb-4 border-b border-white/20 text-white/70 text-xs sm:text-sm font-semibold tracking-wide">
            <div className="col-span-4">Year</div>
            <div className="col-span-8">Milestones</div>
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col">
            {milestones.map((item, idx) => {
              const isActive = activeTimeline === idx

              return (
                <div
                  key={item.year}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => setActiveTimeline(isActive ? -1 : idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveTimeline(isActive ? -1 : idx)
                    }
                  }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5 sm:py-8 border-b border-white/10 items-start cursor-pointer group hover:bg-white/[0.03] transition-colors duration-300 outline-none"
                >
                  {/* Bagian Tahun (Kiri) */}
                  <div className="sm:col-span-4 flex items-center">
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold transition-colors duration-300 ${isActive ? 'text-[#F5A200] sm:text-white' : 'text-white/90 group-hover:text-white'}`}>
                      {item.year}
                    </h3>
                  </div>

                  {/* Bagian Teks & Ikon (Kanan) */}
                  <div className="sm:col-span-8 flex justify-between items-start gap-4 sm:gap-8">
                    <div className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                      <p>{item.text}</p>

                      {/* Detail ekspansi accordion */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 12 : 0
                        }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/60 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                          Langkah strategis ini menandai komitmen kami untuk menghadirkan kualitas tingkat dunia, mendobrak batasan inovasi, dan memenuhi permintaan pasar global dengan standar produksi tertinggi.
                        </p>
                      </motion.div>
                    </div>

                    {/* Icon Expand/Collapse */}
                    <div className="shrink-0 mt-1">
                      {isActive ? (
                        <Minus className="text-[#F5A200]" size={24} strokeWidth={2} />
                      ) : (
                        <Plus className="text-white group-hover:text-[#F5A200] transition-colors duration-300" size={24} strokeWidth={2} />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <MarqueeSection />

      {/* TEAM SECTION */}
      <TeamSection />

      {/* BRAND LOGOS SECTION */}
      <BrandsSection />

      <CTA />
    </main>
  )
}