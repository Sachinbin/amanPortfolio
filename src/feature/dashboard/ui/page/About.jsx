import React, { Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../components/Navbar";
import Skeleton from "../components/Skeleton";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <Navbar />

      <motion.section
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
        className="relative text-white px-10 lg:px-20 py-32 bg-black"
      >
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-5xl font-extrabold text-center mb-16"
        >
          ABOUT SOME OF MY PROJECT
        </motion.h2>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative w-60 h-60 rounded-full border-8 border-gray-700 flex items-center justify-center"
          >
            <img
              src="/about2.png"
              alt="photographer"
              className="w-48 h-48 object-cover rounded-full"
            />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h3
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="text-2xl lg:text-3xl font-semibold mb-6 text-[#B6FF3B]"
          >
            My Story
          </motion.h3>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="text-white/70 leading-relaxed text-lg"
          >
            Photography for me is not just about capturing images, it's about
            telling stories. Every frame I create reflects a moment, an emotion,
            or a perspective that might otherwise go unnoticed. From streets to
            studio, I explore different styles to bring out unique visual
            narratives.
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-white/50 leading-relaxed mt-6"
          >
            Over time, I’ve developed a passion for experimenting with light,
            composition, and angles. Each project you see here represents my
            growth, creativity, and dedication towards crafting meaningful
            visuals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "/Form 1.jpg",
            "/leading line 1.jpg",
            "/pattern 4.jpg",
            "/Reflection 4.jpg",
            "/Rule of third 1.jpg",
            "/Symmetry 1.jpg",
            "/Unusual angle 1.jpg",
            "/Contrasting Colour .jpg",
            "/Frame in frame 4.jpg",
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="overflow-hidden group cursor-pointer rounded-xl"
            >
              <Suspense fallback={<Skeleton />}>
                <img
                  src={img}
                  alt="project"
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </Suspense>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
