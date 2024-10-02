import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { homeCardsData } from "../../static/mockdb";

const HomeCards = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {homeCardsData.map((card, index) => (
        <div
          key={index}
          className="max-w-[25rem] relative max-h-[40rem] overflow-hidden"
        >
          <img
            className="max-w-[25rem] hover:scale-105 duration-300"
            src={card.image}
            alt={card.title}
          />

          <div className="flex absolute bottom-0 w-full p-5 items-center justify-between">
            <div className="text-white">{card.title}</div>
            <div className="bg-white p-3 rounded-full text-black">
              <FaArrowRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomeCards;
