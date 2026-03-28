import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import {
  getCartProductsFromLocal,
  getWishProductsFromLocal,
} from "../../utilities/storeToLocal";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  const locatoin = useLocation();
  const isHome = locatoin.pathname === "/";
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Statistic</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  );

  // useEffect(() => {
  //   const cart = getCartProductsFromLocal();
  //   const wish = getWishProductsFromLocal();

  //   setCartCount(cart.length);
  //   setWishCount(wish.length);
  // }, []);

  // cartlist and wishlist count
  useEffect(() => {
    const updateCounts = () => {
      setCartCount(getCartProductsFromLocal().length);
      setWishCount(getWishProductsFromLocal().length);
    };

    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("wishlistUpdated", updateCounts);

    return () => {
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("wishlistUpdated", updateCounts);
    };
  }, []);
  return (
    <div
      className={`navbar rounded-t-4xl lg:px-32 py-4 ${
        isHome ? "bg-[#9538E2] text-white" : "bg-white text-black"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 w-75 justify-between">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <ShoppingCart className="mr-4" /> */}
        {/* <Heart /> */}
        <div className="relative mr-4">
          <ShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        <div>
          <Heart />
          {wishCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {wishCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
