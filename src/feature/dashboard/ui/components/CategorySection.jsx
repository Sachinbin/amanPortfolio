import React from "react";
import { useNavigate } from "react-router";
import { categories } from "../../api/category";

const CategorySection = () => {
  let navigate = useNavigate()
  return (
    <div className="w-full">

      {categories.map((item, index) => (
        <div
        onClick={()=>navigate(`/${item.id}`)}
          key={index}
          className="group w-full px-10 lg:px-20 py-12 border-b border-gray-300 bg-white text-black hover:bg-black hover:text-white transition duration-300 cursor-pointer"
        >
          <div className="flex justify-between items-center">

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wide group-hover:text-[#B6FF3B] transition">
              {item.title}
            </h1>

            {/* Description (Hover pe show) */}
            <p className="max-w-md text-sm text-gray-400 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition duration-500">
              {item.desc}
            </p>

          </div>
        </div>
      ))}

    </div>
  );
};

export default CategorySection;