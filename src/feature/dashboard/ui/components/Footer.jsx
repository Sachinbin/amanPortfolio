import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="bg-black text-white px-10 lg:px-20 py-12"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div>
          <h1 className="text-3xl font-extrabold">
            <span className="text-[#B6FF3B]">AMAN G</span> SAROJ
          </h1>
          <p className="mt-4 text-gray-400 max-w-sm">
            Capturing moments through lens with creativity, passion, and
            storytelling.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm text-gray-500 uppercase">Follow Me</h2>

          <div className="flex gap-4 mt-3">
            {[
              {
                icon: FaFacebookF,
                link: "https://www.facebook.com/amang.saroj/",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/frameit.with_me/",
              },
              {
                icon: FaLinkedinIn,
                link: "https://www.linkedin.com/in/aman-g-saroj-076a6820b/",
              },
            ].map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -3, color: "#B6FF3B" }}
                transition={{ duration: 0.25 }}
                className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#B6FF3B] hover:text-[#B6FF3B] hover:scale-110 transition"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Aman G Saroj. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
