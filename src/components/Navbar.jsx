import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon, Menu, X } from 'lucide-react';
import { setTheme } from "../slices/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    // We only need to dispatch to Redux; the component will re-render automatically
    dispatch(setTheme(!isDarkMode));
  };

  // Base classes for theme switching
  const themeClasses = isDarkMode 
    ? "bg-[#0b1220] text-white" 
    : "bg-white text-[#0b1220]";

  return (
    <nav className={`${themeClasses} px-5 sm:px-10 py-4 flex justify-between items-center relative transition-colors duration-300`}>
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-yellow-400">CASINO</h1>

      {/* Right Side Actions (Theme + Mobile Menu + Buttons) */}
      <div className="flex items-center gap-4">
        
        {/* Theme Toggle Button */}
        <button 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
          onClick={toggleDarkMode}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-600" />
          )}
        </button>

        {/* Hamburger for Mobile */}
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-yellow-400" /> : <Menu className="text-yellow-400" />}
        </button>

        {/* Auth Buttons - Hidden on very small screens or moved inside menu */}
        <div className="hidden sm:flex gap-3">
          <button className="border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition-all">
            Login
          </button>
          <button className="bg-yellow-400 text-black px-4 py-1 rounded font-medium">
            Register
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${themeClasses} flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm absolute sm:static w-full sm:w-auto left-0 top-full sm:top-auto p-5 sm:p-0 shadow-lg sm:shadow-none transition-all duration-300 z-50 ${
          isOpen ? "block" : "hidden sm:flex"
        }`}
      >
        {["Home", "About", "Games", "Blogs", "Contact"].map((item) => (
          <li 
            key={item}
            className="hover:text-yellow-400 cursor-pointer transition-colors border-b-2 border-transparent hover:border-yellow-400 sm:py-1"
            onClick={() => {
                window.location.href = `#${item.toLowerCase()}`;
                setIsOpen(false);
            }}
          >
            {item}
          </li>
        ))}
        
        {/* Mobile-only Auth Buttons */}
        <div className="flex flex-col gap-2 mt-4 sm:hidden">
            <button className="border border-yellow-400 px-4 py-2 rounded">Login</button>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded font-medium">Register</button>
        </div>
      </ul>
    </nav>
  );
}