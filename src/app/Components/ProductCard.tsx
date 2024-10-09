import { ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard() {
  return (
    <>
      <Link href={'/product/iphone'}>
        <div className="max-w-xs rounded-lg border border-gray-200 overflow-hidden transition-shadow duration-300 ease-in-out relative group">
          <div className="relative">
            <img 
              src="/iphon.webp" 
              alt="iPhone 16 Pro Max" 
              className="w-full object-center"
            />
            {/* Icons */}
            <div className="absolute top-2 right-2 space-y-2 transition-all duration-300 transform translate-x-0 md:translate-x-8 md:group-hover:translate-x-0 opacity-100 md:opacity-0 md:group-hover:opacity-100">
              <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition-all duration-300">
                <ShoppingCart className="w-5 h-5 text-gray-500" />
              </button>
              <button className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition-all duration-300">
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
      </Link>
    </>
  );
}
