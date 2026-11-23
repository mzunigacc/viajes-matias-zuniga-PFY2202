import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

async function startApp() {
  try {
    const { worker } = await import("./mocks/browser");

    await worker.start({
      serviceWorker: {
        url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
      },
      onUnhandledRequest: "bypass",
      quiet: true,
    });
  } catch (error) {
    console.error(
      "No fue posible iniciar la API simulada:",
      error,
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

startApp();
