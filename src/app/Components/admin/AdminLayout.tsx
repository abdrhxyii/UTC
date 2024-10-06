"use client";
import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }: any) => (
  <div className="flex">
    <div className="hidden md:block">
      <AdminSidebar/>
    </div>
    <div className="p-4 w-full">{children}</div>
  </div>
);

export default AdminLayout;
