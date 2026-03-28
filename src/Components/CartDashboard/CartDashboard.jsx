import { useEffect, useState } from "react";
import { getCartProductsFromLocal } from "../../utilities/storeToLocal";
import CartDashboardProduct from "../CartDashboardProduct/CartDashboardProduct";
import { useNavigate } from "react-router";

const CartDashboard = () => {
  // console.log(typeof localCartProductsId);

  const [products, setProducts] = useState([]);
  // let total = 0;
  const [purchaseTotal, setPurchaseTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const localCartProductsId = getCartProductsFromLocal();

    fetch("/productsData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          localCartProductsId.includes(product.product_id),
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.log("Error fetchng product data:", error);
      });
  }, []);
  console.log(products);

  // products.map((product) => (total += product.price));
  const total = products.reduce((sum, product) => sum + product.price, 0);

  const handleSortByPrice = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);

    setProducts(sorted);
  };

  // handle purchase
  const handlePurchase = () => {
    setPurchaseTotal(total);
    localStorage.removeItem("cart-products");
    setProducts([]);
  };
  return (
    <div className="bg-gray-200 border border-blue-700">
      <div className="w-11/12 mx-auto flex items-center justify-between mt-12 mb-8">
        <h3 className="text-2xl font-bold">Cart</h3>

        <div className="flex gap-6 items-center">
          <h3 className="text-2xl font-bold">Total cost: {total}</h3>
          <div className="flex gap-4">
            <button
              onClick={handleSortByPrice}
              className="border border-[#8332C5] rounded-4xl px-5 py-2 text-[#8332C5] text-lg font-semibold cursor-pointer"
            >
              Sort by Price
            </button>
            {/* <button className="bg-[#8332C5] rounded-4xl px-5 py-2 text-white text-lg font-semibold cursor-pointer">
              Purchase
            </button> */}
            <label
              htmlFor="my_modal_6"
              onClick={handlePurchase}
              className="btn bg-[#8332C5] rounded-4xl px-5 py-2 text-white text-lg font-semibold cursor-pointer"
            >
              Purchase
            </label>
          </div>
        </div>
      </div>
      {products.map((product) => (
        <CartDashboardProduct
          key={product.product_id}
          product={product}
        ></CartDashboardProduct>
      ))}

      <>
        {/* Modal toggle */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />

        {/* Modal */}
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Payment Successful 🎉</h3>
            <p className="py-4">Thanks for your purchase!</p>
            <p className="font-semibold">Total Paid: ${purchaseTotal}</p>

            <div className="modal-action">
              <label
                htmlFor="my_modal_6"
                onClick={() => navigate("/")}
                className="btn"
              >
                Close
              </label>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CartDashboard;
