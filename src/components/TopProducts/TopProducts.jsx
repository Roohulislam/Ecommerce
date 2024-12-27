import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TopProducts = ({ handleOrderPopup }) => {
  const [tProduct, setTproduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const jsonResponse = await response.json();
      setTproduct(jsonResponse);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="container mt-14 mb-12">
      {/* Header section */}
      <div className="text-left mb-10">
        <p className="text-sm text-primary">Top Rated Products for You</p>
        <h1 className="text-3xl font-bold">Best Products</h1>
        <p className="text-xs text-gray-400">
          Discover the best products selected just for you. Shop from the
          top-rated collection.
        </p>
      </div>

      {/* Body section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2  m-5
        md:grid-cols-3 lg:grid-cols-3 gap-10 container"
      >
        {tProduct.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl bg-white dark:bg-gray-700
            hover:bg-black/80 dark:hover:bg-primary hover:text-white
            relative shadow-xl duration-300 group max-w-[350px] flex flex-col items-center"
          >
            {/* Image section */}
            <div className="h-[140px] w-full flex justify-center">
              <img
                src={data.image}
                alt={data.name}
                className="max-w-[200px] h-[180px] block mx-auto drop-shadow-md"
              />
            </div>

            {/* Details section */}
            <div className="p-4 text-center">
              <h1 className="text-xl font-bold mb-2">{data.name}</h1>
              <p className="text-sm text-gray-500 mb-1 font-bold">
                Created At: {new Date(data.creationAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 font-bold">
                Updated At: {new Date(data.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
