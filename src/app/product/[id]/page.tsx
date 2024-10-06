"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/Components/Navbar';
import { Collapse } from 'antd';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Footer from '@/app/Components/Footer';
import Quantity from '@/app/Components/Quantity/Quantity';
import CollapseSection from '@/app/Components/CollapseSection/CollapseSection';
import ProductCard from '@/app/Components/ProductCard';
import Link from 'next/link';
import { FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import Breadcrumbs from '@/app/Components/Breadcrumbs/Breadcrumbs';

const { Panel } = Collapse;

const images = [
  '/iphon.webp',
  '/iphon.webp',
  '/iphon.webp',
  '/iphon.webp',
  '/iphon.webp',
];

export default function Product() {

    const [mainImage, setMainImage] = useState(images[0]);
    const [selectedColor, setSelectedColor] = useState("Black");
    const [selectedStorage, setSelectedStorage] = useState("64GB");
    const [isExpanded, setIsExpanded] = useState(false);

    const watches = Array(6).fill({
      name: "Royal Oak Mini-Frosted Gold Quartz",
      price: "LKR 23,000",
      image: "/iphon.webp",
    });
    const description = `Brighten up your wardrobe with our Women's A-Line Yellow Dress. This vibrant and trendy dress features a stunning A-line silhouette that cinches at the waist and flows out gracefully, creating a chic and elegant look. The sunny yellow hue adds a pop of color, perfect for summer outings or any event. You can pair it with your favorite accessories to enhance the look further. Perfect for casual wear or dressing up for special occasions, this dress will make a bold fashion statement and make you feel comfortable all day long.`;

    const characterLimit = 150;

    const categories = ["Luxury", "Women's Watches", "Gold"];
    const tags = ["Quartz", "Frosted", "Royal Oak", "Stylish", "Elegant"];
    const colors = ["Black", "White", "Blue", "Red"];
    const storageOptions = ["64GB", "128GB", "256GB", "512GB"];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <Breadcrumbs/>
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
            <h1 className="text-3xl font-bold mb-2">Royal Oak Mini Frosted Gold Quartz</h1>
            <p className="text-xl font-bold mb-2 text-blue-600">LKR 23,000</p>

            <p className="text-gray-600 mb-4 text-sm">
              {isExpanded
                ? description
                : `${description.substring(0, characterLimit)}...`}
              {description.length > characterLimit && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-500 ml-1"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </p>

            <p className="text-black text-sm mb-3">
              <span className="font-semibold">Color: </span>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="ml-2 border rounded px-2 py-1"
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </p>

            <p className="text-black text-sm mb-3">
              <span className="font-semibold">Storage: </span>
              <select
                value={selectedStorage}
                onChange={(e) => setSelectedStorage(e.target.value)}
                className="ml-2 border rounded px-2 py-1"
              >
                {storageOptions.map((storage) => (
                  <option key={storage} value={storage}>
                    {storage}
                  </option>
                ))}
              </select>
            </p>

            <Quantity initialQuantity={1} maxQuantity={10}/>

            <p className="text-black text-sm mb-2">
              <span className="font-semibold">SKU: N/A </span>
            </p>
            
            <p className="text-black text-sm mb-2">
              <span className="font-semibold">Categories: </span>
              {categories.join(", ")}
            </p>

            <p className="text-black text-sm mb-2">
              <span className="font-semibold">Tags: </span>
              {tags.join(", ")}
            </p>

            <p className="text-black text-sm mb-3">
              <span className="font-semibold flex flex-row space-x-3">Follow: 
                  <Link href="https://facebook.com" aria-label="Facebook" className='ml-2 flex items-center'>
                    <FaFacebook className="hover:text-gray-400"/>
                  </Link>
                  <Link href="https://instagram.com" aria-label="Instagram" className='flex items-center' >
                    <Instagram className="hover:text-gray-400" size={14}/>
                  </Link>
                  <Link href="https://tiktok.com" aria-label="Facebook" className='flex items-center'>
                    <FaTiktok className="hover:text-gray-400"/>
                  </Link>
                  <Link href="" aria-label="LinkedIn" className='flex items-center'>
                    <FaWhatsapp className="hover:text-gray-400"/>
                  </Link>
                 
              </span>
            </p>
            <div className="flex flex-row gap-2">
              <button className="bg-black text-white py-3 px-4 w-full mb-2 rounded-lg text-sm">Add to cart (0)</button>
              <button className="bg-gray-200 text-black py-3 px-4 w-full mb-2 rounded-lg text-sm">Buy now</button>
            </div>
            <CollapseSection/>
          </div>
        </div>
      </div>

      <p className="px-4 md:px-8 lg:px-14 font-semibold">You may also Like</p>
      <div className="mx-auto px-4 md:px-8 lg:px-10 mt-4 mb-8">
      <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1} 
            navigation={false}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 }, 
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }, 
              1280: { slidesPerView: 5 }, 
            }}
          >
            {watches.map((watch, index) => (
              <SwiperSlide key={index}>
                <ProductCard />
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
      <Footer/>
    </div>
  );
}
