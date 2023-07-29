import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: import.meta.env.VITE_FRONTEGG_BASE_URL || "",
  clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID || "",
};

const authOptions = {
  keepSessionAlive: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </React.StrictMode>
);
