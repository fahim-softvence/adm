import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import Contact from "../pages/contact/Contact";

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
      },
      {
        path: "/service",
        element: <Service/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
  },
]);

export default router;
