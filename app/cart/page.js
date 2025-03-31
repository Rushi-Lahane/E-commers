"use client";
import { IndianRupee } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, selectCartItems, setCart } from '../redux/reducer/cartSlice';
import { toast } from 'react-toastify';

const cart = () => {
  const product = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window != "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      dispatch(setCart(storedCart));
      setLoading(false);
    }
  }, [dispatch]);


  function handleRemove(id) {
    // Show confirmation alert
    toast.warn(
      <div>
        <p className="font-semibold">Are you sure you want to remove this product?</p>
        <div className="flex justify-center gap-3 mt-2">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            onClick={() => {
              dispatch(remove(id));
              toast.dismiss();
              toast.error("❌ Product Removed from Cart", {
                position: "top-center",
                autoClose: 2000,
              });
            }}
          >
            Yes
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  }


  // Calculate Subtotal (Total price of all items)
  const subtotal = product.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  // Apply Discount (10% of subtotal)
  const discount = (subtotal * 10) / 100;

  // Calculate GST (18% of subtotal after discount)
  const gst = ((subtotal - discount) * 18) / 100;

  // Set Delivery Charges (Free if subtotal > ₹5000, else ₹100)
  const deliveryCharges = subtotal > 5000 ? 0 : 100;

  // Final Amount to Pay
  const finalAmount = subtotal - discount + gst + deliveryCharges;




  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6">
        <div className="w-11/12 mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-900 text-white p-4 rounded-md shadow-md">
            <h1 className="text-xl font-bold">🛒 Your Shopping Cart</h1>
            <Link href={"/"}>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200 transition">
                🏠 Go to Products
              </button>
            </Link>
          </div>

          {/* Cart Items */}
          {product.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
              {product.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition">
                  <h2 className="text-center text-blue-900 text-xl font-semibold mb-3">{item.name}</h2>
                  <img src={item.url} alt={item.name} className="h-52 overflow-auto w-full object-cover rounded-md shadow-md" />
                  <p className="text-gray-700 mt-3 text-sm text-center h-22 overflow-auto">{item.desc}</p>
                  <p className='mt-3 overflow-auto h-25'>{item.Performance}</p>
                  <h2 className='font-bold flex items-center mt-3 p-2'><IndianRupee />{item.price}</h2>
                  {/* Remove Button */}
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all"
                    >
                      Remove
                    </button>
                  </div>
                  <h2 className='font-bold flex'>
                    <IndianRupee />{item.price} x {item.quantity}
                  </h2>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-600 mt-10">Your cart is empty. Add some products!</p>
          )}
        </div>
      </div>
      {/* Total Amount Section */}
      <div className="bg-white p-5 mt-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-gray-700 border-b pb-2">Price Details</h2>

        <div className="flex justify-between items-center mt-3">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold flex"><IndianRupee /> {subtotal.toLocaleString('en-IN')}</p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">Discount (10%)</p>
          <p className="text-green-600 font-semibold flex">- <IndianRupee /> {discount.toLocaleString('en-IN')}</p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">Delivery Charges</p>
          <p className={`font-semibold ${deliveryCharges === 0 ? 'text-green-600' : ''}`}>
            {deliveryCharges === 0 ? "FREE" : `+ ₹${deliveryCharges.toLocaleString('en-IN')}`}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">GST (18%)</p>
          <p className="font-semibold flex"><IndianRupee /> {gst.toLocaleString('en-IN')}</p>
        </div>


        <hr className="my-3" />

        <div className="flex justify-between items-center text-lg font-bold text-blue-900">
          <p>Total Payable</p>
          <p><IndianRupee /> {finalAmount.toLocaleString('en-IN')}</p>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition-all">
          Proceed to Checkout
        </button>
      </div>

    </>
  )
}

export default cart