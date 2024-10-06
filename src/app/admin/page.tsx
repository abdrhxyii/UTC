"use client";
import React, { useState } from 'react';
import AdminLayout from '../Components/admin/AdminLayout';
import DashboardStats from '../Components/admin/DashboardStats';
import ProductForm from '../Components/admin/ProductForm';
import CategoryForm from '../Components/admin/CategoryForm';
import AdUploader from '../Components/admin/AdUploader';
import Navbar from "../Components/Navbar"

const AdminDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'dashboard':
        return <DashboardStats />;
      case 'products':
        return <ProductForm />;
      case 'ads':
        return <AdUploader />;
      case 'earnings':
        return <h2 className="text-2xl">Earnings Summary (Content Coming Soon)</h2>;
      default:
        return null;
    }
  };

  return (
    <>
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">
        {selectedMenuItem.charAt(0).toUpperCase() + selectedMenuItem.slice(1)}
      </h2>
      {renderContent()}
    </AdminLayout>
    </>
  );
};

export default AdminDashboard;
