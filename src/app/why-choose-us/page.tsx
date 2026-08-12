'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HeartHandshake,
  ShieldCheck,
  Truck,
  Check,
  ChevronsRight,
  Download,
  Plus,
  Minus,
  Settings
} from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CTA } from '@/components/CTA'
import { MarqueeSection } from '@/components/Homepage/MarqueeSection'
import { BrandsSection } from '@/components/Homepage/BrandsSection'
import Link from 'next/link'

const pillars = [
  {
    title: 'Need first',
    icon: <HeartHandshake size={40} strokeWidth={1.5} />,
    desc: 'Menyadari kebutuhan dukungan di lapangan dalam bentuk alat listrik berkinerja tinggi yang siap digunakan dalam berbagai kondisi industri.'
  },
  {
    title: 'Safety led',
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    desc: 'Memastikan alat listrik kami aman digunakan di tangan konsumen akhir dengan memenuhi standar keamanan dan sertifikasi internasional.'
  },
  {
    title: 'Feedback forward',
    icon: <Truck size={40} strokeWidth={1.5} />,
    desc: 'Mengambil masukan berharga dari pelanggan secara proaktif untuk terus meningkatkan presisi, kekuatan, dan efisiensi produk kami.'
  },
  {
    title: 'Precision Build',
    icon: <Settings size={40} strokeWidth={1.5} />,
    desc: 'Pengembangan berkelanjutan dengan presisi tingkat tinggi untuk menjamin daya tahan alat dalam jangka waktu yang sangat panjang.'
  }
]

const processSteps = [
  {
    title: 'Perancangan Alat (ODM & OEM)',
    desc: 'Perancangan alat berdasarkan spesifikasi khusus permintaan pelanggan, mencakup desain ergonomis dan pemodelan sirkuit daya untuk efisiensi tinggi.'
  },
  {
    title: 'Pemilihan Pemasok & Material',
    desc: 'Mengumpulkan dan memverifikasi pemasok sub yang memenuhi standar desain dan mutu tinggi kami untuk memastikan bahan baku terbaik.'
  },
  {
    title: 'Produksi & Kontrol Kualitas',
    desc: 'Produksi massal alat listrik dengan kontrol kualitas (QC) berlapis di fasilitas perakitan modern sebelum dikirim ke pelanggan global.'
  }
]

const sidebarMenus = [
  'Power Tools',
  'Industrial Grade',
  'Brushless Motor',
  'Global Distribution'
]

export default function Page() {
  const [activeProcess, setActiveProcess] = useState<number | null>(0)

  return (
    <main className="bg-white font-sans text-gray-900">
      <PageHero title="What We Do" crumb="Our Services" />

      {/* MAIN LAYOUT (Sidebar + Main Content) */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* ================= SIDEBAR (Kiri) ================= */}
        <aside className="lg:col-span-3 space-y-10">

          {/* Sidebar Menu */}
          <div>
            <h3 className="text-xl font-extrabold text-[#0A1628] mb-6">
              Industrial <span className="font-light">Solutions</span>
            </h3>
            <ul className="flex flex-col">
              {sidebarMenus.map((menu, idx) => (
                <li key={idx} className="border-b border-gray-200 last:border-0 py-4">
                  <Link href="#" className="text-gray-600 hover:text-[#F5A200] font-medium transition-colors">
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brochure Box */}
          <div 
            className="text-white p-8 rounded-sm"
            style={{ backgroundColor: '#0A1628' }}
          >
            <h4 className="text-2xl font-bold mb-2">Our Services Brochure</h4>
            <p className="text-white/60 text-sm mb-12">Detail teknis & spesifikasi</p>
            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#F5A200] transition-colors">
              Download PDF <Download size={16} />
            </Link>
          </div>

          {/* Contact Box */}
          <div className="bg-[#F8F9FA] p-8 border border-gray-100 relative pt-12">
            <div className="absolute top-0 right-8 -translate-y-1/2 text-[#F5A200] bg-white p-2 rounded-full shadow-sm">
              <ChevronsRight size={32} strokeWidth={3} />
            </div>
            <p className="text-[#0A1628] font-bold text-lg leading-snug mb-8">
              For additional questions, contact one of our agents.
            </p>

            <div className="mb-6">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-2">
                Support Service 24/7
              </span>
              <p className="text-xl font-bold text-[#0A1628]">+707 375 785 88</p>
              <p className="text-xl font-bold text-[#0A1628]">+785 375 785 34</p>
            </div>

            <div>
              <span className="text-xs text-gray-500 font-semibold block mb-1">
                Get In Touch With Us
              </span>
              <p className="font-medium text-[#0A1628]">info@keywell.co.id</p>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT (Kanan) ================= */}
        <div className="lg:col-span-9 space-y-12">

          {/* Header & Intro */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1628] tracking-tight mb-6">
              Advanced Manufacturing Services
            </h2>
            <p className="text-gray-600 leading-relaxed font-medium mb-6">
              PT. Keywell Arshaka Innovation menghadirkan alur kerja terintegrasi dari tahap rancangan awal hingga pengiriman produk berkualitas tinggi untuk mitra manufaktur global. Dedikasi kami adalah menghadirkan alat listrik tingkat industri.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-[#F5A200]" size={20} strokeWidth={3} />
                Merancang alat untuk kondisi lapangan terberat.
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-[#F5A200]" size={20} strokeWidth={3} />
                Standar pengujian ketat demi keamanan pengguna.
              </li>
            </ul>
          </div>

          {/* Large Feature Image */}
          <div className="w-full h-[400px] bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
              alt="Manufacturing Facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Business Process (Accordion Style) */}
          <div className="border-t border-gray-200">
            {processSteps.map((step, idx) => {
              const isActive = activeProcess === idx
              return (
                <div key={idx} className="border-b border-gray-200">
                  <button
                    onClick={() => setActiveProcess(isActive ? null : idx)}
                    className="w-full py-6 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors px-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 w-full">
                      <span className="text-sm font-bold text-[#0A1628] w-48 uppercase tracking-widest">
                        Tahap 0{idx + 1}
                      </span>
                      <span className="text-xl font-bold text-[#0A1628] group-hover:text-[#F5A200] transition-colors flex-1">
                        {step.title}
                      </span>
                    </div>
                    <div className="text-[#0A1628] shrink-0 ml-4">
                      {isActive ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-4 md:pl-[244px]"
                      >
                        <p className="pb-6 text-gray-600 leading-relaxed max-w-2xl">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Pillars Grid (2x2 Layout with Red Icons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-8">
            {pillars.map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="text-[#F5A200] shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADDITIONAL SECTIONS */}
      <MarqueeSection />
      <BrandsSection />
      <CTA />
    </main>
  )
}