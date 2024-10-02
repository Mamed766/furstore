import { CiSearch } from "react-icons/ci";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 z-40 flex flex-col bg-clip-border  bg-white text-gray-700 h-screen w-full max-w-[30rem]  shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 min-w-[240px]  font-sans text-base font-normal text-gray-700">
          <nav className="flex flex-col min-w-[240px] font-sans text-base font-normal text-gray-700">
            <div
              role="button"
              className="flex border font-semibold items-center w-full p-3 text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <input
                type="text"
                className="w-full outline-none border-none"
                placeholder="SEARCH PRODUCTS"
              />
              <div className="grid place-items-center mr-4">
                <CiSearch />
              </div>
            </div>
            <div
              role="button"
              className="flex border font-semibold items-center w-full p-3 text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/">
                HOME
              </Link>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex font-semibold border items-center w-full p-3 text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/">
                COLLECTION
              </Link>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex border font-semibold items-center w-full p-3 text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/">
                PRODUCTS
              </Link>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex border font-semibold items-center w-full p-3 text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/">
                OTHER PAGES
              </Link>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex border font-semibold items-center w-full p-3 text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/">
                BLOG
              </Link>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
          </nav>

          <div>
            <div className="pl-3 flex flex-col gap-1">
              <p className="font-semibold">
                Call us: <span className="font-normal">(012)-345-67890</span>
              </p>
              <p className="font-semibold">
                Email <span className="font-normal">support@domain.com</span>
              </p>
              <div className="flex  items-center gap-2">
                <div className="bg-[#0A5D5D] cursor-pointer p-2 text-white rounded-sm">
                  <FaFacebookF />
                </div>
                <div className="bg-[#0A5D5D] cursor-pointer p-2 text-white rounded-sm">
                  <FaPinterestP />
                </div>
                <div className="bg-[#0A5D5D] cursor-pointer p-2 text-white rounded-sm">
                  <FaInstagram />
                </div>
                <div className="bg-[#0A5D5D] cursor-pointer p-2 text-white rounded-sm">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed top-0 z-30 h-full w-full bg-black/70"
        ></div>
      )}
    </>
  );
};
export default Sidebar;
