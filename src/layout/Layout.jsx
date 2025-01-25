import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <>
    <ScrollRestoration/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
