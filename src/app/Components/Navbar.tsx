import { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
// import Cart from "../Pages/Cart";
import { useRouter } from "next/navigation";
import Cart from "./Cart";

export default function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);
  const route = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  // const handleCartOpening = () => {
  //   console.log("clicked")
  //   route.push("cart")
  // }

  return (
    <nav className="bg-black text-white px-4 py-4 m:px-10 m:py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Title */}
        <div className="text-lg font-bold">MyBrand</div>

        {/* Right side - Icons and Menu */}
        <div className="hidden md:flex space-x-20 items-center">
          <a href="#" className="hover:text-gray-400 text-sm font-semibold">Home</a>
          <a href="#" className="hover:text-gray-400 text-sm font-semibold">Men</a>
          <a href="#" className="hover:text-gray-400 text-sm font-semibold">Women</a>
          <a href="#" className="hover:text-gray-400 text-sm font-semibold">About Us</a>
        </div>

        <div className="flex space-x-4 items-center">
          <Search size={19}/>
          <ShoppingCart onClick={() => setCartOpen(true)} size={19}/>
          <User size={19}/>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <Menu onClick={() => setIsOpen(!isOpen)}/>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 md:hidden bg-black text-white top-0 left-0 w-64 h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="text-lg font-bold mb-8">MyBrand</div>
          <a href="#" className="block py-2 hover:text-gray-400">Home</a>
          <a href="#" className="block py-2 hover:text-gray-400">Men</a>
          <a href="#" className="block py-2 hover:text-gray-400">Women</a>
          <a href="#" className="block py-2 hover:text-gray-400">About Us</a>
        </div>
      </div>
      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </nav>
  );
}
