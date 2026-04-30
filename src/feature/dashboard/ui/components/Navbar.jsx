import React, { useState } from "react";
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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
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
  ];

  return (
    <div className="w-full flex justify-between items-center px-6 lg:px-20 py-4 absolute top-0 z-50 text-white">

      {/* Logo / Name */}
      <h1 className="text-lg font-bold tracking-wide">Aman</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
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

      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-4">
        {socials.map(({ icon: Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#B6FF3B] hover:text-[#B6FF3B] transition"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        {open ? (
          <FaTimes size={22} onClick={() => setOpen(false)} />
        ) : (
          <FaBars size={22} onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-lg transition duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
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

        {/* Social Icons Mobile */}
        <div className="flex gap-4 mt-6">
          {socials.map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#B6FF3B] hover:text-[#B6FF3B] transition"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;