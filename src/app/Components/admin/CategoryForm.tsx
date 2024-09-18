"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';

const CategoryForm = () => (
  <Form layout="vertical" className="mb-8">
    <Form.Item label="Category Name" name="category" rules={[{ required: true }]}>
      <Input placeholder="Enter category name" />
    </Form.Item>
    <Button type="primary" htmlType="submit">
      Add Category
    </Button>
  </Form>
);

export default CategoryForm;
