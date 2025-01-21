import App from "./App.tsx";
import "./assets/css/index.css";
import { createRoot } from "react-dom/client";
import Providers from "./components/providers.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
