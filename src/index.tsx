import React from "react";
import ReactDOM from "react-dom/client";
import ThemeHandler from "./handlers/ThemeHandler";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeHandler />
  </React.StrictMode>
);
