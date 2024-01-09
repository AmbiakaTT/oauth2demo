import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/oauth2/login/success", element: <User /> },
    ],
  },
  // {
  //   path: "/ab",
  //   element: <Home />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
