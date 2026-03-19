import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import AsideBar from "../AsideBar/AsideBar";
import { useState } from "react";
import Hero from "../Hero/Hero";

const Home = () => {
  const [category, setCategory] = useState("");

  const handleCategory = (categoryName) => {
    setCategory(categoryName);
  };
  return (
    <div className="w-11/12 mx-auto text-center">
      <Hero></Hero>
      <h1 className="text-4xl font-bold mb-12">Explore Cutting-Edge Gadgets</h1>
      <div className="lg:flex lg:gap-6">
        <div>
          <AsideBar handleCategory={handleCategory}></AsideBar>
        </div>
        {/* <Outlet></Outlet> */}
        <Products category={category}></Products>
      </div>
    </div>
  );
};

export default Home;
