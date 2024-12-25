import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center m-4 ">
      <div className="container">
        <div className="bg-primary/80  rounded-lg  grid justify-center items-center sm:text-xl mx-auto py-4">
          <div className="p-4">
            <h1 className="text-2xl font-bold pt-2 sm:text-xl">
              Get Notified About New Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="text-start py-2 px-4 rounded-md  h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
