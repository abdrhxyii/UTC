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
  const [isWomenOpen, setWomenOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const menMenu = (
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
    </Menu>
  );

  // Women submenu for desktop
  const womenMenu = (
    <Menu>
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
        <div className="text-lg font-bold">GulfMobile</div>
        <div className="hidden md:flex space-x-10 items-center">
          <Link href="/" className="hover:text-gray-400 text-sm font-semibold">
            Home
          </Link>
          <Dropdown overlay={menMenu} trigger={['click']} className="hover:text-gray-400">
            <a className="text-sm font-semibold" onClick={e => e.preventDefault()}>
              Smart Phone <DownOutlined size={20} />
            </a>
          </Dropdown>
          <Dropdown overlay={womenMenu} trigger={['click']} className="hover:text-gray-400">
            <a className="text-sm font-semibold" onClick={e => e.preventDefault()}>
              Women <DownOutlined size={20} />
            </a>
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
        className={`fixed z-[100] inset-0 md:hidden bg-white text-black top-0 left-0 w-64 h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="text-lg font-bold mb-8">Gulf Mobile</div>
          <Link href="/" className="block py-2 hover:text-gray-400">
            Home
          </Link>

          <div className="block py-2">
            <div
              className="font-semibold text-sm mb-2 flex items-center justify-between cursor-pointer"
              onClick={() => setMenOpen(!isMenOpen)}
            >
              <span>Smart Phone</span>
              {isMenOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </div>

            {isMenOpen && (
              <div className="pl-4 text-sm">
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Rolex</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Omega</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Patek Philippe</Link>
                <Link href="#" className="block py-1 hover:text-gray-400">Apple Watch</Link>
                <Link href="#" className="block py-1 hover:text-gray-400">Samsung Galaxy Watch</Link>
                <Link href="#" className="block py-1 hover:text-gray-400">Fitbit</Link>
              </div>
            )}
          </div>

          <div className="block py-2">
            <div
              className="font-semibold text-sm mb-2 flex items-center justify-between cursor-pointer"
              onClick={() => setWomenOpen(!isWomenOpen)}
            >
              <span>Women</span>
              {isWomenOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </div>

            {isWomenOpen && (
              <div className="pl-4 text-sm">
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Fossil</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Michael Kors</Link>
                <Link href="#" className="block py-1 hover:text-gray-400 hover:underline">Guess</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="block py-2 hover:text-gray-400">
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
