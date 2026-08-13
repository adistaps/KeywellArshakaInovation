'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Danilo Silver',
    role: 'Xinju Tools R&D Lead',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Camilo Velez',
    role: 'Keywell Ark Managing Director',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Danisha Shan',
    role: 'Head of Quality & Compliance',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Julia Orlop',
    role: 'AI Autonomous Tool Engineer',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
  }
]

export function TeamSection() {
  return (
    <section className="py-12 sm:py-20 px-6 md:px-16 max-w-[1400px] mx-auto font-sans overflow-hidden sm:overflow-visible">
      {/* Container: Horizontal Scroll di HP (flex + overflow-x-auto), Grid di Tablet/Desktop (sm:grid) */}
      <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-5 sm:gap-6 pb-4 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-[400px] sm:h-[450px] w-[280px] sm:w-full shrink-0 snap-center overflow-hidden group cursor-pointer bg-gray-100"
          >
            {/* Foto Anggota Tim */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient & Informasi Tim */}
            <div className="absolute bottom-0 left-0 w-full p-6 border-l-[6px] border-[#F5A200] 
              bg-gradient-to-t from-black/90 via-black/50 to-transparent
              group-hover:from-[#F5A200] group-hover:via-[#F5A200]/90 group-hover:to-[#F5A200]/70 
              transition-colors duration-500"
            >
              <span className="text-white/80 text-sm font-medium lowercase tracking-wide block mb-1">
                {member.role}
              </span>
              <h4 className="text-white text-2xl font-bold tracking-tight">
                {member.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}