import React from "react";

const Settings = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          marginTop: "20px",
        }}
      >
        <input type="text" placeholder="Store Name" style={{height:"30px",paddingLeft:"10px", border:"none", backgroundColor:"lightgray"}} />
        <input type="email" placeholder="Admin Email" style={{height:"30px",paddingLeft:"10px", border:"none", backgroundColor:"lightgray"}}/>

        <button
          style={{
            padding: "10px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;