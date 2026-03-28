import { useState } from "react";
import CartDashboard from "../CartDashboard/CartDashboard";
import WishlistDashboard from "../WishlistDashboard/WishlistDashboard";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [active, setActive] = useState(true);

  const handleActive = (cartName) => {
    setActive(cartName);
    // console.log(active);
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div className="text-center text-white bg-[#9538E2] flex justify-center px-4 py-8">
        <div className="md:w-3/4 lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4">Dashboard</h3>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => handleActive(true)}
              className={`px-16 py-3 rounded-4xl cursor-pointer ${active ? "bg-white text-[#9538E2]" : "bg-[#9538E2] text-white border border-white"}`}
            >
              Cart
            </button>
            <button
              onClick={() => handleActive(false)}
              className={`px-16 py-3 rounded-4xl cursor-pointer ${!active ? "bg-white text-[#9538E2]" : "bg-[#9538E2] text-white border border-white"}`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {active ? <CartDashboard /> : <WishlistDashboard />}
    </div>
  );
};

export default Dashboard;
