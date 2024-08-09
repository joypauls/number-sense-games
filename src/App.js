import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Sandbox from "./routes/Sandbox";
import Index from "./routes/Index";
import GameLoop from "./routes/GameLoop";
import Builder from "./routes/Builder";

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
      {
        path: "game-loop",
        element: <GameLoop />,
      },
      {
        path: "builder",
        element: <Builder />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
