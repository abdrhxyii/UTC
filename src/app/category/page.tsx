"use client";
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import { useState } from 'react';
import Footer from '../Components/Footer';
import { ChevronUp, ChevronDown } from 'lucide-react';

const MacProducts = () => {
    const [selectedSort, setSelectedSort] = useState(""); // State to manage selected value
    const [collapsedSection, setCollapsedSection] = useState<string | null>(null); // State to manage which section is collapsed

    const handleChange = (event: any) => {
        setSelectedSort(event.target.value);
    };

    const toggleCollapse = (section: string) => {
        setCollapsedSection(collapsedSection === section ? null : section);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row px-2 md:px-6 lg:px-24 mt-8">
                <aside className="w-full lg:w-1/4 bg-white p-4">
                    <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

                    <div className="mb-4">
                        <button
                            onClick={() => toggleCollapse('android')}
                            className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                        >
                            <span>Android</span>
                            {collapsedSection === 'android' ? (
                                <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                            ) : (
                                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                            )}
                        </button>

                        <ul className={`mt-2 space-y-2 transition-max-height duration-300 overflow-hidden ${collapsedSection === 'android' ? 'max-h-screen' : 'max-h-0'}`}>
                            <li className="text-sm hover:underline cursor-pointer">Android Tabs</li>
                            <li className="text-sm hover:underline cursor-pointer">DJI</li>
                            <li className="text-sm hover:underline cursor-pointer">Sounds</li>
                            <li className="text-sm hover:underline cursor-pointer">Android Devices</li>
                            <li className="text-sm hover:underline cursor-pointer">Whoop</li>
                        </ul>
                    </div>

                    {/* Collapsible Section for iPhones */}
                    <div className="mb-4">
                        <button
                            onClick={() => toggleCollapse('iphones')}
                            className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                        >
                            <span>iPhones</span>
                            {collapsedSection === 'iphones' ? (
                                <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                            ) : (
                                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                            )}
                        </button>

                        <ul className={`mt-2 space-y-2 transition-max-height duration-300 overflow-hidden ${collapsedSection === 'iphones' ? 'max-h-screen' : 'max-h-0'}`}>
                            <li className="text-sm hover:underline cursor-pointer">iPhone 14</li>
                            <li className="text-sm hover:underline cursor-pointer">iPhone 13</li>
                            <li className="text-sm hover:underline cursor-pointer">iPhone 12</li>
                            <li className="text-sm hover:underline cursor-pointer">iPhone SE</li>
                            <li className="text-sm hover:underline cursor-pointer">iPhone 11</li>
                        </ul>
                    </div>
                </aside>

                <main className="w-full px-2 lg:w-3/4 p-4">
                    <div className="flex w-full justify-end mb-5">
                        <select
                            value={selectedSort}
                            onChange={handleChange}
                            className="text-sm border-b-gray-50 rounded"
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
