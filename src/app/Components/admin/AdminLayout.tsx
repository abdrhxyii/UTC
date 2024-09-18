"use client";
import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ selectedMenuItem, onSelectMenuItem, children }: any) => (
  <div className="flex">
    <div className="hidden md:block">
      <AdminSidebar selectedMenuItem={selectedMenuItem} onSelectMenuItem={onSelectMenuItem} />
    </div>
    <div className="md:ml-64 p-4 w-full">{children}</div>
  </div>
);

export default AdminLayout;
