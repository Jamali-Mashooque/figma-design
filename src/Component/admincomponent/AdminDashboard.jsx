import React from "react";
import "./dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Products</h3>
          <p>150</p>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <p>320</p>
        </div>

        <div className="card">
          <h3>Total Users</h3>
          <p>500</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>$12,500</p>
        </div>
      </div>

      <div className="table-section">
        <h3>Recent Orders</h3>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1001</td>
              <td>Ali</td>
              <td>Delivered</td>
              <td>$120</td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>Ahmed</td>
              <td>Pending</td>
              <td>$80</td>
            </tr>

            <tr>
              <td>#1003</td>
              <td>Sara</td>
              <td>Shipped</td>
              <td>$200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;