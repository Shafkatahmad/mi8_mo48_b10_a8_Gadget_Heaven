import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ category }) => {
  // const { categoryUrl } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/productsData.json")
      .then((res) => res.json())
      .then((data) => {
        if (!category) {
          setProducts(data);
        } else {
          const filtered = data.filter(
            (product) => product.category === category,
          );
          setProducts(filtered);
        }
      });
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default Products;
