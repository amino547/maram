// src/components/Navbar.js
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-50 w-full text-white shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
     
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-3xl font-bold tracking-wide">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112018/untitled-1_142.png?UMrFwIBD468G_bsPLgi6s1JIXTAtuhiq&itok=xZKed8Ea"
                alt="Jiibly Logo"
                className="w-10 h-10 mr-2 rounded-full"
              />
              Jiibly
            </Link>
          </div>

       
          <div className="hidden space-x-6 md:flex">
            <Link
              to="/"
              className="transition duration-300 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="transition duration-300 hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="transition duration-300 hover:text-gray-300"
            >
              Contact
            </Link>
          </div>

       
          <div className="items-center hidden space-x-4 md:flex">
            <Link
              to="/login"
              className="px-4 py-2 text-indigo-600 transition bg-white rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>

       
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="text-white bg-indigo-600 shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block transition duration-300 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block transition duration-300 hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block transition duration-300 hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-indigo-600 transition bg-white rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/


// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-50 w-full text-white shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-3xl font-bold tracking-wide">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112018/untitled-1_142.png?UMrFwIBD468G_bsPLgi6s1JIXTAtuhiq&itok=xZKed8Ea"
                alt="Jiibly Logo"
                className="w-10 h-10 mr-2 rounded-full"
              />
              Jiibly
            </Link>
          </div>

          {/* Links */}
          <div className="hidden space-x-6 md:flex">
            <Link
              to="/"
              className="transition duration-300 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="transition duration-300 hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="transition duration-300 hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              to="/create-review"
              className="transition duration-300 hover:text-gray-300"
            >
              Create Review
            </Link>
          </div>

          {/* Actions */}
          <div className="items-center hidden space-x-4 md:flex">
            <Link
              to="/login"
              className="px-4 py-2 text-indigo-600 transition bg-white rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-white bg-indigo-600 shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block transition duration-300 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block transition duration-300 hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block transition duration-300 hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              to="/create-review"
              className="block transition duration-300 hover:text-gray-300"
            >
              Create Review
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-indigo-600 transition bg-white rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

