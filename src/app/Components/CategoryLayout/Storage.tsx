"use client";
import { useState } from "react";
import { Checkbox } from "antd";

const storageOptions = ["32GB", "64GB", "128GB"];

const Storage = () => {
  const [selectedstorage, setSelectedstorage] = useState([]);

  const handleChange = (checkedValues: any) => {
    setSelectedstorage(checkedValues);
  };

  return (
    <div className="border-b-2 border-gray-200 mb-4">
      <h2 className="font-bold mb-6">FILTER BY STORAGE</h2>

      <Checkbox.Group
        options={storageOptions}
        value={selectedstorage}
        onChange={handleChange}
        className="flex flex-col space-y-2 mb-4"
      />
    </div>
  );
};

export default Storage;