import React from "react";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import HomeCards from "../../components/homeCards/homeCards";
import Products from "../../components/products/Products";
import Plants from "../../components/plants/Plants";

const Home = () => {
  return (
    <div>
      <HomeSwiper />
      <HomeCards />
      <Products />
      <Plants />
    </div>
  );
};

export default Home;
