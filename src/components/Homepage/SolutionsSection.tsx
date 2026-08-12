'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    num: '01',
    title: 'Tool Engineering & ODM/OEM Design',
    desc: 'Perancangan dan rekayasa alat listrik kustom (baik ODM dan OEM) yang disesuaikan secara presisi berdasarkan kebutuhan teknis dan spesifikasi lapangan pelanggan.'
  },
  {
    num: '02',
    title: 'Sub-Supplier Sourcing & QC',
    desc: 'Mengumpulkan dan mengaudit rantai pasok sub-pemasok komponen berstandar tinggi untuk menjamin konsistensi kualitas material dan daya tahan produk.'
  },
  {
    num: '03',
    title: 'Mass Assembly & Production',
    desc: 'Fasilitas manufaktur mutakhir untuk perakitan dan produksi massal alat listrik 20V bertenaga brushless dengan inspeksi kualitas ketat di setiap lini.'
  },
  {
    num: '04',
    title: 'Global Distribution & Support',
    desc: 'Jaringan pemasaran internasional dan dukungan purna jual profesional untuk memastikan operasional pelanggan berjalan tanpa hambatan di 9+ pasar dunia.'
  }
]

export function SolutionsSection() {
  return (
    <section 
      className="w-full text-white py-20 px-6 md:px-16 font-sans"
      style={{ backgroundColor: '#0A1628' }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section (Menyerupai Referensi) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-5xl md:text-[64px] font-bold leading-[1.1] tracking-tight text-white m-0">
            Solutions That<br />Make Changes
          </h2>

          <button className="bg-[#F5A200] text-white px-7 py-3 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#D98B00] transition-colors shrink-0">
            View More <ArrowRight size={18} />
          </button>
        </div>

        {/* List Grid Section */}
        <div className="flex flex-col w-full border-b border-white/20">
          {solutions.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col lg:flex-row items-start lg:items-center py-10 lg:py-14 border-t border-white/20 gap-6 lg:gap-12"
            >
              {/* Kolom Angka (Efek Striped Red) */}
              <div
                className="text-7xl lg:text-[100px] font-black tracking-tighter w-full lg:w-[20%] shrink-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(180deg, #F5A200, #F5A200 6px, transparent 6px, transparent 11px)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: '0.8',
                  paddingBottom: '10px' // Mencegah kliping bawah
                }}
              >
                {item.num}
              </div>

              {/* Kolom Judul */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white w-full lg:w-[40%] leading-snug">
                {item.title}
              </h3>

              {/* Kolom Deskripsi */}
              <div className="w-full lg:w-[40%]">
                <p className="text-[13px] lg:text-sm text-gray-300 leading-relaxed font-medium">
                  *{item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}