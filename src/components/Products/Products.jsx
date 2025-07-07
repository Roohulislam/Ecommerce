import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi asperiores modi.
          </p>
        </div>
      </div>
      {/* Body section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card section */}
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative pt-[100%] bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-contain p-4"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-sm line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 uppercase mb-2">
                  {product.category}
                </p>
                <div className="mt-auto">
                  <p className="text-lg font-bold text-primary">
                    ${product.price}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < Math.round(product.rating.rate)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating.count})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;