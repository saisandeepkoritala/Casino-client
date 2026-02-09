import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {LightbulbIcon,LightbulbOffIcon} from 'lucide-react';
import { setTheme } from "../slices/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [DarkMode, setDarkMode] = useState(isDarkMode);

   const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
    dispatch(setTheme(!isDarkMode));
  };

  const classNames = DarkMode ? `bg-[#0b1220] text-white` : "bg-white text-[#0b1220]";

  return (
    <nav className={classNames + " px-5 sm:px-10 py-4 flex justify-between items-center gap-2"}>
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-yellow-400">CASINO</h1>

      {/* Hamburger for Mobile */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
          <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
          <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={classNames + `flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm absolute sm:static w-full sm:w-auto left-0 sm:left-auto top-16 sm:top-auto transition-all duration-300 ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 cursor-pointer" 
        onClick={() => window.location.href = "#home"}>Home</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 cursor-pointer" onClick={() => window.location.href = "#about"}>About</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 cursor-pointer" onClick={() => window.location.href = "#games"}>Games</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 cursor-pointer" onClick={() => window.location.href = "#blogs"}>Blog</li>
        <li className="px-4 py-4 sm:p-0 hover:border-b-2 hover:border-yellow-400 cursor-pointer" onClick={() => window.location.href = "#contact"}>Contact</li>   
      </ul>

      {/* Light and dark mode toggle */}
      <button className="p-2" onClick={toggleDarkMode}>
        {DarkMode ? <LightbulbOffIcon size={20} color="yellow"/> : <LightbulbIcon size={20} color="black" />}
      </button>
        
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
