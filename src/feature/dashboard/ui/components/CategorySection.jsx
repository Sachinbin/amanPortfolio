import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router";
import { categories } from "../../api/category";

const CategorySection = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      {categories.map((item, index) => (
        <motion.div
          key={item.id}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.07 }}
          whileHover={{ x: 6, scale: 1.01, backgroundColor: "#000000" }}
          onClick={() => navigate(`/${item.id}`)}
          className="group w-full px-10 lg:px-20 py-12 border-b border-gray-300 bg-white text-black hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wide group-hover:text-[#B6FF3B] transition">
              {item.title}
            </h1>

            <p className="max-w-md text-sm text-gray-400 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategorySection;