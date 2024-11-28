import React from "react";
import "./settings.css";

const Settings = () => {
  const handleDownloadData = async () => {
    try {
      const response = await fetch("http://localhost:3000/items");
      const data = await response.json();

      const jsonData = JSON.stringify(data);
      const blob = new Blob([jsonData], { type: "application/json" });

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "itemsData.json";
      downloadLink.click();

      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      console.error("Error downloading data:", error);
    }
  };

  const handleDeleteAllItems = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all items?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/items", {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("All items deleted successfully");
      } else {
        console.error("Failed to delete all items");
      }
    } catch (error) {
      console.error("Error deleting all items:", error);
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      <button className="download-btn" onClick={handleDownloadData}>
        Download Items Data
      </button>
      <button className="delete-all-btn" onClick={handleDeleteAllItems}>
        Delete All Items
      </button>
    </div>
  );
};

export default Settings;
