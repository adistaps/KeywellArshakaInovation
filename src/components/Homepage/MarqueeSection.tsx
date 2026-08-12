'use client'

import { ArrowUpRight } from 'lucide-react'

const items = [
  'PT KEYWELL ARSHAKA INNOVATION',
  'POWER TOOLS FOR PROFESSIONALS',
  'WORLD-CLASS MANUFACTURING',
  '20V BRUSHLESS TECHNOLOGY',
  'AUTONOMOUS AI POWER TOOLS',
  'ODM & OEM SOLUTIONS'
]

export function MarqueeSection() {
  return (
    <section className="relative w-full bg-[#F5A200] overflow-hidden flex items-center py-6 md:py-8 font-sans">
      {/* Inject CSS Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }
      `}} />

      <div className="animate-marquee-scroll">
        {/* Array digandakan agar looping tidak terputus (seamless infinite loop) */}
        {[...items, ...items, ...items].map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 md:gap-12 px-4 md:px-6"
          >
            <span className="text-white text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
              {text}
            </span>

            {/* Ikon ArrowUpRight dipertebal agar menyerupai referensi blocky arrow */}
            <ArrowUpRight
              size={44}
              strokeWidth={4}
              className="text-white shrink-0"
            />
          </div>
        ))}
      </div>
    </section>
  )
}