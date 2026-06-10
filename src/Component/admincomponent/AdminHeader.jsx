import React from "react";
import "./header.css";

const AdminHeader = ({ setSidebarOpen }) => {
  return (
    <header className="admin-header">
      <div className="header-left">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        <h2>Admin Panel</h2>
      </div>

      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>

        <button className="notification-btn">
          🔔
        </button>

        <div className="admin-profile">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="admin"
          />

          <div>
            <h4>Admin</h4>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;