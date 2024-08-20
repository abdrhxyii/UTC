"use client";
import Image from 'next/image'
import { Trash2, X } from 'lucide-react'

export default function Cart ({ onClose }: any) {
  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <X className="cursor-pointer" onClick={onClose} />
      </div>
      <div className="p-4 space-y-4 overflow-y-auto">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center p-4 bg-gray-100 rounded-lg shadow"
          >
            <Image src="/product.png" alt="Product Image" width={60} height={60} />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Royal Oak Mini Frosted Gold Quartz</h3>
              <p className="text-sm text-gray-500">Audemars Piguet</p>
              <p className="text-sm font-semibold">1 * LKR 20,000</p>
            </div>
            <Trash2 className="cursor-pointer" />
          </div>
        ))}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between text-lg font-semibold">
          <span>Sub Total:</span>
          <span>LKR 23,000</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Sales Discount:</span>
          <span>LKR 23,000</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>LKR 23,000</span>
        </div>
        <button className="w-full py-2 mt-4 bg-green-500 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};