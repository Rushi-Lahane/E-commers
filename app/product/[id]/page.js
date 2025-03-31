"use client";

import { ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const { useParams } = require("next/navigation");
const { useSelector, useDispatch} = require("react-redux");
import { useRouter } from "next/navigation";
import { add, selectAllProducts } from "@/app/redux/reducer/cartSlice";


const ProductDetails =()=>{
  const router = useRouter();
    const{id}=useParams();
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts); // Ensure products is always an array
    const product = products.find((item)=>item.id.toString()===id);

    const addtoCart = (item) => {
    dispatch(add(item));
    toast.success("Product Added to Cart",{position:"top-center"});
  }
    return(
      <div className="bg-gray-100 h-screen items-center flex p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Image Section */}
        <div className="flex justify-center">
          <img
            src={product.url}
            alt={product.name}
            className="w-full max-w-md h-80 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right - Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-blue-900">
            {product.name}
          </h1>
          <p className=" text-lg mt-2">{product.desc}</p>
          <h4 className="mt-2 text-blue-500 font-semibold ">About:</h4>
           <p className="text-gray-700">{product.Performance}</p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md shadow-md w-full sm:w-auto"
            onClick={()=>addtoCart(product)}>
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md shadow-md w-full sm:w-auto"
            >
              <ArrowLeft size={20} /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ProductDetails;