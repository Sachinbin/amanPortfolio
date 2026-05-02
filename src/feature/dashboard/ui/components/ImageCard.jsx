import React, { Suspense, useState } from 'react'
import { X } from 'lucide-react'
import { use } from 'react'
import Skeleton from './Skeleton'

const ImageCard = ({ images }) => {
  const [open, setOpen] = useState(false)
  // let props = use(images)
  
  return (
    <div>
      <div>
        {/* Card */}
        <div
          onClick={() => setOpen(true)}
          className="group relative overflow-hidden rounded-2xl bg-white/10 h-80 cursor-pointer"
        >
          <Suspense fallback={<Skeleton/>}>
            <img
            src={images}
            alt="img"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          </Suspense>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        {/* Fullscreen Preview */}
        {open && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

            {/* ❌ Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#B6FF3B] transition"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <img
              src={images}
              alt="preview"
              className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageCard
