import React from "react";
import { useNavigate, useParams } from "react-router";
import { categories } from "../../api/category";
import ImageCard from "./ImageCard";


const CategoryPage = () => {
    let { id } = useParams()
    let navigate = useNavigate()

    let res = categories.find((elem) => {
        return elem.id == id
    })
    // console.log(categories);

    console.log(res);


    return (
        <div className="min-h-screen bg-black text-white px-10 lg:px-20 py-16">
            <h1
            onClick={()=>navigate("/")}
            className="hover:text-white/60 mb-7 cursor-pointer" 
            ><i class="fa-solid fa-arrow-left"></i> Back to Home Page</h1>
            {/* Heading */}
            <div className="mb-12">
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                    {res.title}
                </h1>

                <p className="text-white/60 mt-4 max-w-xl">
                    {res.desc}
                </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {

                    (res.images || []).map((elem) => {
                        return <ImageCard images={elem} />
                    })
                }
            </div>

        </div>
    );
};

export default CategoryPage;