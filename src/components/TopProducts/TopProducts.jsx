import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      " Lorem ipsum dolor sit amer consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      " Lorem ipsum dolor sit amer consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirts",
    description:
      " Lorem ipsum dolor sit amer consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* header section  */}
        <div className="text-left mb-24 ">
          <p className="text-sm text-primary">Top Rated Products for you</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amer consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi.
          </p>
        </div>
        {/* body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4 place-items-center
        gap-20 md:gap-5"
        >
          {ProductData.map((data) => (
            <div
              className="rounded-2xl bg-white
            dark:bg-gray-700 hover:bg-black/80
            dark:hover:bg-primary hover:text-white
            relative shadow-xl duration-high group 
            max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[140px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto drop-shadow-md    "
                />
              </div>
              {/* details section */}
              <div className="p-4  text-center">
                {/* star rating */}
                <div
                  className="flex w-full items-center justify-center
                gap-1 mt-10"
                >
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p
                  className="text-gray-500 group-hover:text-white
                duration-300 text-sm line-clamp-2"
                >
                  {data.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-primary duration-200
                 text-white py-1 px-4 rounded-full mt-4  
                 items-center gap-1 group text-center justify-center"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
