import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { slidesData } from "../../static/mockdb";

import "swiper/css";
import "swiper/css/pagination";

const HomeSwiper = () => {
  return (
    <div className="mt-[10rem] max-w-screen-xl mx-auto">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-cover bg-center h-[800px]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div
                className={`absolute ${
                  index === 0
                    ? "text-start left-[2rem]"
                    : index === 1
                    ? "text-center left-[12rem]"
                    : index === 2
                    ? "text-end right-3"
                    : ""
                } 
                
                
                flex gap-2 flex-col top-[15rem] `}
              >
                <h2 className="max-w-[900px]  text-[50px]">{slide.title}</h2>
                <p>{slide.description}</p>
                <div>
                  <button className=" bg-[#0A5D5D] p-3 text-white">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
