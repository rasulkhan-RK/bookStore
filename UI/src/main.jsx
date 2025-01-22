import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Authprovider from "./components/context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Authprovider>
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
      <App />
    </div>
  </Authprovider>
);
