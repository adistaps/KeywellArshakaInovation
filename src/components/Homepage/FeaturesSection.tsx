'use client'

import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

const features = [
  {
    id: '01',
    title: 'Impact Tools',
    desc: 'Impact Driver & Impact Wrench 20V Brushless Motor dengan 1/2" square drive untuk beban kerja berat.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g fill="#F5A200">
          <polygon points="24,2 32,10 24,16 16,10" />
          <polygon points="46,24 38,16 32,24 38,32" />
          <polygon points="24,46 32,38 24,32 16,38" />
          <polygon points="2,24 10,16 16,24 10,32" />
        </g>
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Reciprocating Saw',
    desc: 'Gergaji cordless 20V dengan panjang stroke 22mm dan kontrol kecepatan variabel untuk pemotongan presisi.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g fill="#F5A200">
          <polygon points="28,4 44,4 44,20 36,12 28,20" />
          <polygon points="12,20 28,20 28,36 20,28 12,36" />
          <polygon points="20,12 36,12 28,4" />
          <polygon points="36,28 44,20 44,36" />
        </g>
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Circular Saw & Jigsaw',
    desc: 'Circular Saw 165mm/185mm blade dan Jigsaw aksi pendulum 20V untuk efisiensi pemotongan maksimal.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g fill="#F5A200">
          <rect x="20" y="2" width="8" height="6" transform="rotate(0 24 5)" />
          <rect x="20" y="2" width="8" height="6" transform="rotate(60 24 24)" />
          <rect x="20" y="2" width="8" height="6" transform="rotate(120 24 24)" />
          <rect x="20" y="2" width="8" height="6" transform="rotate(180 24 24)" />
          <rect x="20" y="2" width="8" height="6" transform="rotate(240 24 24)" />
          <rect x="20" y="2" width="8" height="6" transform="rotate(300 24 24)" />
        </g>
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Rivet Gun & AI Tools',
    desc: 'Cordless Rivet Gun 2.4-4.8mm serta pengembangan alat bertenaga AI otonom hasil kolaborasi global.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g fill="#F5A200">
          <polygon points="4,4 20,4 4,20" />
          <polygon points="44,4 28,4 44,20" />
          <polygon points="44,44 28,44 44,28" />
          <polygon points="4,44 20,44 4,28" />
        </g>
      </svg>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section className="relative w-full bg-[#F3F4F6] border-y border-[#E5E7EB] overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex-1 min-h-[420px] p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB] last:border-r-0 transition-colors duration-300 hover:bg-[#E5E7EB] group"
          >
            {/* Bagian Atas: Ikon di Kanan */}
            <div className="flex justify-end w-full">
              <div className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
            </div>

            {/* Bagian Bawah: Judul & Deskripsi sejajar bawah */}
            <div className="mt-auto space-y-4">
              <h3 className="text-[26px] font-bold text-[#1A1A1A] tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#555555]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}