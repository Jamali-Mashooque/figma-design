import React from "react";

const Reports = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Reports</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={card}>
          <h3>Sales</h3>
          <p>$12,500</p>
        </div>

        <div style={card}>
          <h3>Orders</h3>
          <p>320</p>
        </div>

        <div style={card}>
          <h3>Customers</h3>
          <p>500</p>
        </div>
      </div>
    </div>
  );
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

export default Reports;