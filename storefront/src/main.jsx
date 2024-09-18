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
  Admin,
  PriceList,
  Home
} from "./pages";

import {
  root_loader,
  productsLoader,
  pricelistLoader
} from './utils/loaders'

import {
  addProductAction
} from './utils/actions'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: root_loader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
        element: <AddProduct />,
        loader: productsLoader,
        action: addProductAction,
      },
      {
        path: "price-list/:id",
        element: <PriceList />,
        loader: pricelistLoader
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

