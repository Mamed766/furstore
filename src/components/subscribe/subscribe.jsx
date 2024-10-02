import React from "react";

const Subscribe = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div
        className="bg-cover bg-center mt-10 h-[20rem]"
        style={{
          backgroundImage: `url("https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-8.jpg?v=1703662419")`,
        }}
      >
        <div className="flex flex-col justify-center items-center pt-[5rem]  gap-2">
          <h2 className="text-[30px] font-semibold">
            SUBSCRIBLE & GET 60% DISCOUNT
          </h2>
          <p className="max-w-[600px] text-center">
            Join Our Newsletter for a World of Design Inspiration, Insider
            Trends, Exclusive Promotions, and Unforgettable Home Transformation
            Ideas
          </p>
          <div className="bg-white flex justify-between p-3 w-[25rem]">
            <input
              className="outline-none border-none"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="bg-[#0A5D5D] text-white px-10 py-2 text-[12px]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
