'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function IntroSection() {
  return (
    <section className="intro-nle-section">
      <div className="container">
        <div className="intro-nle-grid">
          {/* Kolom Kiri: Teks & Tombol */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="intro-nle-content"
          >
            <h2 className="intro-nle-heading">
              World-Class <br />
              Manufacturing & <br />
              Power Tools
            </h2>
            <div className="intro-nle-text-wrap">
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
            <Link href="/about-us" className="btn-nle-red-pill mt-4">
              Discover Our Story <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Kolom Kanan: Gambar dengan masking geometris */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="slanted-image-wrapper">
              {/* Gambar Background dipisah jadi 3 bagian clip-path */}
              {/* Ganti URL background-image dengan foto pabrik/produk Anda */}
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