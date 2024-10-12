"use client";
import React from 'react'
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const { Panel } = Collapse;  

const CollapseSection = () => {
    const productSpecifications = {
        Brand: "Royal Oak",
        Material: "Gold",
        Movement: "Quartz",
        CaseDiameter: "33mm",
        WaterResistance: "50 meters",
        Warranty: "2 years",
      };
  return (

    <div className=" p-4 mt-3 mb-4">
        <Collapse
        ghost
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
            isActive ? (
            <MinusOutlined className="text-black text-2xl" />
            ) : (
            <PlusOutlined className="text-black text-2xl" />
            )
        )}
        className="space-y-2 border-b border-gray-600"
        >
        {/* Product Details */}
        <Panel
            header="Additional Information"
            key="1"
            className="text-lg font-semibold text-black"
            style={{ borderBottom: '1px solid #ddd' }} // Ensuring custom border color
        >
            <ul className="list-none">
            {Object.entries(productSpecifications).map(([key, value], index) => (
                <li key={index} className="text-sm mb-1">
                <span className="font-semibold">{key}: </span>
                {value}
                </li>
            ))}
            </ul>
        </Panel>

        {/* Size & Fit */}
        <Panel
            header="Size & Fit"
            key="2"
            className="text-lg font-semibold text-black"
            style={{ borderBottom: '1px solid #ddd' }} // Ensuring custom border color
        >
            <ul className="list-none">
            <li className="text-sm mb-1">
                <span className="font-semibold">Size: </span>
                Medium
            </li>
            <li className="text-sm mb-1">
                <span className="font-semibold">Fit: </span>
                Regular
            </li>
            </ul>
        </Panel>
        </Collapse>
    </div>
  )
}

export default CollapseSection