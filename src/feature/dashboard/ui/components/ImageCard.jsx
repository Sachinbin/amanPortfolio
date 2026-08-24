import React, { memo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'

const ImageCard = memo(({ images }) => {
  const [open, setOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div>
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-2xl bg-white/10 h-80 cursor-pointer"
      >
        <img
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          src={images}
          alt="portfolio"
          className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100"></div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <motion.button
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#B6FF3B] transition"
            >
              <X size={32} />
            </motion.button>

            <motion.img
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images}
              alt="preview"
              className="max-h-[90vh] max-w-[95vw] h-auto w-auto object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default ImageCard
