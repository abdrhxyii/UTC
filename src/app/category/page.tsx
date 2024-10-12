"use client";
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import { useState } from 'react';
import Footer from '../Components/Footer';
import Layout from '../Components/CategoryLayout/Layout';

const MacProducts = () => {
    const [selectedSort, setSelectedSort] = useState(""); // State to manage selected value

    const handleChange = (event: any) => {
        setSelectedSort(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row px-2 md:px-6 lg:px-24 mt-8">
                <Layout />
                <main className="w-full px-2 lg:w-3/4 p-4">
                    <div className="flex w-full justify-end mb-5">
                        <select
                            value={selectedSort}
                            onChange={handleChange}
                            className="text-sm border-b-gray-50 rounded  p-2"
                        >
                            <option value="" disabled className="text-xs">
                                Default sorting
                            </option>
                            <option value="latest" className="text-xs">
                                Sort by latest
                            </option>
                            <option value="low-to-high" className="text-xs">
                                Sort by price: low to high
                            </option>
                            <option value="high-to-low" className="text-xs">
                                Sort by price: high to low
                            </option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
                </main>
            </div>
            <Footer />
        </>
    );
};

export default MacProducts;
