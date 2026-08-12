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
        <div className="bg-white p-12 md:p-20 xl:p-28 flex flex-col justify-center">
          <h1 className="text-5xl md:text-[4.5rem] font-extrabold text-[#0A1628] leading-[1.05] tracking-tight mb-8">
            Contact Us.<br />
            Let's Work<br />
            Together <ChevronsRight className="text-[#F5A200] inline-block -mt-3" size={64} strokeWidth={4} />
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-md font-medium text-sm md:text-base mb-12">
            Hubungi tim ahli kami untuk diskusi proyek OEM/ODM, kerja sama distribusi, atau informasi teknis seputar alat listrik berkinerja tinggi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {/* Info Block 1 */}
            <div>
              <h3 className="font-bold text-[#0A1628] text-lg mb-4">Address</h3>
              <div className="text-gray-600 text-sm space-y-2 font-medium">
                <p>Jl. Lokapala No.5, Tambak, Wonorejo,<br />Kec. Kaliwungu, Kabupaten Kendal,<br />Jawa Tengah 51372</p>
              </div>
            </div>
            {/* Info Block 2 */}
            <div>
              <h3 className="font-bold text-[#0A1628] text-lg mb-4">Contact</h3>
              <div className="text-gray-600 text-sm space-y-2 font-medium">
                <p>hello@keywellarshaka.com</p>
                <p>+62 21 0000 0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= QUADRANT 2: Top Right (Map) ================= */}
        <div className="h-[400px] lg:h-auto min-h-[500px] w-full bg-gray-200">
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
        <div
          className="h-[400px] lg:h-auto min-h-[500px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop')` }}
        >
        </div>

        {/* ================= QUADRANT 4: Bottom Right (Form) ================= */}
        <div className="bg-[#F8F9FA] p-12 md:p-20 xl:p-28 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1628] mb-12 tracking-tight">
            Get in touch
          </h2>

          {sent ? (
            <div className="py-12 flex flex-col items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-14 h-14 bg-[#F5A200]/10 text-[#F5A200] rounded-full flex items-center justify-center mb-6">
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1628] mb-3">Message Sent!</h3>
              <p className="text-gray-600 text-base mb-8 font-medium">
                Terima kasih telah menghubungi kami. Tim Keywell Arshaka akan segera merespons pesan Anda.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="bg-transparent text-[#F5A200] font-bold text-sm hover:underline"
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
              className="space-y-6 w-full max-w-lg"
            >
              <div>
                <textarea
                  required
                  name="comment"
                  rows={5}
                  placeholder="Comment*"
                  className="w-full px-5 py-4 bg-transparent border border-gray-300 placeholder:text-gray-500 text-[#0A1628] font-medium text-sm focus:outline-none focus:border-[#F5A200] transition-colors resize-none"
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full px-5 py-4 bg-transparent border border-gray-300 placeholder:text-gray-500 text-[#0A1628] font-medium text-sm focus:outline-none focus:border-[#F5A200] transition-colors"
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  name="website"
                  placeholder="Website*"
                  className="w-full px-5 py-4 bg-transparent border border-gray-300 placeholder:text-gray-500 text-[#0A1628] font-medium text-sm focus:outline-none focus:border-[#F5A200] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-6 bg-[#F5A200] hover:bg-[#D98B00] text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-colors w-fit"
              >
                Send <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  )
}