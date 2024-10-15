"use client";
import Image from 'next/image'
import { Trash2, X } from 'lucide-react'

export default function Cart({ onClose }: any) {
  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold text-black">Your Cart</h2>
        <X className="cursor-pointer text-black" onClick={onClose} />
      </div>
      
      <div className="p-4 space-y-4 overflow-y-auto flex-1" style={{ maxHeight: 'calc(100% - 220px)' }}>
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center p-2 rounded-lg border border-border-grey"
          >
            <Image src="/iPhone.png" alt="Product Image" width={70} height={80} className="rounded-lg" />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-black">Samsung Galaxy S22 Ultra</h3>
              <p className="text-sm text-gray-500">Samsung</p>
              <p className="text-sm font-semibold text-black">1 * LKR 200,000</p>
            </div>
            <Trash2 className="cursor-pointer text-black" />
          </div>
        ))}
      </div>
      
      <div className="p-4 space-y-2 border-t fixed bottom-0 w-full sm:w-[400px] bg-white">
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-black">Sub Total:</span>
          <span className="text-black">LKR 200,000</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-black">Sales Discount:</span>
          <span className="text-black">LKR 20,000</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-black">Total:</span>
          <span className="text-black">LKR 180,000</span>
        </div>
        <button className="w-full py-4 mt-4 bg-green-500 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
