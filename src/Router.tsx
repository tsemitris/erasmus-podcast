import { createHashRouter } from "react-router-dom";
import { MainLayout } from "./pages/layouts/main";
import { Home } from "./pages/home/home";
import { AboutYE } from "./pages/aboutYE/aboutYE";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutYE />,
      },
    ],
  },
]);
