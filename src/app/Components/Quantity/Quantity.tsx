import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import React, {useState} from 'react'

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

  return (
    <div className="mb-4">
    <label htmlFor="quantity" className="font-semibold">Quantity:</label>
    <div className="flex flex-row items-center mt-2">
      <button
        className="border border-gray-300 rounded-lg p-1"
        aria-label="Decrease Quantity"
      >
        <MinusOutlined />
      </button>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e: any) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        min={1}
        className="mx-2 w-16 text-center border border-gray-300 rounded-lg p-1"
      />
      <button
        className="border border-gray-300 rounded-lg p-1"
        aria-label="Increase Quantity"
      >
        <PlusOutlined />
      </button>
    </div>
  </div>
  )
}

export default Quantity