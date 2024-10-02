import React from "react";
import {
  FaRocket,
  FaUndoAlt,
  FaCreditCard,
  FaDollarSign,
} from "react-icons/fa";
const SmallServices = () => {
  const serviceData = [
    {
      icon: <FaRocket size={30} />,
      title: "Extra Shipping",
      description:
        "Extra Shipping Benefits to Ensure Swift, Reliable, and Stress-Free Deliveries",
    },
    {
      icon: <FaUndoAlt size={30} />,
      title: "Return Policy",
      description:
        "Extra Return Benefits to Ensure Swift, Reliable, and Stress-Free Returns",
    },
    {
      icon: <FaCreditCard size={30} />,
      title: "Payment Secured",
      description:
        "Extraordinary Payment Security Measures for a Safe and Trustworthy Shopping Experience",
    },
    {
      icon: <FaDollarSign size={30} />,
      title: "Money Back Guarantee",
      description:
        "Extra Measures for Your Complete Peace of Mind with Our Money-Back Guarantee",
    },
  ];

  return (
    <div className="bg-gray-100 mt-10 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceData.map((service, index) => (
          <div key={index} className="text-center  p-6 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="text-teal-500">{service.icon}</div>
              <h3 className="text-[16px] font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallServices;
