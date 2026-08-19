'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronsRight } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CTA } from '@/components/CTA'
import Link from 'next/link'


const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } }
}

const products = [
  { cat: 'IMPACT TOOLS', name: 'KA-ID20 Cordless Impact Driver 20V', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop' },
  { cat: 'IMPACT TOOLS', name: 'KA-IW20 Cordless Impact Wrench 20V', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { cat: 'IMPACT TOOLS', name: 'KA-IW20P Pro Impact Wrench 1/2” 20V', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' },
  { cat: 'RECIPROCATING SAW', name: 'KA-RS20 Cordless Reciprocating Saw', img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop' },
  { cat: 'RECIPROCATING SAW', name: 'KA-RS20X Heavy Duty Saw 20V', img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop' },
  { cat: 'CIRCULAR SAW', name: 'KA-CS20 Cordless Circular Saw 165mm', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop' },
  { cat: 'CIRCULAR SAW', name: 'KA-CS20P Pro Circular Saw 185mm', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { cat: 'JIGSAW', name: 'KA-JS20 Cordless Jigsaw 20V', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' },
  { cat: 'RIVET GUN', name: 'KA-RG20 Cordless Rivet Gun 20V', img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop' }
]

export default function Page() {
  return (
    <main className="bg-white font-sans">
      <PageHero title="Products" crumb="Our range" />

      {/* PRODUCTS GRID SECTION */}
      <section className="py-20 px-4 sm:px-6 md:px-16 max-w-[1400px] mx-auto bg-white">

        {/* Header Grid */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0A1628] tracking-tight mb-4">
            Our Products
          </h2>
          <div className="flex gap-1 text-[#F5A200]">
            <div className="w-4 h-6 bg-[#F5A200] skew-x-[20deg]" />
            <div className="w-4 h-6 bg-[#F5A200] skew-x-[20deg]" />
            <div className="w-4 h-6 bg-[#F5A200] skew-x-[20deg]" />
          </div>
        </div>

        {/* Grid Kartu Produk */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {products.map(({ cat, name, img }, index) => (
            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              key={index}
              className="group relative w-full aspect-[4/5] bg-gray-200 overflow-hidden cursor-pointer"
            >
              <Link href={`/products/${name.split(' ')[0].toLowerCase().replace('ka-', 'ka-')}`} className="absolute inset-0 z-10" aria-label={`View ${name}`} />
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />

              {/* Overlay Gelap */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

              {/* Bottom Info Box */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 min-h-[90px] md:min-h-[130px] flex flex-col justify-end 
                              bg-black/60 backdrop-blur-none 
                              md:bg-black/50 md:backdrop-blur-md border-t border-white/10
                              group-hover:bg-gradient-to-r group-hover:from-[#F5A200] group-hover:to-[#F5A200] 
                              group-hover:border-transparent transition-all duration-300 ease-in-out">
                <span className="text-[10px] md:text-xs font-semibold text-white/80 tracking-wider uppercase block mb-1">
                  {cat}
                </span>
                <h3 className="text-sm sm:text-base md:text-2xl font-bold text-white leading-tight line-clamp-2 md:line-clamp-none">
                  {name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* NEW CTA SECTION (Disesuaikan Khusus Tampilan Ponsel) */}
      <section className="py-12 md:py-24 px-5 md:px-16 bg-white text-center flex flex-col items-center justify-center">
        {/* Ikon Chevron: w-10 h-10 di HP, w-16 h-16 (size 64) di Desktop */}
        <div className="text-[#F5A200] mb-4 md:mb-6 flex justify-center">
          <ChevronsRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={3} />
        </div>

        {/* Judul: text-2xl di HP (sebelumnya text-4xl yang terlalu besar), md:text-5xl di Desktop */}
        <h2 className="text-2xl md:text-5xl font-extrabold text-[#0A1628] tracking-tight max-w-3xl leading-tight mb-6 md:mb-8">
          Become A Part Of Our Big Industrial Innovation Networks
        </h2>

        {/* Tombol Partner With Us */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-[#F5A200] text-white text-xs md:text-sm font-bold rounded-full hover:bg-[#D98B00] transition-colors gap-2"
        >
          Partner With Us <ArrowRight size={16} />
        </Link>
      </section>

      <CTA />
    </main>
  )
}
