'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Data titik lokasi di peta
const mapPins = [
  {
    id: 1,
    x: 220, // Kiri atas (Amerika Utara)
    y: 200,
    title: 'Main Factory & HQ',
    address: 'Kawasan Industri Utama, Jakarta, Indonesia',
    mapUrl: 'https://maps.google.com/?q=Jakarta+Indonesia',
    image: '/factory-placeholder.jpg' // Ganti dengan path gambar pabrik/container Anda
  },
  { id: 2, x: 500, y: 350 }, // Titik merah acak lainnya (Amerika Selatan)
  { id: 3, x: 750, y: 150 }, // Eropa/Rusia
  { id: 4, x: 600, y: 250 }, // Timur Tengah/Afrika
  { id: 5, x: 350, y: 400 }, // Acak bawah
]

export function LocationMapSection() {
  const [activePin, setActivePin] = useState<number | null>(null)

  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 font-sans relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

        {/* KOLOM KIRI: Peta Interaktif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 relative flex justify-center items-center"
        >
          {/* Peta Dotted SVG (Placeholder representasi visual) */}
          <svg
            className="w-full max-w-[800px] h-auto opacity-20"
            viewBox="0 0 1000 500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Generator pola dot sederhana untuk merepresentasikan peta dunia */}
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle fill="#000" cx="5" cy="5" r="2"></circle>
            </pattern>
            {/* Bentuk kasar benua (Amerika Utara, Selatan, Eropa/Afrika, Asia/Aussie) */}
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
                {/* Lingkaran Merah */}
                <div
                  className="w-5 h-5 bg-[#F5A200] rounded-full cursor-pointer pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform shadow-[0_0_10px_rgba(239,56,43,0.5)]"
                  onMouseEnter={() => pin.title && setActivePin(pin.id)}
                  onMouseLeave={() => setActivePin(null)}
                />

                {/* Pop-up Card (Hanya muncul jika ada title dan sedang di-hover) */}
                <AnimatePresence>
                  {activePin === pin.id && pin.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-20 flex bg-[#F5A200] text-white shadow-xl pointer-events-auto cursor-pointer"
                      style={{
                        left: '20px',
                        top: '-40px',
                        width: '320px', // Mengatur lebar box gabungan
                      }}
                      onClick={() => window.open(pin.mapUrl, '_blank')}
                      onMouseEnter={() => setActivePin(pin.id)} // Menjaga pop-up tetap terbuka saat di-hover
                      onMouseLeave={() => setActivePin(null)}
                    >
                      {/* Bagian Gambar Kiri */}
                      <div
                        className="w-[120px] shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${pin.image})`, backgroundColor: '#333' }}
                      />
                      {/* Bagian Teks Kanan */}
                      <div className="p-4 flex-1">
                        <h4 className="text-sm font-bold mb-1 leading-tight">{pin.title}</h4>
                        <p className="text-xs text-white/90 leading-tight">
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
          <h2 className="text-5xl md:text-[64px] font-bold text-gray-900 tracking-tight leading-none mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-md">
            Hubungi tim ahli kami untuk mendiskusikan kemitraan manufaktur alat listrik, pertanyaan teknis, atau permintaan sampel produk.
          </p>

          <div className="mb-10">
            <span className="block text-gray-800 font-semibold text-lg mb-2">Support Centar</span>
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
              +62 21 0000 0000
            </div>
          </div>

          {/* Grid Informasi Tambahan (Location & Email) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <strong className="block text-gray-900 font-bold text-lg mb-3">Our Location</strong>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">
                Kawasan Industri Utama, Jakarta, Indonesia
              </p>
            </div>
            <div>
              <strong className="block text-gray-900 font-bold text-lg mb-3">Write to Us</strong>
              <p className="text-gray-500 text-sm leading-relaxed mb-1">
                Senin – Jumat, 08:00 – 17:00 WIB
              </p>
              <a href="mailto:hello@keywellarshaka.com" className="text-gray-500 text-sm hover:text-[#F5A200] transition-colors">
                hello@keywellarshaka.com
              </a>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  )
}