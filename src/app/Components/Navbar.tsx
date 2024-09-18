import { useState } from "react";
import { Menu, Dropdown } from 'antd';
import { ShoppingCart, User, Search, Menu as LucideMenu, ChevronDown, ChevronUp } from 'lucide-react';
import Cart from "./Cart";
import Link from "next/link";
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';  // Import Ant Design styles

export default function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isWatchBrandsOpen, setWatchBrandsOpen] = useState(false); // New state for watch brands list

  // Menu for the mega dropdown (desktop only)
  const menu = (
    <Menu>
      <Menu.ItemGroup title="Luxury Watches">
        <Menu.Item key="1">
          <a href="#">Rolex</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#">Omega</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#">Patek Philippe</a>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.ItemGroup title="Smart Watches">
        <Menu.Item key="4">
          <a href="#">Apple Watch</a>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="#">Samsung Galaxy Watch</a>
        </Menu.Item>
        <Menu.Item key="6">
          <a href="#">Fitbit</a>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.ItemGroup title="Fashion Watches">
        <Menu.Item key="7">
          <a href="#">Fossil</a>
        </Menu.Item>
        <Menu.Item key="8">
          <a href="#">Michael Kors</a>
        </Menu.Item>
        <Menu.Item key="9">
          <a href="#">Guess</a>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <nav className="bg-black text-white px-4 md:px-10 lg:px-10 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Title */}
        <div className="text-lg font-bold">MyBrand</div>

        {/* Right side - Icons and Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link href="/" className="hover:text-gray-400 text-sm font-semibold">
            Home
          </Link>

          {/* Mega Menu Dropdown for desktop */}
          <Dropdown overlay={menu} trigger={['click']} className="hover:text-gray-400">
            <a className="text-sm font-semibold" onClick={e => e.preventDefault()}>
              Watch Brands <DownOutlined />
            </a>
          </Dropdown>

          <Link href="/about" className="hover:text-gray-400 text-sm font-semibold">
            About Us
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          <Search size={19} />
          <ShoppingCart onClick={() => setCartOpen(true)} size={19} />
          <User size={19} />

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <LucideMenu onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 md:hidden bg-white text-black top-0 left-0 w-64 h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="text-lg font-bold mb-8">MyBrand</div>
          <Link href="/" className="block py-2 hover:text-gray-400">
            Home
          </Link>

          {/* Watch Brands List for Mobile */}
          <div className="block py-2">
            <div
              className="font-semibold text-sm mb-2 flex items-center justify-between cursor-pointer"
              onClick={() => setWatchBrandsOpen(!isWatchBrandsOpen)}
            >
              <span>Watch Brands</span>
              {isWatchBrandsOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </div>

            {/* Show the list only if the "Watch Brands" is clicked */}
            {isWatchBrandsOpen && (
              <div className="pl-4">
                <a href="#" className="block py-1 hover:text-gray-400">Rolex</a>
                <a href="#" className="block py-1 hover:text-gray-400">Omega</a>
                <a href="#" className="block py-1 hover:text-gray-400">Patek Philippe</a>
                <a href="#" className="block py-1 hover:text-gray-400">Apple Watch</a>
                <a href="#" className="block py-1 hover:text-gray-400">Samsung Galaxy Watch</a>
                <a href="#" className="block py-1 hover:text-gray-400">Fitbit</a>
                <a href="#" className="block py-1 hover:text-gray-400">Fossil</a>
                <a href="#" className="block py-1 hover:text-gray-400">Michael Kors</a>
                <a href="#" className="block py-1 hover:text-gray-400">Guess</a>
              </div>
            )}
          </div>

          <Link href="/about" className="block py-2 hover:text-gray-400">
            About Us
          </Link>
        </div>
      </div>

      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </nav>
  );
}
