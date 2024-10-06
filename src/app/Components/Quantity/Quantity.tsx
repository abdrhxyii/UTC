// components/Quantity.js
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Import icons from lucide-react

export default function Quantity({ initialQuantity = 1, maxQuantity = 10 }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-5">
      <button
        onClick={handleDecrement}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        <Minus size={16} />
      </button>
      <span className="text-xl font-semibold">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
