import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
      <App />
    </div>
  </StrictMode>
);
