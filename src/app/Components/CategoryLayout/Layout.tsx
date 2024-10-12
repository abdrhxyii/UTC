"use client";
import { X } from "lucide-react";
import PriceFilter from "./PriceFilter";
import ProductCategories from "./ProductCategories";
import RamSection from "./RamSection";
import Storage from "./Storage";

const Layout = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <aside
            className={`fixed inset-y-0 left-0 w-3/4 bg-white overflow-y-auto p-4 z-50 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-1/4`}
        >
            <button className="lg:hidden mb-4 text-red-500 flex w-full justify-end" onClick={onClose}>
                <X/>
            </button>
            <ProductCategories />
            <PriceFilter />
            <RamSection />
            <Storage />
        </aside>
    );
};

export default Layout;
