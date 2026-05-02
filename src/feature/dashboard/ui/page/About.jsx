import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Skeleton from "../components/Skeleton";

const About = () => {
  return (
    <div>
      <Navbar />

      <section className="relative text-white px-10 lg:px-20 py-32 bg-black">

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16">
          ABOUT SOME OF MY PROJECT
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-16">
          <div className="relative w-60 h-60 rounded-full border-8 border-gray-700 flex items-center justify-center">
            <img
              src="/about2.png"
              alt="photographer"
              className="w-48 h-48 object-cover rounded-full"
            />
          </div>
        </div>

        {/* 🔥 Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-[#B6FF3B]">
            My Story
          </h3>

          <p className="text-white/70 leading-relaxed text-lg">
            Photography for me is not just about capturing images, it's about
            telling stories. Every frame I create reflects a moment, an emotion,
            or a perspective that might otherwise go unnoticed. From streets to
            studio, I explore different styles to bring out unique visual
            narratives.
          </p>

          <p className="text-white/50 leading-relaxed mt-6">
            Over time, I’ve developed a passion for experimenting with light,
            composition, and angles. Each project you see here represents my
            growth, creativity, and dedication towards crafting meaningful
            visuals.
          </p>
        </div>

        {/* Grid Section */}

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
            <div
              key={index}
              className="overflow-hidden group cursor-pointer rounded-xl"
            >
              <Suspense fallback={<Skeleton />}>
                <img
                  src={img}
                  alt="project"
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </Suspense>
            </div>
          ))}
        </div>


      </section>
    </div>
  );
};

export default About;
