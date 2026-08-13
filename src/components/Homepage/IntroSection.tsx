'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function IntroSection() {
  return (
    <section className="intro-nle-section max-md:py-10 max-md:px-4">
      <div className="container">
        <div className="intro-nle-grid max-md:flex max-md:flex-col max-md:gap-8">
          {/* Kolom Kiri: Teks & Tombol */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="intro-nle-content"
          >
            <h2 className="intro-nle-heading max-md:text-2xl max-md:leading-tight max-md:mb-4">
              World-Class <br />
              Manufacturing & <br />
              Power Tools
            </h2>

            {/* Ditambahkan text-justify agar rata kanan-kiri di Mobile & Desktop */}
            <div className="intro-nle-text-wrap text-justify max-md:text-sm max-md:leading-relaxed max-md:space-y-3">
              <p>
                PT. Keywell Arshaka Innovation adalah fasilitas produsen alat listrik baru yang
                didirikan pada tahun 2024. Didukung oleh kolaborasi 2 tim ahli: <strong>Xinju Tools</strong> (pengalaman 20+ tahun R&D dan manufaktur alat listrik)
                dan <strong>Keywell Ark Holdings</strong> (pemasaran internasional).
              </p>
              <p>
                Tujuan utama kami adalah memecahkan kebutuhan pengguna akhir profesional akan alat
                listrik berkinerja tinggi, aman, serta memiliki daya tahan luar biasa di berbagai
                industri.
              </p>
            </div>

            {/* Menggunakan class pill button merah seperti di Hero */}
            <Link href="/about-us" className="btn-nle-red-pill mt-4 max-md:text-xs max-md:py-2.5 max-md:px-5">
              Discover Our Story <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Kolom Kanan: Gambar dengan masking geometris */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tinggi wrapper gambar disesuaikan di HP agar tidak terlalu tinggi */}
            <div className="slanted-image-wrapper max-md:h-[220px]">
              {/* Gambar Background dipisah jadi 3 bagian clip-path */}
              <div
                className="slanted-part part-1"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')` }}
              ></div>
              <div
                className="slanted-part part-2"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')` }}
              ></div>
              <div
                className="slanted-part part-3"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}