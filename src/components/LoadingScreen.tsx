'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [startAnimation, setStartAnimation] = useState(false)

  // Durasi sapuan logo (dalam detik)
  const SWEEP_DURATION = 3.5
  const START_DELAY = 300 // Delay layar putih awal (ms)

  useEffect(() => {
    // Mulai animasi sapuan logo
    const maskTimer = setTimeout(() => setStartAnimation(true), START_DELAY)

    // Tepat ketika sapuan selesai, langsung slide-up tanpa jeda
    const timer = setTimeout(() => {
      setVisible(false)
    }, START_DELAY + SWEEP_DURATION * 1000)

    return () => {
      clearTimeout(maskTimer)
      clearTimeout(timer)
    }
  }, [SWEEP_DURATION, START_DELAY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          // Layar putih ditarik ke atas di akhir
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden px-4"
        >
          {/* Container Logo di Tengah */}
          <div className="flex items-center justify-center w-full">
            <img
              src="/footer.webp"
              alt="Keywell Arshaka Innovation"
              style={{
                WebkitMaskImage:
                  'linear-gradient(90deg, #000 0%, #000 40%, transparent 60%, transparent 100%)',
                maskImage:
                  'linear-gradient(90deg, #000 0%, #000 40%, transparent 60%, transparent 100%)',
                WebkitMaskSize: '250% 100%',
                maskSize: '250% 100%',
                WebkitMaskPosition: startAnimation ? '0% 0' : '100% 0',
                maskPosition: startAnimation ? '0% 0' : '100% 0',
                transition: `mask-position ${SWEEP_DURATION}s cubic-bezier(0.4, 0, 0.2, 1), -webkit-mask-position ${SWEEP_DURATION}s cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
              /* Perbaikan Ukuran Logo:
                 - HP (Mobile): Memakai 75% lebar layar HP (maksimal 280px) agar terlihat pas dan besar.
                 - Tablet (sm): w-72 (288px)
                 - Laptop/Desktop (md): w-80 (320px)
              */
              className="w-[75vw] max-w-[280px] sm:w-72 md:w-80 object-contain select-none"
              draggable={false}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}