import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { route } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={route} />
);
