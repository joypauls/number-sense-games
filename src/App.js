import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Sandbox from "./routes/Sandbox";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "sandbox",
        element: <Sandbox />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
