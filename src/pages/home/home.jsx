import React from "react";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import HomeCards from "../../components/homeCards/homeCards";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div>
      <HomeSwiper />
      <HomeCards />
      <Products />
    </div>
  );
};

export default Home;
