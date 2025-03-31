"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, CircleUser, Search, ShoppingCart, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/reducer/cartSlice";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [electronic, setElectronic] = useState(false);
    const [fashion, setFashion] = useState(false);
    const [home, setHome] = useState(false);
    const [applience, setApplience] = useState(false);

    const product = useSelector(selectCartItems);


    return (
        <>
            <header className="bg-[#42a5e3] shadow-md">
                {/* Top Navigation Bar */}
                <nav className="flex items-center justify-between w-11/12 mx-auto">
                    {/* Logo */}
                    <Link href="/">
                        <img src="/images/secondLogo.png" alt="Logo" className="w-20 cursor-pointer" />
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center bg-white rounded-lg px-3 py-2 w-80 shadow-sm">
                        <Search className="text-black" size={20} />
                        <input type="text" placeholder="Search..." className="ml-2 p-1 w-full focus:outline-none" />
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-8 text-lg font-semibold">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/cart" className="flex items-center gap-1">
                        {product.length > 0 && (
                            <span className="absolute top-3.5 right-100 bg-black text-xs text-white w-5 h-5 flex justify-center items-center rounded-full">
                                {product.length}
                            </span>
                        )}
                            <ShoppingCart size={25} color="red" /> Cart
                        </Link>
                    </ul>

                    {/* Action Buttons */}
                    <div className="hidden md:flex gap-x-3">
                        <button className="bg-red-500 px-4 py-2 font-semibold text-white rounded-md">Become Seller</button>
                        <button className="bg-white flex gap-1 py-2 px-4 items-center text-black font-semibold rounded-lg">
                            <CircleUser size={20} /> Sign in
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Link href="/cart" className={`items-center justify-end ml-auto gap-1 mr-3 text-lg font-semibold flex md:hidden `}>
                    {product.length > 0 && (
                            <span className=" top-4  right-24 absolute bg-black text-xs text-white w-5 h-5 flex justify-center items-center rounded-full">
                                {product.length}
                            </span>
                        )}
                        <ShoppingCart size={25} color="red " className="z-20" /> Cart
                        
                    </Link>

                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={30} /> : <AlignJustify size={30} />}
                    </button>
                </nav>

                {/* Mobile Menu with Animation */}
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: isOpen ? 0 : "100%" }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
                    className={`fixed top-0 right-0 h-full w-64 backdrop-blur-3xl shadow-lg md:hidden flex flex-col items-center py-5 ${isOpen ? "block" : "hidden"}`}
                >

                    <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                        <X size={30} />
                    </button>
                    <Link href="/" className="py-3 text-lg font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="py-3 text-lg font-semibold" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" className="py-3 text-lg font-semibold" onClick={() => setIsOpen(false)}>Contact</Link>

                    <button className="bg-red-500 px-4 py-2 mt-3 font-semibold text-white rounded-md w-full" onClick={() => setIsOpen(false)}>Become Seller</button>
                    <button className="bg-[#16C47F] font-bold flex gap-2 py-2 px-4 justify-center items-center text-black rounded-lg mt-2 w-full" onClick={() => setIsOpen(false)}>
                        <CircleUser size={20} /> Sign in
                    </button>
                </motion.div>

                {/* Category Navigation Bar */}
                <div className="bg-white shadow-md">
                    <div className="w-11/12 mx-auto flex items-center py-2 relative">
                        <button className="flex sm:hidden items-center gap-2 font-semibold text-lg" onClick={() => setCategoryOpen(!categoryOpen)}>
                            Categories <ChevronDown size={18} />
                        </button>
                        <ul className="hidden md:flex items-center space-x-5 text-md font-semibold">
                            {/* Electronics Dropdown */}
                            <li className="flex items-center" onMouseEnter={() => setElectronic(true)} onMouseLeave={() => setElectronic(false)} >
                                <Link href="/electronics" className="hover:text-blue-500"> Electronics</Link><ChevronDown size={18} className="mt-1" />

                                {/* Dropdown Menu */}
                                {electronic && (
                                    <div className="absolute top-8 text-sm bg-white shadow-lg rounded-md w-56 z-50">
                                        <Link href="/electronics/mobiles" className="block px-4 py-2 hover:bg-gray-200">Mobiles</Link>
                                        <Link href="/electronics/laptops" className="block px-4 py-2 hover:bg-gray-200">Laptops</Link>
                                        <Link href="/electronics/cameras" className="block px-4 py-2 hover:bg-gray-200">Cameras</Link>
                                        <Link href="/electronics/headphones" className="block px-4 py-2 hover:bg-gray-200">Headphones</Link>
                                        <Link href="/electronics/speakers" className="block px-4 py-2 hover:bg-gray-200">Speakers</Link>
                                        <Link href="/electronics/speakers" className="block px-4 py-2 hover:bg-gray-200">Gaming</Link>
                                        <Link href="/electronics/speakers" className="block px-4 py-2 hover:bg-gray-200">Powerbank</Link>
                                        <Link href="/electronics/speakers" className="block px-4 py-2 hover:bg-gray-200">Smart Wearables</Link>
                                    </div>
                                )}
                            </li>
                            <li className="flex items-center" onMouseEnter={() => setFashion(true)} onMouseLeave={() => setFashion(false)}>
                                <Link href="/fashion"> Fashion</Link><ChevronDown size={18} className="mt-1" />
                                {/* Dropdown Menu */}
                                {fashion &&
                                    <div className="absolute top-7 text-sm bg-white shadow-lg rounded-md w-56 z-50"                                    >
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Women's Fashion</Link>
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Women Top Wear</Link>
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Women Footwear</Link>
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Men’s Fashion</Link>
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Men Footwear</Link>
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Watch & Accessories</Link>
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Kids’ Fashion</Link>
                                        <Link href='/fashion/Women' className="block px-4 py-2 hover:bg-gray-200"> Winter</Link>

                                    </div>
                                }
                            </li>
                            <li className="flex items-center" onMouseEnter={() => setHome(true)} onMouseLeave={() => setHome(false)}>
                                <Link href="/home-kitchen"> Home & Kitchen</Link><ChevronDown size={18} className="mt-1" />
                                {/* Dropdown Menu */}
                                {home &&
                                    <div className="absolute top-7 text-sm bg-white shadow-lg rounded-md w-56 z-50"
                                    >
                                        <Link href='/home-kitchen/Home-Appliances' className="block px-4 py-2 hover:bg-gray-200"> Home Furnishing</Link>
                                        <Link href='/home-kitchen/Home-Appliances' className="block px-4 py-2 hover:bg-gray-200"> Furniture</Link>
                                        <Link href='/home-kitchen/Home-Appliances' className="block px-4 py-2 hover:bg-gray-200"> Kitchen & Dining</Link>
                                        <Link href='/home-kitchen/Home-Appliances' className="block px-4 py-2 hover:bg-gray-200"> Home Decore</Link>
                                        <Link href='/home-kitchen/Home-Appliances' className="block px-4 py-2 hover:bg-gray-200"> Cleaning & Bath</Link>
                                    </div>
                                }
                            </li>
                            <li className="flex items-center" onMouseEnter={() => setApplience(true)} onMouseLeave={() => setApplience(false)}>
                                <Link href="/sports"> Appliances</Link><ChevronDown size={18} className="ml-0" />
                                {applience &&
                                    <div className="absolute top-7 text-sm bg-white shadow-lg rounded-md w-56 z-50">
                                        <Link href="/appliances" className="block px-4 py-2 hover:bg-gray-200">Refrigerators</Link>
                                        <Link href="/appliances" className="block px-4 py-2 hover:bg-gray-200">Air Conditioners</Link>
                                        <Link href="/appliances" className="block px-4 py-2 hover:bg-gray-200">Washing Machines</Link>
                                        <Link href="/appliances" className="block px-4 py-2 hover:bg-gray-200">Microwaves</Link>
                                        <Link href="/appliances" className="block px-4 py-2 hover:bg-gray-200">Air Purifiers</Link>
                                    </div>

                                }
                            </li>
                            <Link href="/sports">Sports</Link>
                            <Link href="/toys">Toys</Link>
                            <li>Beauty & Personal Care</li>
                            <li>Automobile Accessories</li>
                            <li>Books & Stationery</li>

                        </ul>
                    </div>
                    {/* Animated Mobile Category Dropdown */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: categoryOpen ? 1 : 0, height: categoryOpen ? "auto" : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-gray-100 overflow-hidden"
                    >
                        <Link href="/electronics" className="block py-1 font-semibold text-center" onClick={() => setCategoryOpen(false)}>Electronics</Link>
                        <Link href="/toys" className="block py-1 font-semibold text-center" onClick={() => setCategoryOpen(false)}>Toys</Link>
                        <Link href="/sports" className="block py-1 font-semibold text-center" onClick={() => setCategoryOpen(false)}>Sports</Link>
                        <Link href="/fashion" className="block py-1 font-semibold text-center" onClick={() => setCategoryOpen(false)}>Fashion</Link>
                        <Link href="/home-kitchen" className="block py-1 font-semibold text-center" onClick={() => setCategoryOpen(false)}>Home & Kitchen</Link>
                        <li className="block py-1 font-semibold text-center">Beauty & Personal Care</li>
                        <li className="block py-1 font-semibold text-center">Automobile Accessories</li>
                        <li className="block py-1 font-semibold text-center">Books & Stationery</li>
                    </motion.div>
                </div>

            </header>

        </>
    );
};

export default Header;
