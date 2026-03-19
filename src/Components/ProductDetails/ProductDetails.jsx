import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <p>details</p>
    </div>
  );
};

export default ProductDetails;
