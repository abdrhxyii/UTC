"use client";
import React from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AdUploader = () => (
  <Form layout="vertical" className="mb-8">
    <Form.Item label="Ad Image" name="adImage" rules={[{ required: true }]}>
      <Upload listType="picture" maxCount={1} accept="image/*">
        <Button icon={<UploadOutlined />}>Upload Ad Image</Button>
      </Upload>
    </Form.Item>
    <Button type="primary" htmlType="submit">
      Add Ad
    </Button>
  </Form>
);

export default AdUploader;
