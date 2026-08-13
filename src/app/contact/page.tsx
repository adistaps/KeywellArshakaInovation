'use client'

import { useState } from 'react'
import { ArrowRight, ChevronsRight, Check } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

export default function Page() {
  const [sent, setSent] = useState(false)

  return (
    <main className="bg-white font-sans overflow-hidden">

      {/* === PAGE HERO KEMBALI HADIR === */}
      <PageHero title="Get in Touch" crumb="Contact" />

      {/* 2x2 FULL-WIDTH GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

        {/* ================= QUADRANT 1: Top Left (Contact Info) ================= */}
        <div className="bg-white p-8 sm:p-12 md:p-20 xl:p-28 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold text-[#0A1628] leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
            Contact Us.<br />
            Let's Work<br />
            Together <ChevronsRight className="text-[#F5A200] inline-block -mt-1 md:-mt-3 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16" strokeWidth={4} />
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-md font-medium text-sm md:text-base mb-8 md:mb-12">
            Hubungi tim ahli kami untuk diskusi proyek OEM/ODM, kerja sama distribusi, atau informasi teknis seputar alat listrik berkinerja tinggi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            {/* Info Block 1 */}
            <div>
              <h3 className="font-bold text-[#0A1628] text-base md:text-lg mb-2 md:mb-4">Address</h3>
              <div className="text-gray-600 text-sm space-y-2 font-medium">
                <p>Jl. Lokapala No.5, Tambak, Wonorejo,<br />Kec. Kaliwungu, Kabupaten Kendal,<br />Jawa Tengah 51372</p>
              </div>
            </div>
            {/* Info Block 2 */}
            <div>
              <h3 className="font-bold text-[#0A1628] text-base md:text-lg mb-2 md:mb-4">Contact</h3>
              <div className="text-gray-600 text-sm space-y-2 font-medium">
                <p>hello@keywellarshaka.com</p>
                <p>+62 21 0000 0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= QUADRANT 2: Top Right (Map) ================= */}
        {/* Tinggi map di HP diubah dari min-h-500px jadi h-300px agar tidak memakan 1 layar penuh */}
        <div className="h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[500px] w-full bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1064807107427!2d110.256744!3d-6.918381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705f00613ae565%3A0x36a430879b47184f!2sPT%20keywell%20arshaka%20innovation!5e1!3m2!1sid!2sid!4v1786578478243!5m2!1sid!2sid"
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="PT Keywell Arshaka Innovation"
          ></iframe>
        </div>

        {/* ================= QUADRANT 3: Bottom Left (Image) ================= */}
        {/* Tinggi gambar di HP juga disesuaikan menjadi 250px saja supaya estetik */}
        <div
          className="h-[250px] sm:h-[400px] lg:h-auto lg:min-h-[500px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop')` }}
        >
        </div>

        {/* ================= QUADRANT 4: Bottom Right (Form) ================= */}
        <div className="bg-[#F8F9FA] p-8 sm:p-12 md:p-20 xl:p-28 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A1628] mb-8 md:mb-12 tracking-tight">
            Get in touch
          </h2>

          {sent ? (
            <div className="py-8 md:py-12 flex flex-col items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F5A200]/10 text-[#F5A200] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Check className="w-6 h-6 md:w-7 md:h-7" strokeWidth={3} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0A1628] mb-2 md:mb-3">Message Sent!</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 font-medium">
                Terima kasih telah menghubungi kami. Tim Keywell Arshaka akan segera merespons pesan Anda.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="bg-transparent text-[#F5A200] font-bold text-xs md:text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-4 md:space-y-6 w-full max-w-lg"
            >
              <div>
                <textarea
                  required
                  name="comment"
                  rows={4}
                  placeholder="Comment*"
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-transparent border border-gray-300 placeholder:text-gray-500 text-[#0A1628] font-medium text-sm focus:outline-none focus:border-[#F5A200] transition-colors resize-none"
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-transparent border border-gray-300 placeholder:text-gray-500 text-[#0A1628] font-medium text-sm focus:outline-none focus:border-[#F5A200] transition-colors"
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  name="website"
                  placeholder="Website*"
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-transparent border border-gray-300 placeholder:text-gray-500 text-[#0A1628] font-medium text-sm focus:outline-none focus:border-[#F5A200] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-4 md:mt-6 bg-[#F5A200] hover:bg-[#D98B00] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-colors w-fit"
              >
                Send <ArrowRight className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  )
}