"use client";
import { ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function CategorySectionCards() {
    const products = [
        { title: 'Macbook', imageSrc: '/mb-removebg-preview.png' },
        { title: 'iPad', imageSrc: '/Apple-Ipad-Air-2020-Sky-Blue-removebg-preview.png' },
        { title: 'Apple Watch', imageSrc: '/watche.png' },
    ];
    
    return (
        <div className="mx-auto px-2 md:px-6 lg:px-24 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Link href={'/category'} key={product.title}>
                        <div className="bg-gray-50 rounded-md p-5 w-full h-[400px]">
                        <h2 className="text-xl font-bold ">{product.title}</h2>
                            <div className="text-black hover:underline text-xs flex flex-row items-center">View All <ChevronRight size={15}/></div>
                            <div className="mb-4 flex justify-center items-center">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.title}
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-contain w-full h-[300px]" 
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
