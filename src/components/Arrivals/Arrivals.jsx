import React from "react";
import { FaImage, FaShoppingCart, FaStar } from "react-icons/fa";
import "./arrivals.scss";
const Arrivals = () => {
  const arrivalsData = [
    {
      id: 1,
      title: "Diamond Halo Stud",
      price: "$628.00",
      image1:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/32_540x.jpg?v=1694678290",
      image2:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/32a_540x.jpg?v=1694678290",
      stars: 5,
    },
    {
      id: 2,
      title: "Emerald Cut Stud",
      price: "$750.00",
      image1:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/35_540x.jpg?v=1694678290",
      image2:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/35a_540x.jpg?v=1694678290",
      stars: 4,
    },
    {
      id: 3,
      title: "Round Cut Stud",
      price: "$500.00",
      image1:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/34_540x.jpg?v=1694678290",
      image2:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/34a_540x.jpg?v=1694678290",
      stars: 3,
    },
    {
      id: 4,
      title: "Deneme",
      price: "$540.00",
      image1:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/36_540x.jpg?v=1694678290",
      image2:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/36a_540x.jpg?v=1694678290",
      stars: 5,
    },
    {
      id: 5,
      title: "Deneme",
      price: "$560.00",
      image1:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/37_540x.jpg?v=1694678290",
      image2:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/37a_540x.jpg?v=1694678290",
      stars: 5,
    },
    {
      id: 6,
      title: "Deneme",
      price: "$550.00",
      image1:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/38_540x.jpg?v=1694678290",
      image2:
        "https://vinova-furstore.myshopify.com/cdn/shop/products/38a_540x.jpg?v=1694678290",
      stars: 6,
    },
  ];

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

        <div className="flex arrival__mobile  gap-2 items-center ">
          <div className="h-[53rem] max-w-[20rem] overflow-hidden relative">
            <img
              src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-9-7_580x.jpg?v=1703739528"
              className="max-h-[60rem] max-w-[30rem]"
              alt=""
            />

            <div className="flex justify-center w-full items-center flex-col  absolute top-0  gap-2">
              <h2 className="max-w-[300px] flex  text-center font-semibold text-[30px]">
                NEW ARMCHAIR COLLECTION
              </h2>
              <button className="bg-white p-3 text-black"> Shop Now</button>
            </div>
          </div>
          <div className="flex flex-wrap  justify-between">
            {arrivalsData.map((product, index) => (
              <div
                key={index}
                className="max-w-[17rem] max-h-[33rem] overflow-hidden"
              >
                <div className="relative group mt-10">
                  <img
                    src={product.image1}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={product.image2}
                    alt={product.title}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  />

                  <div className="flex absolute left-[20rem] group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 pb-2 bottom-0 duration-300 gap-2">
                    <div className="bg-white p-2 hover:bg-green-700 hover:text-white rounded-full text-green-700 ">
                      <FaShoppingCart />
                    </div>
                    <div className="bg-white p-2 hover:bg-green-700 hover:text-white rounded-full text-green-700 ">
                      <FaStar />
                    </div>
                    <div className="bg-white p-2 hover:bg-green-700 hover:text-white rounded-full text-green-700 ">
                      <FaImage />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-4">
                  <div className="flex items-center justify-between">
                    <p>{product.title}</p>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < product.stars
                              ? "text-yellow-600"
                              : "text-gray-400"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <div>{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
