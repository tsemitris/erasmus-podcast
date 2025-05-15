import { createHashRouter } from "react-router-dom";
import { MainLayout } from "./pages/layouts/main";
import { Home } from "./pages/home/home";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
