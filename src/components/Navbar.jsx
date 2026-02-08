import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b1220] text-white px-5 sm:px-10 py-4 flex justify-between items-center gap-2">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-yellow-400">CASINO</h1>

      {/* Hamburger for Mobile */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
          <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
          <span className="block w-6 h-0.5 bg-yellow-400"></span>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm absolute sm:static bg-[#0b1220] w-full sm:w-auto left-0 sm:left-auto top-16 sm:top-auto transition-all duration-300 ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 ">Home</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 ">About</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 ">Games</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 ">Blog</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 ">Contact</li>   
      </ul>
        
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-0">
        <button className="border border-yellow-400 px-4 py-1 rounded w-full sm:w-auto">
          Login
        </button>
        <button className="bg-yellow-400 text-black px-4 py-1 rounded w-full sm:w-auto">
          Register
        </button>
      </div>
    </nav>
  );
}
