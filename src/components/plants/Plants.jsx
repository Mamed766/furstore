import React from "react";

const Plants = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className="max-w-full bg-center w-full lg:w-[50%] h-[32.5rem] relative"
          style={{
            backgroundImage: `url("https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-4_768x.jpg?v=1703662421")`,
          }}
        >
          <div className="flex flex-col gap-1 justify-center absolute right-6 lg:right-12 top-[6rem] lg:top-[10rem]">
            <h2 className="text-[24px] lg:text-[34px] font-semibold">
              Hanging Lamp
            </h2>
            <p className="max-w-[200px] lg:max-w-[250px] text-[12px] lg:text-[13px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              quod?
            </p>
            <div>
              <button className="bg-[#0A5D5D] px-8 lg:px-10 text-white p-2 lg:p-3">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-[14px] font-semibold">Plants</h2>
              <p className="max-w-[250px] lg:max-w-[300px] text-gray-500 text-[12px] lg:text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                debitis iusto repellat neque ipsum fugit?
              </p>
            </div>
            <div>
              <img
                className="max-w-full lg:max-w-[20rem]"
                src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-5_580x.jpg?v=1703662419"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div>
              <img
                className="max-w-full lg:max-w-[20rem]"
                src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-6_580x.jpg?v=1703662419"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-[14px] font-semibold">Clockwatcher</h2>
              <p className="max-w-[250px] lg:max-w-[300px] text-gray-500 text-[12px] lg:text-[13px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                debitis iusto repellat neque ipsum fugit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plants;
