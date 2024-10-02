import React from "react";
import {
  FaFacebookF,
  FaPinterest,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Logo and Contact (2 sütun kaplayacak) */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">FurStore</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MdLocationOn className="mr-2" /> 2357 Gordon Street, CA
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2" /> 0123 456 789
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" /> demo@gmail.com
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>Our story</li>
            <li>Our team</li>
            <li>Designers</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>FAQ's</li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>

        {/* Payments & Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Payments</h3>
          <div className="flex flex-wrap gap-4 mb-4 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="w-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"
              alt="MasterCard"
              className="w-10"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="w-10"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600 items-center">
            <FaFacebookF />
            <FaPinterest />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
