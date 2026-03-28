import { X } from "lucide-react";

const CartDashboardProduct = ({ product }) => {
  return (
    <div className="product-card w-11/12 mx-auto bg-white flex justify-between items-center p-8 rounded-2xl mb-6 border border-red-600">
      <div className="flex flex-col md:flex-row gap-8">
        <figure className="w-50">
          <img
            className="w-full object-cover"
            src={product.product_image}
            alt={product.product_title}
          />
        </figure>

        <div>
          <h4 className="text-2xl font-semibold mb-4">
            {product.product_title}
          </h4>
          <p className="text-lg text-[#09080F]/60 mb-4">
            {product.description}
          </p>
          <p className="text-xl font-semibold">Price: $ {product.price}</p>
        </div>
      </div>

      <X className="border border-[#FF0000] rounded-full text-[#FF0000]"></X>
    </div>
  );
};

export default CartDashboardProduct;
