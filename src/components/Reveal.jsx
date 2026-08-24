import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

const Reveal = ({ children, className = '', delay = 0, y = 24, duration = 0.5, blur = false }) => {
  const shouldReduceMotion = useReducedMotion()

  const variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  }), [])

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      whileInView={shouldReduceMotion ? 'visible' : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
