'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Data titik lokasi di peta
const mapPins = [
  {
    id: 1,
    x: 220, // Kiri atas
    y: 200,
    title: 'Main Factory & HQ',
    address: 'Kawasan Industri Utama, Jakarta, Indonesia',
    mapUrl: 'https://maps.google.com/?q=Jakarta+Indonesia',
    image: '/factory-placeholder.jpg'
  },
  { id: 2, x: 500, y: 350 },
  { id: 3, x: 750, y: 150 },
  { id: 4, x: 600, y: 250 },
  { id: 5, x: 350, y: 400 },
]

export function LocationMapSection() {
  const [activePin, setActivePin] = useState<number | null>(null)

  // Toggle pin untuk klik/tap (Support Touchscreen Mobile & Hover Desktop)
  const handlePinToggle = (pinId: number) => {
    setActivePin((prev) => (prev === pinId ? null : pinId))
  }

  return (
    <section className="w-full bg-white py-12 md:py-24 px-5 sm:px-8 md:px-16 font-sans relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

        {/* KOLOM KIRI: Peta Interaktif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 relative flex justify-center items-center py-4"
        >
          {/* Peta Dotted SVG */}
          <svg
            className="w-full max-w-[800px] h-auto opacity-20"
            viewBox="0 0 1000 500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle fill="#000" cx="5" cy="5" r="2"></circle>
            </pattern>
            <path d="M100,100 Q300,50 400,200 Q200,300 100,100 Z" fill="url(#dots)" />
            <path d="M250,250 Q400,300 300,500 Q150,450 250,250 Z" fill="url(#dots)" />
            <path d="M450,150 Q650,50 750,250 Q600,450 450,150 Z" fill="url(#dots)" />
            <path d="M700,100 Q950,100 900,350 Q800,450 700,100 Z" fill="url(#dots)" />
            <path d="M800,350 Q950,300 900,500 Q750,450 800,350 Z" fill="url(#dots)" />
          </svg>

          {/* Titik Merah (Pins) dan Pop-up Interaktif */}
          <div className="absolute inset-0 w-full max-w-[800px] mx-auto pointer-events-none">
            {mapPins.map((pin) => (
              <div
                key={pin.id}
                className="absolute"
                style={{ left: `${(pin.x / 1000) * 100}%`, top: `${(pin.y / 500) * 100}%` }}
              >
                {/* Lingkaran Merah/Kuning */}
                <div
                  className="w-4 h-4 sm:w-5 sm:h-5 bg-[#F5A200] rounded-full cursor-pointer pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform shadow-[0_0_10px_rgba(245,162,0,0.6)]"
                  onMouseEnter={() => pin.title && setActivePin(pin.id)}
                  onClick={() => pin.title && handlePinToggle(pin.id)}
                />

                {/* Pop-up Card Responsive */}
                <AnimatePresence>
                  {activePin === pin.id && pin.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute z-30 flex bg-[#F5A200] text-white shadow-2xl pointer-events-auto cursor-pointer rounded-sm overflow-hidden"
                      style={{
                        left: '50%',
                        bottom: 'calc(100% + 12px)',
                        transform: 'translateX(-50%)',
                        width: 'min(280px, 75vw)', // Fleksibel di layar HP sempit
                      }}
                      onClick={() => window.open(pin.mapUrl, '_blank')}
                      onMouseEnter={() => setActivePin(pin.id)}
                      onMouseLeave={() => setActivePin(null)}
                    >
                      {/* Bagian Gambar Kiri */}
                      <div
                        className="w-[90px] sm:w-[110px] shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${pin.image})`, backgroundColor: '#333' }}
                      />
                      {/* Bagian Teks Kanan */}
                      <div className="p-3 sm:p-4 flex-1">
                        <h4 className="text-xs sm:text-sm font-bold mb-1 leading-tight">{pin.title}</h4>
                        <p className="text-[11px] sm:text-xs text-white/90 leading-tight">
                          {pin.address}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* KOLOM KANAN: Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5 flex flex-col"
        >
          <h2 className="text-3xl sm:text-5xl md:text-[64px] font-bold text-gray-900 tracking-tight leading-tight mb-4 md:mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-500 text-xs sm:text-[15px] leading-relaxed mb-6 md:mb-10 max-w-md">
            Hubungi tim ahli kami untuk mendiskusikan kemitraan manufaktur alat listrik, pertanyaan teknis, atau permintaan sampel produk.
          </p>

          <div className="mb-8 md:mb-10">
            <span className="block text-gray-800 font-semibold text-base sm:text-lg mb-1 sm:mb-2">Support Center</span>
            <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              +62 21 0000 0000
            </div>
          </div>

          {/* Grid Informasi Tambahan (Location & Email) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <strong className="block text-gray-900 font-bold text-base sm:text-lg mb-1.5 sm:mb-3">Our Location</strong>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[220px]">
                Kawasan Industri Utama, Jakarta, Indonesia
              </p>
            </div>
            <div>
              <strong className="block text-gray-900 font-bold text-base sm:text-lg mb-1.5 sm:mb-3">Write to Us</strong>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-1">
                Senin – Jumat, 08:00 – 17:00 WIB
              </p>
              <a href="mailto:hello@keywellarshaka.com" className="text-gray-500 text-xs sm:text-sm hover:text-[#F5A200] transition-colors break-all">
                hello@keywellarshaka.com
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}