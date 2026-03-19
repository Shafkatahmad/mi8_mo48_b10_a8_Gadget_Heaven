import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
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
      <div className="text-center text-white bg-[#9538E2] justify-center px-4 py-8">
        <div className="md:w-3/4 lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4">Product Details</h3>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto p-8 rounded-3xl flex flex-col md:flex-row gap-8 border border-red-700">
        <div>
          <figure>
            <img
              className="rounded-2xl object-cover"
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
            <ol>
              {/* {specifications.map((specification) => (
                <li className="text-[#09080F]/60">{specification}</li>
              ))} */}
              {Object.entries(specifications).map(([key, value]) => (
                <li className="text-[#09080F]/60" key={key}>
                  <strong className="capitalize">{key}</strong>: {value}
                </li>
              ))}
            </ol>
          </div>

          <p className="text-lg font-bold">Rating:</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
