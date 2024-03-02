import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "./store/auth.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
