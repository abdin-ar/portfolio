import React from "react";
import ReactDOM from "react-dom/client";
import "./css/global.css";
import "./css/all.min.css";
import App from "./App";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
