import React from "react";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import HomeCards from "../../components/homeCards/homeCards";
import Products from "../../components/products/Products";
import Plants from "../../components/plants/Plants";
import Arrivals from "../../components/Arrivals/Arrivals";

const Home = () => {
  return (
    <div>
      <HomeSwiper />
      <HomeCards />
      <Products />
      <Plants />
      <Arrivals />
    </div>
  );
};

export default Home;
