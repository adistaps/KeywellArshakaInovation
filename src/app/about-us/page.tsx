'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Zap, Globe2, ShieldCheck, Plus, Minus } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CTA } from '@/components/CTA'

// Mengimpor komponen dari folder Homepage sesuai struktur
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
  const [activeSlide, setActiveSlide] = useState(1)

  // Efek Auto-Slide untuk Banner (Ganti setiap 5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === bannerSlides.length ? 1 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const currentSlide = bannerSlides.find(slide => slide.id === activeSlide)

  return (
    <main className="bg-white font-sans overflow-hidden">
      <PageHero title="About Us" crumb="Company" />

      {/* STORY SECTION */}
      <section className="py-20 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-6">
              New energy.<br />
              <em className="not-italic text-[#F5A200]">Deep experience.</em>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              PT. Keywell Arshaka Innovation adalah fasilitas produsen alat listrik baru yang didirikan pada tahun 2024.
            </p>
            <div className="w-16 h-1 bg-[#F5A200] rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
            className="lg:col-span-7 space-y-6 text-gray-600 text-base leading-relaxed"
          >
            <p>
              Meskipun fasilitas ini baru, tim kami terdiri dari 2 kekuatan besar yang sudah sangat berpengalaman dalam pembuatan produk serta pemasaran alat listrik tingkat internasional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-[#F4F6F8] border border-gray-200">
                <div className="mb-4 text-black flex items-center">
                  <Zap size={28} className="text-black" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Xinju Tools</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tim ahli dengan pengalaman <strong>20+ tahun</strong> berfokus pada penelitian, pengembangan (R&D), dan produksi alat listrik berkualitas tinggi.
                </p>
              </div>

              <div className="p-6 bg-[#F4F6F8] border border-gray-200">
                <div className="mb-4 text-black flex items-center">
                  <Globe2 size={28} className="text-black" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Keywell Ark Holdings</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
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
      {/* BANNER AUTO-SLIDE SECTION (Mengikuti Desain Referensi) */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden bg-black flex flex-col justify-end">
        {/* Background Dinamis */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide?.bg})` }}
          />
        </AnimatePresence>

        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Konten (Judul & Kotak Navigasi) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Judul Kiri */}
          <motion.h2
            key={`title-${activeSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl"
          >
            Advanced Manufacturing <br />
            With Global Reach
          </motion.h2>

          {/* Kotak Navigasi Kanan */}
          <div className="flex gap-4">
            {bannerSlides.map((slide) => {
              const isActive = activeSlide === slide.id
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(slide.id)}
                  className={`w-24 h-24 md:w-32 md:h-32 flex flex-col justify-between p-3 md:p-5 text-left transition-all duration-300 backdrop-blur-sm
                    ${isActive
                      ? 'bg-[#0A1628] border-none shadow-lg scale-105'
                      : 'bg-black/20 border border-white/30 hover:bg-white/10'
                    }`}
                >
                  <span className="self-end text-sm md:text-base font-bold text-white">
                    0{slide.id}
                  </span>
                  <span className="text-sm font-bold text-white leading-tight whitespace-pre-line">
                    {slide.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION (Accordion) */}
      <section 
        className="pb-24 pt-16 px-6 md:px-16 border-t border-white/10"
        style={{ backgroundColor: '#0A1628' }}
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Header Timeline */}
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              A timeline of <em className="not-italic text-[#F5A200]">intent.</em>
            </h2>
          </div>

          {/* Table / List Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-white/20 text-white/70 text-sm font-semibold tracking-wide">
            <div className="md:col-span-4">Year</div>
            <div className="md:col-span-8">Milestones</div>
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col">
            {milestones.map((item, idx) => {
              const isActive = activeTimeline === idx;

              return (
                <div
                  key={item.year}
                  onClick={() => setActiveTimeline(isActive ? -1 : idx)}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-white/10 items-start cursor-pointer group hover:bg-white/[0.03] transition-colors duration-300"
                >
                  {/* Bagian Tahun (Kiri) */}
                  <div className="md:col-span-4 flex items-center h-full">
                    <h3 className={`text-3xl md:text-4xl font-extrabold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                      {item.year}
                    </h3>
                  </div>

                  {/* Bagian Teks & Ikon (Kanan) */}
                  <div className="md:col-span-8 flex justify-between items-start gap-8">
                    <div className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
                      <p>{item.text}</p>

                      {/* Konten detail opsional saat expand */}
                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 16 : 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 text-base font-normal">
                          Langkah strategis ini menandai komitmen kami untuk menghadirkan kualitas tingkat dunia, mendobrak batasan inovasi, dan memenuhi permintaan pasar global dengan standar produksi tertinggi.
                        </p>
                      </motion.div>
                    </div>

                    {/* Icon Expand/Collapse */}
                    <div className="shrink-0 mt-1">
                      {isActive ? (
                        <Minus className="text-[#F5A200]" size={28} strokeWidth={2} />
                      ) : (
                        <Plus className="text-white group-hover:text-[#F5A200] transition-colors duration-300" size={28} strokeWidth={2} />
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