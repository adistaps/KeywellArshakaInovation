'use client'

import { motion } from 'framer-motion'

// Array asli dipertahankan, ditambahkan properti 'category' untuk menyesuaikan desain referensi
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
      className="relative w-full flex flex-col lg:flex-row font-sans min-h-[800px] overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >

      {/* KOLOM KIRI: Daftar Timeline */}
      <div className="w-full lg:w-1/2 py-20 px-8 md:px-16 lg:pl-[10%] xl:pl-[15%] flex flex-col justify-center">
        <div className="w-full max-w-lg">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-12 last:mb-0"
            >
              {/* Judul Kategori */}
              <h4 className="text-white font-bold text-[17px] mb-3">
                {item.category}
              </h4>

              {/* Garis Pembatas Putih */}
              <hr className="border-t border-white/20 mb-8" />

              {/* Konten Tahun, Panah, dan Deskripsi */}
              <div className="flex items-center gap-6 md:gap-10">
                {/* Tahun Besar */}
                <span className="text-5xl md:text-[72px] font-bold text-white tracking-tighter w-[120px] md:w-[150px] shrink-0 leading-none">
                  {item.year}
                </span>

                {/* Ikon Chevron Orange Solid */}
                <svg width="24" height="28" viewBox="0 0 48 56" fill="none" className="shrink-0 mt-1">
                  <path d="M0 0L28 28L0 56H20L48 28L20 0H0Z" fill="#F5A200" />
                </svg>

                {/* Teks Deskripsi */}
                <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed max-w-[220px]">
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
        className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/bgtimeline.jpg')`,
          clipPath: 'polygon(80px 0, 100% 0, 100% 100%, 0 100%, 0 80px)'
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

    </section>
  )
}