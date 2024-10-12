import { ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const ProductCategories = () => {
    const [collapsedSections, setCollapsedSections] = useState<string[]>([]);

    const toggleCollapse = (section: string) => {
        if (collapsedSections.includes(section)) {
            setCollapsedSections(collapsedSections.filter(item => item !== section));
        } else {
            setCollapsedSections([...collapsedSections, section]);
        }
    };

    return (
        <div className="border-b-2 border-gray-200 mb-4">
            <h2 className="font-bold mb-4">PRODUCT CATEGORIES</h2>
            <div className="mb-2">
                <button
                    onClick={() => toggleCollapse('android')}
                    className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                >
                    <span>Android</span>
                    {collapsedSections.includes('android') ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                </button>

                <ul className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden ${collapsedSections.includes('android') ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="text-sm hover:underline cursor-pointer">Android Tabs</li>
                    <li className="text-sm hover:underline cursor-pointer">DJI</li>
                    <li className="text-sm hover:underline cursor-pointer">Sounds</li>
                    <li className="text-sm hover:underline cursor-pointer">Android Devices</li>
                    <li className="text-sm hover:underline cursor-pointer">Whoop</li>
                </ul>
            </div>

            <div className="mb-2">
                <button
                    onClick={() => toggleCollapse('mac')}
                    className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                >
                    <span>Mac</span>
                    {collapsedSections.includes('mac') ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                </button>

                <ul className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden ${collapsedSections.includes('mac') ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="text-sm hover:underline cursor-pointer">MacBooks</li>
                    <li className="text-sm hover:underline cursor-pointer">Mac Accessories</li>
                </ul>
            </div>

            <div className="mb-2">
                <button
                    onClick={() => toggleCollapse('apple')}
                    className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                >
                    <span>Apple</span>
                    {collapsedSections.includes('apple') ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                </button>

                <ul className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden ${collapsedSections.includes('apple') ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="text-sm hover:underline cursor-pointer">iPads</li>
                    <li className="text-sm hover:underline cursor-pointer">iMac</li>
                    <li className="text-sm hover:underline cursor-pointer">Apple Watch</li>
                </ul>
            </div>

            <div className="mb-2">
                <button
                    onClick={() => toggleCollapse('airpods')}
                    className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                >
                    <span>AirPods</span>
                    {collapsedSections.includes('airpods') ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                </button>

                <ul className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden ${collapsedSections.includes('airpods') ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="text-sm hover:underline cursor-pointer">AirPods Pro</li>
                    <li className="text-sm hover:underline cursor-pointer">AirPods Max</li>
                    <li className="text-sm hover:underline cursor-pointer">AirPods Accessories</li>
                </ul>
            </div>

            <div className="mb-2">
                <button
                    onClick={() => toggleCollapse('jbl')}
                    className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                >
                    <span>JBL</span>
                    {collapsedSections.includes('jbl') ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                </button>

                <ul className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden ${collapsedSections.includes('jbl') ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="text-sm hover:underline cursor-pointer">Speakers</li>
                    <li className="text-sm hover:underline cursor-pointer">Headphones</li>
                    <li className="text-sm hover:underline cursor-pointer">Soundbars</li>
                </ul>
            </div>

            <div className="mb-2">
                <button
                    onClick={() => toggleCollapse('earphones')}
                    className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                >
                    <span>Earphones</span>
                    {collapsedSections.includes('earphones') ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                </button>

                <ul className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden ${collapsedSections.includes('earphones') ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="text-sm hover:underline cursor-pointer">Wireless Earphones</li>
                    <li className="text-sm hover:underline cursor-pointer">In-ear</li>
                    <li className="text-sm hover:underline cursor-pointer">Earphone Accessories</li>
                </ul>
            </div>

            <div className="mb-2">
                <button
                    onClick={() => toggleCollapse('phone-cover')}
                    className="flex justify-between items-center w-full text-left text-sm font-medium text-primary-black hover:text-blue-600 focus:outline-none"
                >
                    <span>Phone Cover</span>
                    {collapsedSections.includes('phone-cover') ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                </button>

                <ul className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden ${collapsedSections.includes('phone-cover') ? 'max-h-screen' : 'max-h-0'}`}>
                    <li className="text-sm hover:underline cursor-pointer">iPhone Covers</li>
                    <li className="text-sm hover:underline cursor-pointer">Samsung Covers</li>
                    <li className="text-sm hover:underline cursor-pointer">Universal Covers</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCategories;
