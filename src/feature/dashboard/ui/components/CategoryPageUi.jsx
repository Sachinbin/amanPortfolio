import React, { lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router";
import { categories } from "../../api/category";
import Skeleton from "./Skeleton";
const ImageCard = lazy(()=> import("./ImageCard"));



const CategoryPage = () => {
    let { id } = useParams()
    let navigate = useNavigate()

    let res = categories.find((elem) => {
        return elem.id == id
    })
  if (!res) {
    return <h1 className="text-white">Category not found</h1>;
  }

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

                    (res.images).map((elem) => {
                        return <Suspense fallback={<Skeleton/>}><ImageCard key={elem.id} images={elem}/></Suspense>
                    })
                }
            </div>

           
        </div>
    );
};

export default CategoryPage;