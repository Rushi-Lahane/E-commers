"use client";
import { IndianRupee, ShoppingCart } from "lucide-react";
import HomeSlider from "./component/HomeSlider";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, selectAllProducts } from "./redux/reducer/cartSlice";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Home() {
  const dispatch = useDispatch();
  const imgCategory = [
    { Name: "Sports", Url: "./images/Sports.jpg" },
    { Name: "Toy", Url: "./images/Toys.jpg" },
    { Name: "Beauty & Personal Care", Url: "./images/Beauty.jpg" },
    { Name: "Automobile Accessories", Url: "./images/Automobile.jpg" },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const product = useSelector(selectAllProducts);
  const addtoCart = (item) => {
    dispatch(add(item));
    toast.success("Product Added to Cart");
  };

  return (
    <>
      <div className="mt-3">
        <HomeSlider data-aos="fade-down" />

        {/* Categories Section */}
        <section className="py-10 bg-gray-100" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {imgCategory.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:scale-110 transition-all" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <img src={item.Url} className="w-full h-32 object-cover rounded-lg mb-3" data-aos="zoom-in-up" />
                  <h3 className="text-lg font-semibold text-center">{item.Name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8" data-aos="fade-up">Featured Products</h2>
            <div className="w-11/12 mx-auto my-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {product.map((item, i) => (
                  <div key={i} className="bg-white shadow-lg rounded-lg p-5 flex flex-col hover:shadow-xl transition-all" data-aos="flip-up">
                    <h2 className="text-center text-blue-900 text-xl font-bold mb-3">{item.name}</h2>
                    <img src={item.url} alt={item.name} className="h-50 w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" data-aos="fade-up" />
                    <h2 className="mt-3 text-lg font-semibold">{item.name}</h2>
                    <h2 className="flex my-2 font-semibold items-center">
                      <IndianRupee /> {item.price}
                    </h2>
                    <p className="text-gray-700 mt-2">Category: {item.category}</p>
                    <div className="mt-4 flex justify-center w-full">
                      <Link href={`/product/${item.id}`} className="w-1/2">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-all shadow-md" data-aos="zoom-in">Show Details</button>
                      </Link>
                      <button className="bg-green-700 hover:bg-green-800 text-white px-2 py-2 rounded-md transition-all shadow-md flex items-center justify-center gap-2" onClick={() => addtoCart(item)} data-aos="zoom-in">
                        <ShoppingCart size={18} /> Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
