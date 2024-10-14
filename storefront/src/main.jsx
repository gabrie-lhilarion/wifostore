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
  Checkout,
  Categories,
  Home
} from "./pages";

import {
  root_loader,
  productsLoader,
  pricelistLoader
} from './utils/loaders'

import {
  addProductAction,
  pricelistAction
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
        path: "/categories/:category-name",
        element: <Categories />
      },
      {
        path: "/checkout",
        element: <Checkout />
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
        action: pricelistAction,
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

