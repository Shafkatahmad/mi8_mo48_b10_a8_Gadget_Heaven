import React from "react";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <>
      <div className="text-center text-white bg-[#9538E2] lg:px-50 rounded-b-4xl">
        <h1 className="text-5xl leading-17 font-bold mb-6">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="px-8 py-4 bg-white text-[#9538E2] rounded-4xl mb-66">
          Shop Now
        </button>
      </div>
      <figure className="w-9/12 mx-auto p-6 bg-base-100 rounded-4xl border border-red-600 -mt-55     ">
        <img
          className="w-full h-[550px] object-cover bg-base-100 rounded-2xl mx-auto"
          src={banner}
          alt=""
        />
      </figure>
    </>
  );
};

export default Hero;
