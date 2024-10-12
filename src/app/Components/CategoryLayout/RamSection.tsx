"use client";
import { useState } from "react";
import { Checkbox } from "antd";

const ramOptions = ["2GB", "4GB", "6GB", "8GB", "12GB", "16GB"];

const RamSection = () => {
  const [selectedRAM, setSelectedRAM] = useState([]);

  const handleChange = (checkedValues: any) => {
    setSelectedRAM(checkedValues);
  };

  return (
    <div className="border-b-2 border-gray-200 mb-4">
      <h2 className="font-bold mb-6">FILTER BY RAM</h2>

      <Checkbox.Group
        options={ramOptions}
        value={selectedRAM}
        onChange={handleChange}
        className="flex flex-col space-y-2 mb-4"
      />
    </div>
  );
};

export default RamSection;