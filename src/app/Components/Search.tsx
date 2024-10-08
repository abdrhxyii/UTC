import { useState } from 'react';
import { X } from 'lucide-react'; // Make sure to use the X icon if you have a close button.
import ProductCard from './ProductCard';

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="flex justify-center items-center mb-4">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
                WebkitAppearance: 'searchfield', // Ensures default styling for search inputs
                MozAppearance: 'searchfield',
              }}
            placeholder="Search for products"
            className="w-full text-black text-3xl font-bold p-3 rounded-lg text-center placeholder-black outline-none"
          />
        </div>
        <hr className="my-4 border-gray-300" />
      </div>
      <div className="flex-grow overflow-y-auto w-full max-h-[75vh]"> {/* Use max height to limit the height */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2"> {/* Adjusted column numbers and added padding */}
          {/* Sample Product Cards */}
          {[...Array(12)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
