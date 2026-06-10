import React from "react";

const AddProduct = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          marginTop: "20px",
        }}
      >
        <input type="text" placeholder="Product Name" style={{height:"30px",paddingLeft:"10px", border:"none", backgroundColor:"lightgray"}}/>
        <input type="number" placeholder="Price" style={{height:"30px",paddingLeft:"10px", border:"none", backgroundColor:"lightgray"}} />
        <input type="number" placeholder="Stock" style={{height:"30px",paddingLeft:"10px", border:"none", backgroundColor:"lightgray"}}/>
        <textarea placeholder="Description" style={{height:"30px",paddingLeft:"10px", border:"none", backgroundColor:"lightgray"}}></textarea>

        <button
          style={{
            padding: "10px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;