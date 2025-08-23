import "animate.css";
import "primeflex/primeflex.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "survey-core/survey-core.css";
import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
