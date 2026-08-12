'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'

export function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative w-full h-[700px] bg-neutral-900 overflow-hidden font-sans flex items-center">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
        style={{ backgroundImage: `url('/bg-banner.jpg')` }} // Sesuaikan dengan path gambar latar Anda
      />
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Bagian Kiri Bawah: Chevron Merah & Teks Besar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute bottom-16 left-8 md:left-16 z-10 flex flex-col items-start"
      >
        <span className="text-sm font-semibold tracking-widest text-white/80 mb-4 ml-[88px]">
          PT. KEYWELL ARSHAKA - POWER TOOLS SOLUTIONS
        </span>
        <div className="flex items-center gap-6">
          {/* Ikon Chevron Merah Solid (Persis seperti referensi) */}
          <svg width="64" height="72" viewBox="0 0 48 56" fill="none" className="shrink-0">
            <path d="M0 0L28 28L0 56H20L48 28L20 0H0Z" fill="#F5A200" />
          </svg>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
            Industrial Innovation
          </h1>
        </div>
      </motion.div>

      {/* Bagian Kanan: Glassmorphism Form Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-full max-w-[480px] bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-12 z-10 rounded-sm shadow-2xl"
      >
        <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">
          Request a Free Quote
        </h3>
        <p className="text-sm text-white/80 mb-8 leading-relaxed">
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
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
            {/* Input Gaya Minimalis (Hanya garis bawah) */}
            <div className="relative">
              <input
                required
                type="text"
                placeholder="Nama Lengkap"
                className="w-full bg-transparent border-b border-white/40 py-4 text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="relative">
              <input
                required
                type="email"
                placeholder="Email Perusahaan"
                className="w-full bg-transparent border-b border-white/40 py-4 text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="relative flex items-center justify-between border-b border-white/40">
              <select
                required
                defaultValue=""
                className="w-full bg-transparent py-4 text-white focus:outline-none appearance-none cursor-pointer [&>option]:text-black"
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

            <div className="relative">
              <textarea
                rows={1}
                required
                placeholder="Detail Kebutuhan Anda..."
                className="w-full bg-transparent border-b border-white/40 py-4 text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            {/* Tombol Submit Kiri (Sesuai Referensi) */}
            <div className="pt-6 flex items-center justify-start">
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

    </section>
  )
}