import React from 'react'
import Navbar from '../components/Navbar'
import CategorySection from '../components/CategorySection'

const Home = () => {
    return (
        <div>
            <div
                className="relative h-screen text-white overflow-hidden "
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

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Grid Overlay (design jaisa) */}
                <div className="absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center h-full px-10 lg:px-20">

                    <div className="max-w-xl">
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                            <span className="text-[#B6FF3B]">AMAN G</span> <br />
                            SAROJ
                        </h1>

                        <p className="mt-6 text-gray-300 text-lg">
                            A Professional Photographer capturing moments with clarity,
                            emotion, and timeless composition.
                        </p>

                        <button className="mt-8 bg-[#B6FF3B] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                            Get in touch
                        </button>
                    </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#B6FF3B] blur-[120px] opacity-30"></div>



            </div>
            <div className='bg-black text-white'>
                <div className="px-10 lg:px-20 pt-28 pb-16">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                        My Portfolio
                    </h1>

                    <p className="mt-4 text-white/60 max-w-2xl">
                        A collection of my best work showcasing creativity, storytelling,
                        and visual excellence across different photography styles.
                    </p>
                </div>
            </div>
            <CategorySection />
        </div>
    )
}

export default Home
