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
      <div className="container">
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
      <div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 container
          md:grid-cols-3  place-items-center gap-5 m-5"
        >
          {/* Card section */}
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="h-[250px] w-[200px] object-center rounded-md"
                sizes={30}
              />
              <div className="mt-4">
                <h3 className="font-semibold text-sm ">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-sm font-medium text-green-600">
                  ${product.price}
                </p>

                <div className="flex items-center gap-1 mt-2">
                  <FaStar className="text-yellow-500" />
                  <span>{product.rating.rate}</span>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.rating.count} reviews)
                  </span>
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
