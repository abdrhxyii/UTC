"use client";
import { useState } from "react";
import { Menu, Dropdown } from 'antd';
import { ShoppingCart, User, Search, Menu as LucideMenu, ChevronDown, ChevronUp, X } from 'lucide-react';
import Cart from "./Cart";
import Link from "next/link";
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; 
import SearchModal from './Search'

export default function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenOpen, setMenOpen] = useState(false);
  const [isSectionOpen, setSectionOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const menMenu = (
    <Menu>
      <Menu.ItemGroup title="Smartphones">
        <Menu.Item key="1">
          <Link href="/">iPhone</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="#">Samsung Galaxy</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="#">Google Pixel</Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.ItemGroup title="Budget Phones">
        <Menu.Item key="4">
          <Link href="#">Xiaomi</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="#">OnePlus</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="#">Motorola</Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  const accessoriesMenu = (
    <Menu>
      <Menu.ItemGroup title="Accessories">
        <Menu.Item key="7">
          <Link href="#">Phone Cases</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link href="#">Chargers</Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link href="#">Screen Protectors</Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <nav className="bg-black text-white px-4 md:px-10 lg:px-10 py-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">GulfMobile</div>
        <div className="hidden md:flex space-x-10 items-center">
          <Link href="/" className="hover:text-gray-400 text-sm font-semibold">
            Home
          </Link>
          <Dropdown overlay={menMenu} trigger={['click']} className="hover:text-gray-400">
            <span className="text-sm font-semibold" onClick={e => e.preventDefault()}>
              Smartphones <DownOutlined size={20} />
            </span>
          </Dropdown>
          <Dropdown overlay={accessoriesMenu} trigger={['click']} className="hover:text-gray-400">
            <span className="text-sm font-semibold" onClick={e => e.preventDefault()}>
              Accessories <DownOutlined size={20} />
            </span>
          </Dropdown>

          <Link href="/about" className="hover:text-gray-400 text-sm font-semibold">
            About Us
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          <Search size={25} onClick={() => setSearchOpen(true)} />
          <ShoppingCart onClick={() => setCartOpen(true)} size={25} />
          <User size={25} />
          <div className="md:hidden">
            <LucideMenu size={25} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      <div
        className={`fixed z-[100] inset-0 md:hidden bg-white text-black top-0 left-0 w-3/4 h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-3">
          <div className="text-lg font-bold mb-8">Gulf Mobile</div>
          <Link href="/" className="font-semibold text-sm mb-2 flex items-center justify-between cursor-pointer border-b border-gray-300 pb-2 hover:text-gray-400">
            Home
          </Link>

          <div className="block py-2">
            <div
              className="font-semibold text-sm mb-2 flex items-center justify-between cursor-pointer border-b border-gray-300 pb-2"
              onClick={() => setMenOpen(!isMenOpen)}
            >
              <span>Smartphones</span>
              {isMenOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </div>

            {isMenOpen && (
              <div className="pl-4 text-sm">
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">iPhone</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Samsung Galaxy</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Google Pixel</Link>
                <Link href="#" className="block py-1 hover:text-gray-400">Xiaomi</Link>
                <Link href="#" className="block py-1 hover:text-gray-400">OnePlus</Link>
                <Link href="#" className="block py-1 hover:text-gray-400">Motorola</Link>
              </div>
            )}
          </div>

          <div className="block py-2">
            <div
              className="font-semibold text-sm mb-2 flex items-center justify-between cursor-pointer border-b border-gray-300 pb-2"
              onClick={() => setSectionOpen(!isSectionOpen)}
            >
              <span>Accessories</span>
              {isSectionOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </div>

            {isSectionOpen && (
              <div className="pl-4 text-sm">
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Phone Cases</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Chargers</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Screen Protectors</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="font-semibold text-sm mb-2 flex items-center justify-between cursor-pointer border-b border-gray-300 pb-2">
            About Us
          </Link>
        </div>
      </div>

      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />}

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full p-4 rounded-lg">
            <SearchModal />
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setSearchOpen(false)}
            >
              <X/>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
