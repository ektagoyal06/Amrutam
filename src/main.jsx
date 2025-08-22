import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// ✅ Replace BrowserRouter with HashRouter
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
