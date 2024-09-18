"use client";
import React, { useState } from 'react';
import { Form, Input, InputNumber, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Option } = Select;

// Define an interface for the product
interface Product {
  name: string;
  price: number;
  category: string;
  description?: string;
}

const maxImages = 6;

const ProductForm: React.FC = () => {
  const [form] = Form.useForm();
  const [product, setProduct] = useState<Product | null>(null);

  const handleFinish = (values: any) => {
    const { name, price, category, description } = values;
    setProduct({ name, price, category, description });
    form.resetFields();
  };

  return (
    <div className="p-4">
      <Form
        form={form}
        layout="vertical"
        className="mb-8"
        onFinish={handleFinish}
      >
        <Form.Item label="Product Name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Enter product name" style={{ height: '40px' }} />
        </Form.Item>

        <Form.Item label="Price" name="price" rules={[{ required: true }]}>
          <InputNumber min={1} prefix="$" style={{ width: '100%', height: '40px' }} />
        </Form.Item>

        {/* Category Dropdown */}
        <Form.Item label="Category" name="category" rules={[{ required: true }]}>
          <Select placeholder="Select a category" style={{ height: '40px' }}>
            <Option value="watches">Watches</Option>
            <Option value="electronics">Electronics</Option>
            <Option value="clothing">Clothing</Option>
            <Option value="accessories">Accessories</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} placeholder="Enter product description" style={{ height: '100px' }} />
        </Form.Item>

        <Form.Item label="Images">
          <Upload listType="picture" maxCount={maxImages} accept="image/*">
            <Button icon={<UploadOutlined />}>Upload (Max: {maxImages})</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form>

      {/* Display Product Card */}
      {product && (
        <div className="mt-8 flex flex-row gap-5">
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md w-64">
              <Image
                src='/product.png'
                alt="product"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-md font-semibold mt-2">${product.price}</p>
              <p className="text-sm text-gray-600 mt-2">{product.category}</p>
              <p className="text-sm text-gray-600 mt-2">{product.description || 'No description'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
