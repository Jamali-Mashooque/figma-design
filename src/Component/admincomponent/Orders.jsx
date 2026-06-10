import React from "react";

const Orders = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders</h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
          background: "#fff",
        }}
      >
        <thead>
          <tr>
            <th style={th}>Order ID</th>
            <th style={th}>Customer</th>
            <th style={th}>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={td}>#1001</td>
            <td style={td}>Ali</td>
            <td style={td}>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const th = { padding: "12px", border: "1px solid #ddd" };
const td = { padding: "12px", border: "1px solid #ddd" };

export default Orders;