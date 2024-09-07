"use client";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    route.push('Product/212')
  }

  return (
    <div>
      <Navbar/>
      <div className="mx-auto px-7 mt-3">
        <Image
        src={advertisemne.image}
        alt=""
        layout="responsive"
        width={1000}
        height={600}
        />
      </div>
      <div className="mx-auto px-6 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {watches.map((watch, index) => ( 
            <Link  key={index} href="/Product/212">
            <div className="bg-white p-2 rounded-lg" onClick={handleProductRouting}>
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
    </div>
  );
}
