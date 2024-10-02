import React from "react";

const Arrivals = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex mt-10 flex-col">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-[36px]"> New Arrivals</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            natus.
          </p>
        </div>

        <div>
          <div className="h-[50rem] max-w-[20rem] overflow-hidden relative">
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-7_580x.jpg?v=1703739528"
              className="max-h-[50rem] max-w-[30rem]"
              alt=""
            />

            <div className="flex justify-center w-full items-center flex-col  absolute top-0  gap-2">
              <h2 className="max-w-[300px] flex  text-center font-semibold text-[30px]">
                NEW ARMCHAIR COLLECTION
              </h2>
              <button className="bg-white p-3 text-black"> Shop Now</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
