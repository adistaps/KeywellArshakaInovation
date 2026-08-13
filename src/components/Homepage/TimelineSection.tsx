'use client'

import { motion } from 'framer-motion'

// Array asli dipertahankan
const milestones = [
  { category: 'Our Beginings', year: '2002', text: 'Xinju Tools didirikan sebagai produsen alat listrik R&D terkemuka' },
  { category: 'Expansion', year: '2016', text: 'Xinju Tools mulai ekspansi manufaktur dan jangkauan pasar internasional' },
  { category: 'Collaboration', year: '2020', text: 'Xinju Tools berkolaborasi dengan Keywell Ark Holdings membentuk Keywell Arshaka' },
  { category: 'Establishment', year: '2024', text: 'PT. Keywell Arshaka Innovation resmi didirikan di Indonesia' },
  { category: 'Future Vision', year: '2026', text: '(Rencana) Fasilitas manufaktur operasional penuh di Jakarta' }
]

export function TimelineSection() {
  return (
    <section
      className="relative w-full flex flex-col lg:flex-row font-sans min-h-[600px] lg:min-h-[800px] overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >

      {/* KOLOM KIRI: Daftar Timeline */}
      <div className="w-full lg:w-1/2 py-12 sm:py-16 lg:py-20 px-5 sm:px-8 md:px-16 lg:pl-[10%] xl:pl-[15%] flex flex-col justify-center">
        <div className="w-full max-w-lg">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-8 sm:mb-10 lg:mb-12 last:mb-0"
            >
              {/* Judul Kategori */}
              <h4 className="text-white font-bold text-base sm:text-[17px] mb-2 sm:mb-3">
                {item.category}
              </h4>

              {/* Garis Pembatas Putih */}
              <hr className="border-t border-white/20 mb-4 sm:mb-6 lg:mb-8" />

              {/* Konten Tahun, Panah, dan Deskripsi */}
              <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
                {/* Tahun Besar */}
                <span className="text-4xl sm:text-5xl md:text-[72px] font-bold text-white tracking-tighter w-[85px] sm:w-[120px] md:w-[150px] shrink-0 leading-none">
                  {item.year}
                </span>

                {/* Ikon Chevron Orange Solid */}
                <svg viewBox="0 0 48 56" fill="none" className="w-4 h-5 sm:w-6 sm:h-7 shrink-0 mt-0.5">
                  <path d="M0 0L28 28L0 56H20L48 28L20 0H0Z" fill="#F5A200" />
                </svg>

                {/* Teks Deskripsi */}
                <p className="text-gray-300 text-xs sm:text-[13px] md:text-sm leading-relaxed flex-1 lg:max-w-[220px]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* KOLOM KANAN: Gambar dengan Potongan Sudut (Clip Path) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 min-h-[280px] sm:min-h-[360px] lg:min-h-full bg-cover bg-center relative [clip-path:polygon(40px_0,100%_0,100%_100%,0_100%,0_40px)] lg:[clip-path:polygon(80px_0,100%_0,100%_100%,0_100%,0_80px)]"
        style={{
          backgroundImage: `url('/bgtimeline.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

    </section>
  )
}