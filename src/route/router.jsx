import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>
      }
    ],
  },
]);

export default router;
