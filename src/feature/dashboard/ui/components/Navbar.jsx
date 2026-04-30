import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaDribbble,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
    // FaLinkedinIn = "https://www.linkedin.com/in/aman-g-saroj-076a6820b/"
    return (
        <div className="w-full flex justify-between items-center px-10 lg:px-20 py-4 absolute top-0 z-50 text-white">

            {/* Left Links */}
            <div className="flex gap-8 text-sm font-medium tracking-wide">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "text-[#B6FF3B]" : "hover:text-[#B6FF3B] transition"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-[#B6FF3B]" : "hover:text-[#B6FF3B] transition"
                    }
                >
                    About
                </NavLink>

                {/* <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                        isActive ? "text-[#B6FF3B]" : "hover:text-[#B6FF3B] transition"
                    }
                >
                    Portfolio
                </NavLink> */}
            </div>

            {/* Right Icons */}
            {/* Right Icons */}
            <div className="flex gap-4">

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
                    
                ].map(({ icon: Icon, link }, index) => (

                    <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#B6FF3B] hover:text-[#B6FF3B] transition cursor-pointer"
                    >
                        <Icon size={14} />
                    </a>

                ))}

            </div>
        </div>
    );
};

export default Navbar;