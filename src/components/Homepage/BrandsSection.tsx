'use client'

import { motion } from 'framer-motion'

const brands = [
  'FESTOOL',
  'BOSCH',
  'HILTI',
  'INGERSOLL RAND',
  'Clas Ohlson',
  'Einhell',
  'Sealey',
  'Hyundai'
]

export function BrandsSection() {
  return (
    <section className="relative w-full bg-white font-sans">
      <div className="w-full bg-gray-200 border-y border-gray-200 grid grid-cols-2 lg:grid-cols-4 gap-[1px]">
        {brands.map((name, idx) => (
          <motion.div
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative bg-white h-[180px] md:h-[240px] flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-[#F5A200] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)'
              }}
            />
            <span className="relative z-10 text-xl md:text-3xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 text-center tracking-tight">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}