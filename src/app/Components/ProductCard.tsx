// components/ProductCard.jsx
import { ShoppingCart, Heart } from 'lucide-react';

export default function ProductCard() {
  return (
    <div className="max-w-xs rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 ease-in-out">
      <div className="relative">
        <img 
          src="/iphon.webp" 
          alt="iPhone 16 Pro Max" 
          className="w-full object-center"
        />
        {/* Icons */}
        <div className="absolute top-2 right-2 space-y-2">
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
            <ShoppingCart className="w-5 h-5 text-gray-500" />
          </button>
          <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
            <Heart className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="p-4">
        {/* Product details */}
        <h2 className="text-sm font-semibold text-primary-black">iPhone 16 Pro Max</h2>
        <p className="text-xs text-gray-500">Apple, iPhone</p>
        {/* Color options */}
        <div className="flex space-x-2 my-2">
          <span className="w-4 h-4 rounded-full bg-[#d9c1a1] border border-gray-300"></span>
          <span className="w-4 h-4 rounded-full bg-[#d1b5a0] border border-gray-300"></span>
          <span className="w-4 h-4 rounded-full bg-black border border-gray-300"></span>
          <span className="w-4 h-4 rounded-full bg-white border border-gray-300"></span>
        </div>
        {/* Price */}
        <p className="text-base font-bold text-blue-600">Rs. 514,900.00</p>
      </div>
    </div>
  );
}
