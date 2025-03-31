"use client";
import { Facebook, Instagram, Twitter, ShoppingBag, Github, GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#143D60] text-white py-6 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="">
            <h1 className="text-lg font-bold ">Shop With Us </h1>
            <p className="text-gray-300 text-justify mt-3">
              Your one-stop destination for the latest trends in fashion and
              accessories. Quality you can trust, styles you'll love!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <p className="text-gray-400 mt-3">
              Follow us on social media for the latest updates & offers.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/dashboard"
                className="text-blue-500 hover:text-white hover:animate-bounce hover:scale-110"
              >
                <GithubIcon size={25} />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-700 hover:animate-bounce hover:scale-110"
              >
                <Instagram size={25} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-white hover:animate-bounce hover:scale-110"
              >
                <Twitter size={25} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300  mt-2 pt-2 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
