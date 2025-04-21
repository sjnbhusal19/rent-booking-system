
import React from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between my-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
      <Link to="/"> {/* Link to home page */}
        <img
          src="/logoR.png"
          alt="Logo"
          className="h-16 w-16 object-contain"
        ></img>
        </Link>
        <span className="text-xl font-bold text-black-600">RoomRent</span>
      </div>

      {/* Search bar */}
      <div className="flex-1 mx-6 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Location..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Profile section */}
      <div className="flex space-x-4">
        <Link to="/login" className="text-black-600 hover:text-blue-800">Login</Link>
        <Link to="/signup" className="text-black-600 hover:text-blue-800">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
