import React from 'react'
import Navbar from '../../../dashboard/ui/components/Navbar'

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="px-10 lg:px-20 pt-28 pb-16">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
          My Portfolio
        </h1>

        <p className="mt-4 text-white/60 max-w-2xl">
          A collection of my best work showcasing creativity, storytelling,
          and visual excellence across different photography styles.
        </p>
      </div>

      {/* Category Tabs (UI only) */}
      <div className="px-10 lg:px-20 flex gap-4 flex-wrap mb-10">
        {["All", "Fashion", "Food", "Product", "Street"].map((item, i) => (
          <button
            key={i}
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-[#B6FF3B] hover:text-black transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="px-10 lg:px-20 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {[1,2,3,4,5,6,7,8,9].map((item) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-2xl bg-white/10 h-80 cursor-pointer"
          >
            {/* Placeholder (replace with image) */}
            <div className="absolute inset-0 flex items-center justify-center text-white/40">
              Image {item}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Hover Text */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
              <p className="text-sm text-white/70">Category</p>
              <h3 className="text-lg font-semibold">Project Title</h3>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Portfolio