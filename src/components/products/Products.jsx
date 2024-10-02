import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaImage,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { getAllProducts } from "../../services/api";
import { Button } from "@mui/material";
import CustomModal from "../CustomModal/CustomModal";
import { useNavigate } from "react-router";

export const productsData = [
  {
    title: "Diamond Halo Stud",
    price: "$628.00",
    image1:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/32_540x.jpg?v=1694678290",
    image2:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/32a_540x.jpg?v=1694678290",
    stars: 5,
  },
  {
    title: "Emerald Cut Stud",
    price: "$750.00",
    image1:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/35_540x.jpg?v=1694678290",
    image2:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/35a_540x.jpg?v=1694678290",
    stars: 4,
  },
  {
    title: "Round Cut Stud",
    price: "$500.00",
    image1:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/34_540x.jpg?v=1694678290",
    image2:
      "https://vinova-furstore.myshopify.com/cdn/shop/products/34a_540x.jpg?v=1694678290",
    stars: 3,
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex items-center gap-2">
            <FaAngleLeft className="text-[25px]" />
            <h2 className="text-[50px]">Featured Products</h2>
            <FaAngleRight className="text-[25px]" />
          </div>
          <div className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            unde.
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-between">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-[17rem] max-h-[33rem] overflow-hidden"
              onClick={() => navigate(`/product/${product?.id}`)}
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
  );
};

export default Products;
