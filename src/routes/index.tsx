import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Analytic from "@/pages/Analytic";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,

    path: "/",
    children: [
      {
        index: true,
        Component: Home,
        path: "/",
      },
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: Login,
    path: "login",
  },
  {
    Component: Register,
    path: "register",
  },
  {
    Component: AdminLayout,
    path: "admin",
    children: [
      {
        Component: Analytic,
        path: "analytic",
      },
    ],
  },
]);
