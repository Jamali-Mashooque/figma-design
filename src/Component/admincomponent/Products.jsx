import React from "react";

const Products = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

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
            <th style={th}>Product</th>
            <th style={th}>Price</th>
            <th style={th}>Stock</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={td}>iPhone 15</td>
            <td style={td}>$999</td>
            <td style={td}>25</td>
            <td style={td}>
              <button>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const th = { padding: "12px", border: "1px solid #ddd" };
const td = { padding: "12px", border: "1px solid #ddd" };

export default Products;