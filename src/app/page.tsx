"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "./Components/Footer";
// import TestimonialBody from "./Components/Testimonial/TestimonialBody";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./Components/ProductCard";
import { ArrowUpRight } from "lucide-react";
// import CategoryCard from "./Components/CategoryCard";

export default function Home() {
  const route = useRouter();
  const watches = Array(18).fill({
    name: "",
    price: "",
    image: "",
  });

  const categories = [
    { title: 'Macbook', imageUrl: '/macbook.png' },
    { title: 'iPad', imageUrl: '/ipad.png' },
    { title: 'Apple Watch', imageUrl: '/apple-watch.png' },
    { title: 'Apple Vision Pro', imageUrl: '/apple-vision-pro.png' },
  ];

  return (
    <>
      <div>
        <Navbar />
        <div className="relative w-full h-[750px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/heroiphonesection.jpg"
            alt="iphone"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <button
              className="bg-transparent text-white px-6 py-3 text-lg rounded-3xl transition border border-white"
            >
              Buy Now
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

        <div className="mx-auto px-2 md:px-6 lg:px-24 mt-8">
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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div> */}



        {/* <p className="text-2xl font-semibold mb-8 text-center mt-4 font-mono">
          Customer feedbacks... 🎉
        </p>

        <TestimonialBody /> */}
        <Footer />
      </div>
    </>
  );
}
