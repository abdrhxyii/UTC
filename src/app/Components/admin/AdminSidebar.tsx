"use client";
import React, { useState } from "react";
import { 
  Menu, 
  MenuIcon, 
  LayoutDashboard, 
  PackagePlus, 
  Image, 
  HandCoins  
} from "lucide-react";

const AdminSidebar = ({ selectedMenuItem, onSelectMenuItem }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`fixed top-0 left-0 h-screen ${isCollapsed ? "w-16" : "w-64"} bg-white text-black transition-all duration-300 shadow-md`}>
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        {!isCollapsed && <h1 className="text-2xl font-semibold"></h1>}
        <button onClick={toggleSidebar} className="text-black">
          {isCollapsed ? <MenuIcon /> : <Menu />}
        </button>
      </div>
      
      {/* Menu */}
      <ul className="flex flex-col h-full overflow-y-auto">
        <li 
          className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors ${selectedMenuItem === "dashboard" ? "bg-gray-200" : ""}`} 
          onClick={() => onSelectMenuItem("dashboard")}
        >
          <LayoutDashboard className="text-xl" />
          {!isCollapsed && <span className="ml-4">Dashboard</span>}
        </li>
        
        <li 
          className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors ${selectedMenuItem === "products" ? "bg-gray-200" : ""}`} 
          onClick={() => onSelectMenuItem("products")}
        >
          <PackagePlus className="text-xl" />
          {!isCollapsed && <span className="ml-4">Products</span>}
        </li>

        <li 
          className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors ${selectedMenuItem === "ads" ? "bg-gray-200" : ""}`} 
          onClick={() => onSelectMenuItem("ads")}
        >
          <Image className="text-xl" />
          {!isCollapsed && <span className="ml-4">Ads</span>}
        </li>

        <li 
          className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors ${selectedMenuItem === "earnings" ? "bg-gray-200" : ""}`} 
          onClick={() => onSelectMenuItem("earnings")}
        >
          <HandCoins  className="text-xl" />
          {!isCollapsed && <span className="ml-4">Earnings</span>}
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
