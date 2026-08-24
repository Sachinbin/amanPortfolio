import React, { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import CategorySection from '../components/CategorySection'
import About from './About'
import Contact from '../../../contact/ui/page/Contact'
import Reveal from '../../../../components/Reveal'
import useGsapReveal from '../../../../hooks/useGsapReveal'

const Home = () => {
    const navigate = useNavigate()
    const shouldReduceMotion = useReducedMotion()
    const heroContentRef = useRef(null)

    useGsapReveal(heroContentRef, { y: 28, duration: 0.6, blur: false })

    return (
        <div>
            <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-screen text-white overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://www.image2url.com/r2/default/images/1777375444768-148c14ed-36dd-4b7c-b8b8-e07276dc38c9.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center 30%",
                }}
            >
                <Navbar />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

                <div ref={heroContentRef} className="relative z-10 flex items-center h-full px-10 lg:px-20">
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="max-w-xl"
                    >
                        <motion.h1
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-extrabold leading-tight"
                        >
                            <span className="text-[#B6FF3B]">AMAN G</span> <br />
                            SAROJ
                        </motion.h1>

                        <motion.p
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.18 }}
                            className="mt-6 text-gray-300 text-lg"
                        >
                            A Professional Photographer capturing moments with clarity,
                            emotion, and timeless composition.
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => navigate('/contact')}
                            className="mt-8 bg-[#B6FF3B] text-black px-6 py-3 rounded-full font-semibold"
                        >
                            Get in touch
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    initial={shouldReduceMotion ? { opacity: 0.3 } : { opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="absolute bottom-20 left-20 w-40 h-40 bg-[#B6FF3B] blur-[120px]"
                ></motion.div>
            </motion.div>

            <Reveal className="bg-black text-white" y={16} duration={0.45}>
                <div className="px-10 lg:px-20 pt-28 pb-16">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                        My Portfolio
                    </h1>

                    <p className="mt-4 text-white/60 max-w-2xl">
                        A collection of my best work showcasing creativity, storytelling,
                        and visual excellence across different photography styles.
                    </p>
                </div>
            </Reveal>

            <CategorySection />
            <About />
            <Contact />
        </div>
    )
}

export default Home
