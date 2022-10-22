import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@common/style.scss";

const rootElement = document.querySelector("#root");
if (!rootElement) {
  throw new Error("No root element found");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
