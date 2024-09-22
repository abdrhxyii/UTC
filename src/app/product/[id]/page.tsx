"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/Components/Navbar';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Footer from '@/app/Components/Footer';
import Quantity from '@/app/Components/Quantity/Quantity';
import CollapseSection from '@/app/Components/CollapseSection/CollapseSection';

const { Panel } = Collapse;

const images = [
  '/product.png',
  '/product.png',
  '/product.png',
  '/product.png',
  '/product.png',
];

export default function Product() {

    const [mainImage, setMainImage] = useState(images[0]);

    const watches = Array(6).fill({
      name: "Royal Oak Mini-Frosted Gold Quartz",
      price: "LKR 23,000",
      image: "/product.png",
    });
    const categories = ["Luxury", "Women's Watches", "Gold"];
    const tags = ["Quartz", "Frosted", "Royal Oak", "Stylish", "Elegant"];

    

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-[40%]">
            <div className="mb-4">
              <Image
                src={mainImage}
                alt="Watch"
                width={500}
                height={500}
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="flex space-x-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className="w-1/5"
                >
                  <Image
                    src={img}
                    alt={`Watch ${index + 1}`}
                    width={100}
                    height={100}

                    className="h-auto w-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">Royal Oak Mini Frosted Gold Quartz</h1>
            <p className="text-gray-600 mb-4 text-lg">
              Brighten up your wardrobe with our Women&apos;s A-Line Yellow Dress. This vibrant and trendy dress features a stunning A-line silhouette that cinches at the waist and flows out gracefully, creating a chic and elegant look. The sunny yellow hue adds a pop of color, perfect for summer outings or any event.
            </p>
            
            <p className="text-black text-sm mb-2">
              <span className="font-semibold">Categories: </span>
              {categories.join(", ")}
            </p>

            <p className="text-black text-sm mb-4">
              <span className="font-semibold">Tags: </span>
              {tags.join(", ")}
            </p>

            <p className="text-2xl font-bold mb-4">LKR 23,000</p>

            <Quantity/>
            <button className="bg-black text-white py-3 px-4 w-full mb-2 rounded-lg">Add to cart (0)</button>
            <button className="bg-gray-200 text-black py-3 px-4 w-full rounded-lg">Buy now</button>
            <CollapseSection/>
          </div>
        </div>
      </div>

      <p className="px-4 md:px-8 lg:px-12 font-semibold">You may also Like</p>
      <div className="mx-auto px-4 md:px-8 lg:px-10 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {watches.map((watch, index) => (
            <div key={index} className="bg-white p-2 rounded-lg">
              <Image
                src={watch.image}
                alt={watch.name}
                width={200}
                height={200}
                className="w-full h-auto rounded-xl"
              />
              <h3 className="text-sm font-semibold mt-2">{watch.name}</h3>
              <p className="text-sm text-gray-600 mt-3">{watch.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
