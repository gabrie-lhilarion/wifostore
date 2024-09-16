import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'

import {
  Root,
  ErrorPage,
  AdminHome,
  AddProduct,
  Admin
} from "./pages";

import {
  root_loader
} from './utils/loaders'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: root_loader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/edit-cart"
      },
      {
        path: "/checkout"
      }
      ,
      {
        path: "/purchase-history"
      }
      ,
      {
        path: "/profile"
      }
    ]
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminHome />
      },
      {
        path: "add-product",
        element: <AddProduct />
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

