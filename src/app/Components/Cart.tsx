import { useState } from "react";
import { X } from 'lucide-react';

export default function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const cartItems = [
        { name: "Royal Oak Mini Frosted Gold Quartz", price: 20000, quantity: 1 },
        { name: "Royal Oak Mini Frosted Gold Quartz", price: 20000, quantity: 1 },
        { name: "Royal Oak Mini Frosted Gold Quartz", price: 20000, quantity: 1 },
    ];

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div>
    <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-full w-full sm:w-96 bg-white shadow-xl transform ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <X onClick={() => setIsCartOpen(false)} className="cursor-pointer" />
          </div>
          <div className="p-4 overflow-y-auto h-full">
            {cartItems.map((item, index) => (
              <div key={index} className="mb-4 pb-4 border-b">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">1 * LKR {item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Sub Total:</span>
              <span>LKR {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Sales Discount:</span>
              <span>LKR {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span>LKR {totalPrice.toLocaleString()}</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
