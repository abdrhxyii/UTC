"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "./Components/Footer";
import TestimonialBody from "./Components/Testimonial/TestimonialBody";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head";

export default function Home() {
  const route = useRouter();
  const watches = Array(18).fill({
    name: "Royal Oak Mini-Frosted Gold Quartz",
    price: "LRK 23,000",
    image: "/product.png",
  });

  const advertisemne = {
    image: "/advertisement.jpg",
  };

  const handleProductRouting = () => {
    route.push("product/212");
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto px-4 md:px-7 lg:px-7 mt-3 min-h-40">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative h-[170px] md:h-[440px]">
              <Image
                src={'/vercel.svg'}
                alt="Vercel"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                priority
                style={{ borderRadius: 10 }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] md:h-[440px]">
              <Image
                src={advertisemne.image}
                alt="Advertisement"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                priority
                style={{ borderRadius: 10 }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[170px] md:h-[440px]">
              <Image
                src={'/vercel.svg'}
                alt="Vercel"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                priority
                style={{ borderRadius: 10 }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9274243186707236"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div className="mx-auto px-2 md:px-6 lg:px-6 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {watches.map((watch, index) => (
            <Link key={index} href="/product/sjkjakajshuoquobakbdyev">
              <div className="bg-white p-2 rounded-lg cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>

      <p className="text-2xl font-semibold mb-8 text-center mt-4 font-mono">Customer feedbacks... 🎉</p>
      <TestimonialBody/>
      <Footer />
    </div>
  );
}
