import { NavLink } from "react-router";
import "./AsideBar.css";

const AsideBar = ({ handleCategory }) => {
  const laptop = "laptop";
  const phone = "phone";
  const accessories = "accessories";
  const smartwatch = "smartWatch";
  return (
    <div className="flex flex-wrap md:flex-col gap-6 border border-[#09080F]/10 p-6 rounded-2xl">
      <NavLink>
        <button
          onClick={() => handleCategory("")}
          className="px-7 py-3 text-lg text-[#09080F]/60 bg-[#09080F]/5 rounded-4xl"
        >
          All Products
        </button>
      </NavLink>
      <NavLink>
        <button
          onClick={() => handleCategory(laptop)}
          className="px-7 py-3 text-lg text-[#09080F]/60 bg-[#09080F]/5 rounded-4xl"
        >
          Laptops
        </button>
      </NavLink>
      <NavLink>
        <button
          onClick={() => handleCategory(phone)}
          className="px-7 py-3 text-lg text-[#09080F]/60 bg-[#09080F]/5 rounded-4xl"
        >
          Phones
        </button>
      </NavLink>
      <NavLink>
        <button
          onClick={() => handleCategory(accessories)}
          className="px-7 py-3 text-lg text-[#09080F]/60 bg-[#09080F]/5 rounded-4xl"
        >
          Accessories
        </button>
      </NavLink>
      <NavLink>
        <button
          onClick={() => handleCategory(smartwatch)}
          className="px-7 py-3 text-lg text-[#09080F]/60 bg-[#09080F]/5 rounded-4xl"
        >
          SmartWatch
        </button>
      </NavLink>
    </div>
  );
};

export default AsideBar;
