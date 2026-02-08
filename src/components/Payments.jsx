import React from "react";

const payments = [
  "/payments/visa.svg",
  "/payments/worldpay.png",
  "/payments/visa-electron.svg",
  "/payments/amex.svg",
  "/payments/mastercard.svg",
  "/payments/visa2.svg",
  "/payments/visa3.svg",
  "/payments/maestro.svg",
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#071b3a] to-[#020b1e] text-white">
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
                className="h-10 w-auto bg-white rounded-md px-2 py-1"
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
            className="w-full md:w-72 px-4 py-3 rounded-l-md bg-[#0b1f3f] border border-white/10 placeholder:text-white/50 focus:outline-none"
          />
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 rounded-r-md">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
}
