"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "./Components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./Components/ProductCard";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Banner from "./Components/Banner";
import CategorySectionCards from "./Components/CategorySectionCards";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("/heroweb.jpg");
  const [activeTab, setActiveTab] = useState("samsung");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageSrc("/heromobile.jpg"); 
      } else {
        setImageSrc("/heroweb.jpg"); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const watches = Array(18).fill({
    name: "",
    price: "",
    image: "",
  });

  const categories = [
    { title: "SAMSUNG", id: "samsung" },
    { title: "REDMI", id: "redmi" },
    { title: "ZTE", id: "zte" },
    { title: "GOOGLE", id: "google" },
    { title: "HONOR", id: "honor" },
    { title: "INFINIX", id: "infinix" },
  ];

  return (
    <>
      <div>
        <Navbar />
        <div className="relative w-full h-[700px] md:h-[600px] lg:h-[600px]">
          <Image
            src={imageSrc}
            alt="iphone"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <button
              className="bg-transparent text-white hover:text-black hover:bg-white px-6 py-3 text-xs rounded-3xl transition border border-white flex items-center justify-center space-x-2"
            >
              <span>Buy Now</span>
              <ArrowUpRight size={18}/>
            </button>
          </div>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] mx-auto px-4 md:px-60">
          <Image
            src="/herosection1.png"
            alt="iphone"
            fill
            quality={100}
            className="object-contain"
          />
        </div>

        <div className="mx-auto px-2 md:px-6 lg:px-24 mt-8">
          <div className="hidden md:flex w-full flex-row justify-between items-center mb-6">
            <p className="text-2xl font-semibold">New Arrival</p>
            <button className="flex items-center text-sm justify-center text-black border border-gray-200 hover:text-white px-4 py-2 rounded-2xl hover:bg-black transition duration-300 ease-in-out">
              Browse New Arrival
              <ArrowUpRight className="ml-2" />
            </button>
          </div>
        <div className="hidden md:flex">
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
        </div>

        <div className="mx-auto px-2 md:px-6 lg:px-24 mt-8 mb-40">
            <div className="w-full flex flex-col justify-center items-center mb-6">
              <h4 className="text-3xl font-bold">Apple iPhone</h4>
              <p className="text-sm text-gray-custom font-normal">Which iPhone is right for you?</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          
          <CategorySectionCards/>

          <div className="mx-auto px-2 md:px-6 lg:px-24 mt-8">
            <div className="w-full flex flex-col justify-center items-center mt-8">
              <h4 className="text-3xl font-bold">Android Collection</h4>
              <p className="text-sm text-gray-custom font-normal">Which Android is right for you?</p>
            </div>

            <div className="overflow-x-auto mt-6">
              <div className="flex md:justify-center lg:justify-center space-x-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`text-sm font-semibold py-2 px-4 transition duration-300 ${
                      activeTab === category.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 mb-8">
              <div className={`tab-content ${activeTab === "samsung" ? "block" : "hidden"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
              <div className={`tab-content ${activeTab === "redmi" ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
              <div className={`tab-content ${activeTab === "zte" ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
              <div className={`tab-content ${activeTab === "google" ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
              <div className={`tab-content ${activeTab === "honor" ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
              <div className={`tab-content ${activeTab === "infinix" ? "block" : "hidden"}`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    </>
  );
}
