import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Catalog = lazy(() => import("~/pages/catalog"));
const Detail = lazy(() => import("~/pages/deatil"));
const ErrorPage = lazy(() => import("~/pages/error-page"));
const Home = lazy(() => import("~/pages/home"));
const Welcome = lazy(() => import("~/pages/welcome"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Welcome />,
  },
  {
    path: "/details/:category/:id",
    element: <Detail />,
  },
  {
    path: "/catalog/:category",
    element: <Catalog />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
