import React from "react";
import ReactDOM from "react-dom/client";
import ThemeHandler from "./handlers/ThemeHandler";
import "./index.css";
import { checkForExtension } from "./apiConnector/papercutApi";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

checkForExtension();

root.render(
  <React.StrictMode>
    <ThemeHandler />
  </React.StrictMode>
);
