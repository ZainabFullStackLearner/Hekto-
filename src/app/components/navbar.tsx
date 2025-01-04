'use client';
import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'; // Importing icons from React Icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);
  const [isMobileBlogOpen, setIsMobileBlogOpen] = useState(false);

  return (
    <div className="px-4 pt-2">
      <nav className="max-w-screen-lg mx-auto relative lg:left-[71px]">
        <div className="flex justify-between items-center gap-16 absolute">
          {/* Logo */}
          <h1 className="font-josefin font-bold text-[34px]">Hekto</h1>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex font-lato gap-6 sm:flex">
            <li>
              <Link href="/" className="hover:text-[#FB2E86]" target="_self">
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
              onMouseLeave={() => setIsPagesDropdownOpen(false)}
            >
              <Link href="#" className="hover:text-[#FB2E86]" target="_self">
                Pages
              </Link>
              {isPagesDropdownOpen && (
                <ul className="absolute bg-white shadow-md rounded z-50 w-[200px]">
                  <li>
                    <Link href="pages/about" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FB2E86]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FB2E86]">
                      Shop Grid
                    </Link>
                  </li>
                  <li>
                    <Link href="/list" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FB2E86]">
                      Shop List
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/Page" className="hover:text-[#FB2E86]">
                Products
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsBlogDropdownOpen(true)}
              onMouseLeave={() => setIsBlogDropdownOpen(false)}
            >
              <Link href="/pages/blog" className="hover:text-[#FB2E86]">
                Blog
              </Link>
              {isBlogDropdownOpen && (
                <ul className="absolute bg-white shadow-md rounded z-50">
                  <li>
                    <Link href="/pages/Faq" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FB2E86]">
                      FAQ
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/Page/Order" className="hover:text-[#FB2E86]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:text-[#FB2E86]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="flex items-center justify-between border-2 relative left-[52px] border-[#E7E6EF] lg:m-0 -ml-[105px] rounded self-end">
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-2 py-1 w-[150px]"
            />
            <div className="bg-[#FB2E86] p-1">
              <FaSearch width="24" height="24" className="text-white" />
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="sm:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className="h-6 w-6 text-gray-800 sm:my-auto md:flex -mb-3" />
          </button>
        </div>

        {/* Side Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-md z-50 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes className="h-6 w-6 text-gray-800" />
          </button>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col gap-6 mt-16 px-6 font-lato text-lg">
            <li>
              <Link href="/" className="hover:text-[#FB2E86]">Home</Link>
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full text-left hover:text-[#FB2E86]"
                onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)}
              >
                Pages
                <span>{isMobilePagesOpen ? '-' : '+'}</span>
              </button>
              {isMobilePagesOpen && (
                <ul className="pl-4">
                  <li>
                    <Link href="pages/about" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FB2E86]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FB2E86]">
                      Shop Grid
                    </Link>
                  </li>
                  <li>
                    <Link href="/list" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#FB2E86]">
                      Shop List
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/Page" className="hover:text-[#FB2E86]">Products</Link>
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full text-left hover:text-[#FB2E86]"
                onClick={() => setIsMobileBlogOpen(!isMobileBlogOpen)}
              >
                <Link href="/pages/blog" className="hover:text-[#FB2E86]">
                Blog</Link>
                <span>{isMobileBlogOpen ? '-' : '+'}</span>
              </button>
              {isMobileBlogOpen && (
                <ul className="pl-4">
                  <li>
                    <Link href="/pages/Faq" className="block px-4 py-2 hover:bg-gray-200">
                      FAQ
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/Page/Order" className="hover:text-[#FB2E86]">Shop</Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:text-[#FB2E86]">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
