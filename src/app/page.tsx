"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";

export default function Home() {

  const route = useRouter()
  const watches = Array(18).fill({
    name: "Royal Oak Mini-Frosted Gold Quartz",
    price: "LRK 23,000",
    image: "/product.png" 
  });

  const advertisemne = {
    image: "/advertisement.jpg"
  }

  const handleProductRouting = () => {
    route.push('product/212')
  }

  return (
    <div>
      <Navbar/>
      <div className="mx-auto px-4 md:px-7 lg:px-7 mt-3">
        <Image
        src={advertisemne.image}
        alt=""
        layout="responsive"
        width={1000}
        height={600}
        style={{borderRadius: 10}}
        />
      </div>
      <div className="mx-auto px-2 md:px-6 lg:px-6 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {watches.map((watch, index) => ( 
            <Link href="/product/sjkjakajshuoquobakbdyev">
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
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  );
}
