import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Component/pages/HomePage";
import Register from "./Component/pages/Register";
import Login from "./Component/pages/Login";

import CompHeader from "./Component/CompHeader";

import ProtectedRoutes from "./Component/hooks/ProtectedRoutes";
import AuthRoutes from "./Component/hooks/AuthRoutes";

import AdminLayout from "./Component/adminpages/AdminLayout";

import AdminDashboard from "./Component/admincomponent/AdminDashboard";

// import AdminSidebar from "./Component/admincomponent/AdminSidebar";
// import AdminHeader from "./Component/admincomponent/AdminDashboard";
import AddProduct from "./Component/admincomponent/AddProduct";
import Orders from "./Component/admincomponent/Orders";
import Customers from "./Component/admincomponent/Customers";
import Reports from "./Component/admincomponent/Reports";
import Settings from "./Component/admincomponent/Settings";
import Products from "./Component/admincomponent/Products";

const App = () => {
  const [handleLogin, setHandleLogin] = useState(false);

  return (
    <Router>
      <CompHeader
        handleLogin={handleLogin}
        setHandleLogin={setHandleLogin}
      />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes setHandleLogin={setHandleLogin}>
              <HomePage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/register"
          element={
            <AuthRoutes setHandleLogin={setHandleLogin}>
              <Register />
            </AuthRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <AuthRoutes>
              <Login setHandleLogin={setHandleLogin} />
            </AuthRoutes>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="adminsidebar" element={<AdminSidebar />} />
          <Route path="adminheader" element={<AdminHeader />} />
           */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;