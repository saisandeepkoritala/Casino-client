import React from "react";
import { useSelector } from "react-redux";

import Pic1 from "../payments/visa.svg";
import Pic2 from "../payments/worldpay.png";
import Pic3 from "../payments/visa-electron.svg";
import Pic4 from "../payments/amex.svg";
import Pic5 from "../payments/mastercard.svg";
import Pic6 from "../payments/visa2.svg";
import Pic7 from "../payments/visa3.svg";
import Pic8 from "../payments/maestro.svg";

const payments = [
  Pic1,
  Pic2,
  Pic3,
  Pic4,
  Pic5,
  Pic6,
  Pic7,
  Pic8,
];

export default function Footer() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";
  return (
    <footer className={isDarkMode ? `${classNames} bg-gradient-to-b from-[#071b3a] to-[#020b1e]` : `${classNames} bg-gradient-to-b from-[#f0f4f8] to-[#e0e7ee]`}>
      {/* Payment methods */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <h3 className="text-lg font-semibold mb-6">
            We accept variety of payment methods
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {payments.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="payment method"
                className={`${classNames} h-10 w-auto rounded-md px-2 py-1`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-wide">
            <span className="text-yellow-400">C</span>ASINO
          </span>
        </div>

        {/* Subscribe */}
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter email address"
            className={`${classNames} w-full md:w-72 px-4 py-3 rounded-l-md border border-white/10 placeholder:text-white/50 focus:outline-none`}
          />
          <button className={`${classNames} bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 rounded-r-md`}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
}
