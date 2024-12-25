import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 70% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
    bg-gray-100 flex justify-center items-center dark:bg-gray-950
    dark:text-white duration-200"
    >
      {/* Background pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40
    absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
      ></div>

      {/* Hero section */}
      <div className="w-full max-w-6xl mx-auto">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="container pb-8 sm:pb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text section */}
                <div
                  className="flex flex-col justify-center gap-4
   pt-12 sm:pt-0 relative z-10 text-center sm:text-left order-2 sm:order-1"
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Order Now
                  </button>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      className="w-[250px] h-[250px] sm:h-[400px] sm:w-[400px] sm:scale-125 object-contain mx-auto"
                      alt={data.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
