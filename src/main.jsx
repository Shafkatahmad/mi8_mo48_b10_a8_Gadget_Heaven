import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Components/Home/Home.jsx";
import { Component } from "lucide-react";
import Root from "./Components/Root/Root.jsx";
import Products from "./Components/Products/Products.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "product/:id",
        loader: async ({ params }) => {
          const res = await fetch("/productsData.json");
          const data = await res.json();
          return data.find((p) => p.product_id === Number(params.id));
        },
        Component: ProductDetails,
        errorElement: <p>wrong</p>,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
