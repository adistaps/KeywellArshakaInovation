'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'

export function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative w-full min-h-[720px] lg:h-[720px] bg-neutral-900 overflow-hidden font-sans flex items-center justify-center py-16 lg:py-0">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
        style={{ backgroundImage: `url('/bg-banner.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/40 lg:bg-black/20 z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">

        {/* Bagian Kiri: Chevron & Teks Utama */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:max-w-[550px] flex flex-col items-start"
        >
          {/* Subtitle / Company Name */}
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/80 mb-3 sm:mb-4 lg:ml-[72px]">
            PT. KEYWELL ARSHAKA - POWER TOOLS SOLUTIONS
          </span>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Ikon Chevron Merah/Kuning Solid */}
            <svg
              viewBox="0 0 48 56"
              fill="none"
              className="w-10 h-12 sm:w-14 sm:h-16 lg:w-16 lg:h-18 shrink-0"
            >
              <path d="M0 0L28 28L0 56H20L48 28L20 0H0Z" fill="#F5A200" />
            </svg>

            {/* Title Besar */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight lg:leading-none">
              Industrial Innovation
            </h1>
          </div>
        </motion.div>

        {/* Bagian Kanan: Glassmorphism Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-[480px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-10 lg:p-12 rounded-sm shadow-2xl mx-auto lg:mx-0"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 tracking-tight">
            Request a Free Quote
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mb-6 sm:mb-8 leading-relaxed">
            Konsultasikan kebutuhan produksi ODM, OEM, dan pasokan alat listrik profesional Anda.
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <Check size={48} className="text-[#F5A200] mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Pesan Terkirim!</h4>
              <p className="text-sm text-white/80 mb-6">
                Tim Keywell akan menghubungi Anda dalam 1-2 hari kerja.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-transparent border-none text-[#F5A200] font-bold text-sm cursor-pointer hover:underline"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-3 sm:space-y-4">
              {/* Input Nama */}
              <div className="relative">
                <input
                  required
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full bg-transparent border-b border-white/40 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Input Email */}
              <div className="relative">
                <input
                  required
                  type="email"
                  placeholder="Email Perusahaan"
                  className="w-full bg-transparent border-b border-white/40 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Select Kategori */}
              <div className="relative flex items-center justify-between border-b border-white/40">
                <select
                  required
                  defaultValue=""
                  className="w-full bg-transparent py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none appearance-none cursor-pointer [&>option]:text-black"
                >
                  <option value="" disabled className="text-gray-500">Pilih Kategori Produk</option>
                  <option value="Impact Tools">Impact Tools</option>
                  <option value="Reciprocating Saw">Reciprocating Saw</option>
                  <option value="Circular Saw & Jigsaw">Circular Saw & Jigsaw</option>
                  <option value="Rivet Gun">Rivet Gun</option>
                  <option value="ODM / OEM Custom">Layanan ODM / OEM</option>
                </select>
                <ChevronDown size={18} className="text-white/80 pointer-events-none absolute right-2" />
              </div>

              {/* Textarea Detail */}
              <div className="relative">
                <textarea
                  rows={1}
                  required
                  placeholder="Detail Kebutuhan Anda..."
                  className="w-full bg-transparent border-b border-white/40 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Tombol Submit */}
              <div className="pt-4 sm:pt-6 flex items-center justify-start">
                <button
                  type="submit"
                  className="group flex items-center gap-3 text-white font-bold text-sm hover:text-gray-200 transition-colors"
                >
                  <span>Submit Request</span>
                  <ArrowRight size={18} className="text-[#F5A200] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}