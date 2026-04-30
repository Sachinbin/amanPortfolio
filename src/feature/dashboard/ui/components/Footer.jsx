import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 lg:px-20 py-12">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Left */}
        <div>
          <h1 className="text-3xl font-extrabold">
            <span className="text-[#B6FF3B]">AMAN G</span> SAROJ
          </h1>
          <p className="mt-4 text-gray-400 max-w-sm">
            Capturing moments through lens with creativity, passion, and
            storytelling.
          </p>
        </div>

        {/* Middle Links */}
        {/* <div className="flex gap-10">
          <div>
            <h2 className="mb-3 text-sm text-gray-500 uppercase">Navigation</h2>
            <ul className="space-y-2">
              <li className="hover:text-[#B6FF3B] cursor-pointer">Home</li>
              <li className="hover:text-[#B6FF3B] cursor-pointer">About</li>
              <li className="hover:text-[#B6FF3B] cursor-pointer">Portfolio</li>
              <li className="hover:text-[#B6FF3B] cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm text-gray-500 uppercase">Services</h2>
            <ul className="space-y-2">
              <li className="hover:text-[#B6FF3B] cursor-pointer">Photography</li>
              <li className="hover:text-[#B6FF3B] cursor-pointer">Videography</li>
              <li className="hover:text-[#B6FF3B] cursor-pointer">Editing</li>
            </ul>
          </div>
        </div> */}

        {/* Right Social */}
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
                link: "https://www.instagram.com/aman_g_saroj/",
              },
              {
                icon: FaLinkedinIn,
                link: "https://www.linkedin.com/in/aman-g-saroj-076a6820b/",
              },
              // {
              //   icon: FaDribbble,
              //   link: "#",
              // },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#B6FF3B] hover:text-[#B6FF3B] hover:scale-110 transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Aman G Saroj. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
