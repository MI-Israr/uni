import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [photoId, setPhotoId] = useState("12018"); // Default photo ID
  const baseUrl = "https://kts.kfueit.edu.pk/kts/uploads/photo_";

  const handleInputChange = (event) => {
    setPhotoId(event.target.value); // Update photo ID dynamically
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Photo Viewer</h1>
      <input
        type="text"
        value={photoId}
        onChange={handleInputChange}
        placeholder="Enter photo ID"
        style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <img
        src={`${baseUrl}${photoId}.jpg`}
        alt="Dynamic KFUEIT Photo"
        style={{
          width: "80%",
          maxWidth: "600px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      />
    </div>
  );
}

export default App;
