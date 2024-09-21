"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/Components/Navbar';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { PlusOutlined } from "@ant-design/icons";

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
  const [quantity, setQuantity] = useState(1);

  const watches = Array(6).fill({
    name: "Royal Oak Mini-Frosted Gold Quartz",
    price: "LKR 23,000",
    image: "/product.png",
  });
  const categories = ["Luxury", "Women's Watches", "Gold"];
  const tags = ["Quartz", "Frosted", "Royal Oak", "Stylish", "Elegant"];
  const productSpecifications = {
    Brand: "Royal Oak",
    Material: "Gold",
    Movement: "Quartz",
    CaseDiameter: "33mm",
    WaterResistance: "50 meters",
    Warranty: "2 years",
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];


  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Image Section */}
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

          {/* Product Details Section */}
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">Royal Oak Mini Frosted Gold Quartz</h1>
            <p className="text-gray-600 mb-4">
              Brighten up your wardrobe with our Women&apos;s A-Line Yellow Dress. This vibrant and trendy dress features a stunning A-line silhouette that cinches at the waist and flows out gracefully, creating a chic and elegant look. The sunny yellow hue adds a pop of color, perfect for summer outings or any event.
            </p>
            
            {/* Categories */}
            <p className="text-black text-sm mb-2">
              <span className="font-semibold">Categories: </span>
              {categories.join(", ")}
            </p>

            {/* Tags */}
            <p className="text-black text-sm mb-4">
              <span className="font-semibold">Tags: </span>
              {tags.join(", ")}
            </p>

            {/* Price */}
            <p className="text-2xl font-bold mb-4">LKR 23,000</p>

            {/* Quantity Selection */}
            <div className="mb-4">
              <label htmlFor="quantity" className="font-semibold">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e: any) => setQuantity(e.target.value)}
                min={1}
                className="ml-2 w-16 border rounded-lg p-1"
              />
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <button className="bg-black text-white py-3 px-4 w-full mb-2 rounded-lg">Add {quantity} to cart</button>
            <button className="bg-gray-200 text-black py-3 px-4 w-full rounded-lg">Buy now</button>

            <Collapse
              ghost
              expandIconPosition="end" // Move the icon to the right
              expandIcon={({ isActive }) => (
                <PlusOutlined rotate={isActive ? 45 : 0} />
              )}
              className="mt-6 border-b border-[#ddd]"
            >
              <Panel 
                header="Product Specifications" 
                key="1" 
                className="border-b border-[#ddd]" 
              >
                <ul>
                  {Object.entries(productSpecifications).map(([key, value], index) => (
                    <li key={index} className="text-black text-sm mb-1">
                      <span className="font-semibold">{key}: </span>
                      {value}
                    </li>
                  ))}
                </ul>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
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
    </div>
  );
}
