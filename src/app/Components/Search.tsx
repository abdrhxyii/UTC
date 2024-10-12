"use client";
import { useState } from 'react';
import { X } from 'lucide-react'; 
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
            placeholder="Search for products"
            className="w-full text-black text-3xl font-bold p-3 rounded-lg text-center placeholder-black outline-none"
          />
        </div>
        <hr className="my-4 border-gray-300" />
      </div>
      {/* <div className="flex-grow overflow-y-auto w-full max-h-[75vh]"> 
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2">
          {[...Array(12)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
