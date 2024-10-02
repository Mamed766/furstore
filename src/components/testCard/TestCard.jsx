import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const TestCard = ({ name, title, stars, image, quote }) => {
  return (
    <div className="max-w-[37rem] w-full bg-white shadow-lg rounded-lg p-5 flex items-center gap-3">
      <div className="w-1/4 flex flex-col justify-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500">{title}</p>
        <div className="flex justify-start items-center mt-2 text-yellow-500">
          {Array.from({ length: stars }, (_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>

      <div className="w-1/4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-2/4">
        <div className="text-gray-400">
          <FaQuoteLeft size={30} />
        </div>
        <p className="text-gray-600 mt-2 text-[13px]">{quote}</p>
      </div>
    </div>
  );
};

export default TestCard;
