import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ items }) => {
  return (
    <div className="absolute left-0 top-[80px] w-full z-10 bg-white p-5 shadow-xl group-hover:scale-y-100 transform scale-y-0 origin-top transition-transform duration-300 ease-in-out">
      <div className="flex flex-wrap justify-center gap-20">
        {items.map((column, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-bold mb-2">{column.title}</span>
            <ul>
              {column.links.map((item, idx) => (
                <Link
                  to={`/${item.link}`}
                  key={idx}
                  className="flex py-1 items-center gap-1 "
                >
                  <span className="text-gray-500 duration-300 ">
                    {item.label}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
