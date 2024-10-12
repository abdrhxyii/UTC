// components/Footer.tsx
"use client";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-lg font-bold">Gulf Mobile</h3>
          <p className="text-gray-400 mt-2 text-sm">
            We offer the finest collection of luxury, smart, and fashion watches for every style and occasion.
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold">Follow Us On</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="hover:text-gray-400" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Twitter className="hover:text-gray-400" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="hover:text-gray-400" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="hover:text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Brands Section */}
        <div>
          <h3 className="text-lg font-bold">Brands</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Samsung</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Apple</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Redmi</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Huawei</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Oppo</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Samsung Galaxy Watch</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Vivo</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">JBL</Link></li>
            <li><Link href="#" className="hover:text-gray-400 hover:underline">Nokia</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <div className="mt-2 text-gray-400 text-sm">
            <p><strong>Business Hours:</strong></p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
            <p className="mt-4"><strong>Email:</strong> contact@mybrand.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Gulf Mobile. All rights reserved.</p>
      </div>
    </footer>
  );
}
