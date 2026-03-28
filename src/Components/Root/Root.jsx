import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget | Gadget Heaven</title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />

      {/* react toastify */}
      <ToastContainer position="top center"></ToastContainer>
    </div>
  );
};

export default Root;
