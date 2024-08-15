"use client";
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/Components/Navbar';

const images = [
  '/product.png',
  '/product.png',
  '/product.png',
  '/product.png',
  '/product.png',
];

export default function Product() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src={mainImage} alt="Watch" width={500} height={500} className="h-auto w-full rounded-lg" />
          </div>
          <div className="flex space-x-2">
            {images.map((img, index) => (
              <button key={index} onClick={() => setMainImage(img)} className="w-1/5">
                <Image src={img} alt={`Watch ${index + 1}`} width={100} height={100} className="h-auto w-full" />
              </button>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">Royal Oak Mini Frosted Gold Quartz</h1>
          <p className="text-gray-600 mb-4">
          Brighten up your wardrobe with our Women&apos;s A-Line Yellow Dress. This vibrant and trendy dress features a stunning A-line silhouette that cinches at the waist and flows out gracefully, creating a chic and elegant look. The sunny yellow hue adds a pop of color, perfect for summer outings or any event.
          </p>
          <p className="text-2xl font-bold mb-4">LKR 23,000</p>
          <button className="bg-black text-white py-2 px-4 w-full mb-2 rounded-lg">Add to cart</button>
          <button className="bg-gray-200 text-black py-2 px-4 w-full rounded-lg">Buy now</button>
        </div>
      </div>
    </div>
    </div>
  );
}
