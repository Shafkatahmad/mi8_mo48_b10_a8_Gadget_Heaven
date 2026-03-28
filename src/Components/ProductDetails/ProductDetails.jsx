import { useLoaderData } from "react-router";
import Rating from "../Rating/Rating";
import { Heart, ShoppingCart } from "lucide-react";
import SpecificationList from "../SpecificationList/SpecificationList";
import {
  storeCartProductsToLocal,
  storeWishProductsToLocal,
} from "../../utilities/storeToLocal";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    product_id,
    product_image,
    product_title,
    price,
    availability,
    description,
    specification: specifications,
    rating,
  } = product;
  // console.log(product);
  return (
    <div>
      <div className="text-center text-white bg-[#9538E2] flex justify-center px-4 py-8 h-100">
        <div className="md:w-3/4 lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4">Product Details</h3>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="border border-s-teal-600 bg-gray-200">
        <div className="w-10/12 mx-auto p-8 rounded-3xl flex flex-col md:flex-row gap-8 -mt-50 bg-white">
          <div>
            <figure>
              <img
                className="rounded-2xl object-cover max-h-125"
                src={product_image}
                alt=""
              />
            </figure>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">{product_title}</h3>
            <p className="text-xl font-semibold mb-4">Price: $ {price}</p>
            <div className="mb-4">
              {availability ? (
                <p className="rounded-4xl bg-[#309C08]/10 border border-[#309C08] text-[#309C08] px-3 py-2 text-sm w-fit">
                  In Stock
                </p>
              ) : (
                <p className="rounded-4xl bg-[#a92f10]/10 border border-[#a92f10] text-[#a92f10] px-3 py-2 text-sm w-fit">
                  Stock Out
                </p>
              )}
            </div>
            <p className="text-lg text-[#09080F]/60 mb-4">{description}</p>
            <div className="mb-4">
              <p className="font-bold mb-3">Specification:</p>
              {/* <ol>
                {Object.entries(specifications).map(([key, value]) => (
                  <li className="text-[#09080F]/60" key={key}>
                    <strong className="capitalize">{key}</strong>: {value}
                  </li>
                ))}
              </ol> */}

              <SpecificationList specs={specifications} />
            </div>

            <p className="text-lg font-bold">Rating:</p>
            <Rating rating={rating}></Rating>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-red-700">
                <button
                  onClick={() => {
                    (storeCartProductsToLocal(product_id),
                      toast.success("Product added to cart successfully"),
                      window.dispatchEvent(new Event("cartUpdated")));
                  }}
                  disabled={!availability}
                  className="rounded-4xl bg-[#9538E2] px-5 py-3 text-lg text-white font-bold mt-4 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  Add To Cart <ShoppingCart></ShoppingCart>
                </button>
              </div>
              <button
                onClick={() => {
                  (storeWishProductsToLocal(product_id),
                    window.dispatchEvent(new Event("wishlistUpdated")));
                }}
                className="cursor-pointer"
              >
                <Heart></Heart>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-30 bg-gray-200"></div>
    </div>
  );
};

export default ProductDetails;
