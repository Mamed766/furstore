import React from "react";
import TestCard from "../testCard/TestCard";
const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-[36px] font-semibold">Testimonials</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          veritatis.
        </p>
      </div>
      <div className="flex flex-wrap gap-1 justify-between mt-5 ">
        <TestCard
          name="Emily Natasha"
          title="CEO Moose"
          stars={5}
          image="https://vinova-furstore.myshopify.com/cdn/shop/files/a-1_380x380_crop_center.jpg?v=1703665179"
          quote="I had a bad crash recently, and I’m convinced that my helmet saved my life. The impact absorption was impressive, and I walked away with only minor injuries. I highly recommend investing in a high-quality helmet."
        />
        <TestCard
          name="Alvin Johnson"
          title="CEO Johnering"
          stars={5}
          image="https://vinova-furstore.myshopify.com/cdn/shop/files/a-4_380x380_crop_center.jpg?v=1703665178"
          quote="I recently upgraded to a high-quality protective jacket, and I'm extremely satisfied. The jacket offers great impact protection and has armor in all the right places. It's comfortable to wear and provides peace of mind on every ride."
        />
      </div>
    </div>
  );
};

export default Testimonials;
