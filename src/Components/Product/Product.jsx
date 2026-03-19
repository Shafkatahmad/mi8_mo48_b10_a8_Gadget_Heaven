import { Link } from "react-router";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;
  return (
    <div className="text-left flex flex-col items-center p-5 bg-base-200">
      <figure className="w-70">
        <img className="object-cover  rounded-xl" src={product_image} alt="" />
      </figure>
      <h3 className="text-xl text-[#09080F] font-semibold mb-3">
        {product_title}
      </h3>
      <p className="text-xl text-[#09080F]/60 mb-4">{price}</p>
      <Link to={`/product/${product_id}`}>
        <button className="px-5 py-3 rounded-4xl text-[#9538E2] border-2 border-[#9538E2]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Product;
