import React, { useEffect, useState } from "react";
import "./dash.css";
import Graph from "./graph";

const Dashboard = () => {
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategoryInfo(data);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="categories-container">
        {categoryInfo && (
          <div className="graph-container">
            <Graph data={categoryInfo} />
          </div>
        )}
        {categoryInfo && (
          <div>
            {categoryInfo.map((category) => (
              <div key={category._id} className="category-item">
                <h2>Category: {category._id}</h2>
                <div className="category-box">
                  <p>Total Quantity: {category.totalQty}</p>
                  <p>Out of Stock Count: {category.outOfStockCount}</p>
                  <p>Total Value: {category.totalValue}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
