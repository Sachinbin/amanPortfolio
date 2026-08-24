import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import usePrefersReducedMotion from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const useGsapReveal = (ref, options = {}) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!ref?.current) return
    if (prefersReducedMotion) {
      gsap.set(ref.current, { clearProps: 'all' })
      return
    }

    const {
      y = 24,
      opacity = 0,
      duration = 0.6,
      delay = 0,
      blur = true,
      start = 'top 85%',
    } = options

    const tween = gsap.fromTo(
      ref.current,
      {
        y,
        opacity,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      }
    )

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === ref.current) {
          trigger.kill()
        }
      })
    }
  }, [prefersReducedMotion, ref, options.y, options.opacity, options.duration, options.delay, options.blur, options.start])
}

export default useGsapReveal
