import React from "react";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import HomeCards from "../../components/homeCards/homeCards";
import Products from "../../components/products/Products";
import Plants from "../../components/plants/Plants";
import Arrivals from "../../components/Arrivals/Arrivals";
import Subscribe from "../../components/subscribe/subscribe";
import Testimonials from "../../components/testimonials/testimonials";

const Home = () => {
  return (
    <div>
      <HomeSwiper />
      <HomeCards />
      <Products />
      <Plants />
      <Arrivals />
      <Subscribe />
      <Testimonials />
    </div>
  );
};

export default Home;
