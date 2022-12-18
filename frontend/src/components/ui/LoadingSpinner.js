import React from "react";
import "./spinner.css";
//this component provides a placeholder for the loader spinner to spin while the asynchronous call is being performed to the DB
export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}