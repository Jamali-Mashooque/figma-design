import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../admincomponent/AdminSidebar";
import AdminHeader from "../admincomponent/AdminHeader";
import "./style.css";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="parent">
      <div className={`div1 ${sidebarOpen ? "show-sidebar" : ""}`}>
        <AdminSidebar setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="div2">
        <AdminHeader setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="div3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;