import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { performanceMetrics } from "./utils/performance.ts";

// Initialize performance monitoring in development
if (import.meta.env.DEV) {
  performanceMetrics.reportWebVitals();
}

// Error boundary for the entire app
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Create root with error handling
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals in production
if (import.meta.env.PROD) {
  // Only report vitals after the app has loaded
  window.addEventListener("load", () => {
    performanceMetrics.reportWebVitals();
  });
}
