import React from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from "../../components/Dropdown/Dropdown";
import { homeItems } from "../../static/mockdb";
import "./header.scss";

const Header = ({ handleSideBar }) => {
  return (
    <>
      <div className="fixed top-0 w-full z-20   bg-white">
        <div className="max-w-screen-xl mx-auto pt-10">
          <div className="flex items-center px-10 justify-between">
            <div>
              <img
                src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=160"
                alt=""
              />
            </div>

            <div>
              <ul className="flex header__mobile  gap-5">
                <li className="font-bold group cursor-pointer">HOME</li>
                <li className="cursor-pointer group">
                  COLLECTION
                  <Dropdown items={homeItems} />
                </li>
                <li className="cursor-pointer">PRODUCTS</li>
                <li className="cursor-pointer ">OTHER PAGES</li>
                <li className="cursor-pointer">BLOG</li>
              </ul>
            </div>

            <div className="header__xl flex items-center gap-2 cursor-pointer">
              <div className="flex gap-5">
                <div>
                  <CiSearch className="text-[1.5rem]  cursor-pointer " />
                </div>
                <div className="relative  cursor-pointer">
                  <CiUser className="text-[1.5rem]" />
                </div>
                <div className="relative cursor-pointer">
                  <CiShoppingCart className="text-[1.5rem]" />
                </div>
              </div>
              <RxHamburgerMenu
                onClick={handleSideBar}
                className="text-[1.3rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
