"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Wallet,
  Briefcase,
  UserPlus,
  CalendarX,
  CalendarPlus,
  Cog,
} from "lucide-react";

const AdminSidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const toggleSidebar = () => setIsMobile(!isMobile);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Users, label: "All Employees" },
    { icon: Users, label: "All Departments" },
    { icon: Calendar, label: "Attendance" },
    { icon: Wallet, label: "Payroll" },
    { icon: Briefcase, label: "Jobs" },
    { icon: UserPlus, label: "Candidates" },
    { icon: CalendarX, label: "Leaves" },
    { icon: CalendarPlus, label: "Holidays" },
    { icon: Cog, label: "Settings" },
  ];

  return (
    <div
      className={`h-screen flex flex-col bg-white shadow-md transition-all ${
        isMobile ? "w-16" : "w-64"
      }`}
    >
      <nav className="flex-1 overflow-y-auto px-2 space-y-2">
        <ul className="py-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className="px-4 py-2 hover:bg-purple-100 rounded-lg cursor-pointer"
              >
                <a
                  href="#"
                  className="flex items-center text-base text-gray-700 rounded-lg hover:text-purple-600 hover:font-semibold"
                >
                  <Icon className="w-6 h-6 mr-3" />
                  <span className={`${isMobile ? "hidden" : ""}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
