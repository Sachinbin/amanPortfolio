import React, { memo, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navLinks = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    []
  );

  const socials = useMemo(
    () => [
      {
        icon: FaFacebookF,
        link: "https://www.facebook.com/amang.saroj/",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com/aman_g_saroj/",
      },
      {
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/aman-g-saroj-076a6820b/",
      },
    ],
    []
  );

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full flex justify-between items-center px-6 lg:px-20 py-4 absolute top-0 z-50 text-white"
    >
      <h1 className="text-lg font-bold tracking-wide">Camer<span className="text-[#B6FF3B]">Aman</span></h1>

      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#B6FF3B]"
                : "hover:text-[#B6FF3B] transition"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex gap-4">
        {socials.map(({ icon: Icon, link }) => (
          <motion.a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.04, color: "#B6FF3B" }}
            transition={{ duration: 0.25 }}
            className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#B6FF3B] hover:text-[#B6FF3B] transition"
          >
            <Icon size={14} />
          </motion.a>
        ))}
      </div>

      <div className="md:hidden z-50">
        {open ? (
          <FaTimes size={22} onClick={() => setOpen(false)} />
        ) : (
          <FaBars size={22} onClick={() => setOpen(true)} />
        )}
      </div>

      <motion.div
        initial={false}
        animate={open ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-lg"
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#B6FF3B]"
                : "hover:text-[#B6FF3B] transition"
            }
          >
            {item.name}
          </NavLink>
        ))}

        <div className="flex gap-4 mt-6">
          {socials.map(({ icon: Icon, link }) => (
            <motion.a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2, color: "#B6FF3B" }}
              transition={{ duration: 0.25 }}
              className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#B6FF3B] hover:text-[#B6FF3B] transition"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default memo(Navbar);