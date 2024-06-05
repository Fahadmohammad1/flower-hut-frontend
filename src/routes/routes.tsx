import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../pages/dashboard/Profile";
import AddFlower from "../pages/dashboard/AddFlower";
import MyFlowers from "../pages/dashboard/MyFlowers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "add-flower",
        element: <AddFlower />,
      },
      {
        path: "my-flowers",
        element: <MyFlowers />,
      },
    ],
  },
]);
