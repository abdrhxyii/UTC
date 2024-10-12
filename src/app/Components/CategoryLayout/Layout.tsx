"use client";
import PriceFilter from "./PriceFilter";
import ProductCategories from "./ProductCategories";
import RamSection from "./RamSection";
import Storage from "./Storage";

const Layout = () => {
    return (
        <aside className="w-full lg:w-1/4 bg-white p-4">
            <ProductCategories/>
            <PriceFilter/>
            <RamSection/>
            <Storage/>
        </aside>
    );
};

export default Layout;
