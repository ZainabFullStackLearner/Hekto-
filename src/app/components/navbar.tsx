'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchWithSanity from './search';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);

  return (
    <div className="w-full bg-white text-black shadow-md mb-[-4%]">
      <nav className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <h1 className="font-josefin font-bold text-[34px]">Hekto</h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 font-lato items-center">
          <li>
            <Link href="/" className="hover:text-[#FB2E86]">Home</Link>
          </li>
          <li className="relative">
            <button
              type="button"
              className="hover:text-[#FB2E86] bg-transparent border-none outline-none cursor-pointer"
              onClick={() => setIsPagesDropdownOpen((open) => !open)}
              onBlur={() => setTimeout(() => setIsPagesDropdownOpen(false), 100)}
              tabIndex={0}
            >
              Pages
            </button>
            {isPagesDropdownOpen && (
              <ul
                className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-[100] border"
                style={{ zIndex: 1000 }}
                onMouseDown={e => e.preventDefault()} // Prevents blur when clicking inside
              >
                <li>
                  <Link
                    href="/pages/about"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FB2E86]"
                    onClick={() => setIsPagesDropdownOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/list"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FB2E86]"
                    onClick={() => setIsPagesDropdownOpen(false)}
                  >
                    Shop List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/Faq"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FB2E86]"
                    onClick={() => setIsPagesDropdownOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/grid" className="hover:text-[#FB2E86]">Products</Link>
          </li>
          <li>
            <Link href="/pages/blog" className="hover:text-[#FB2E86]">Blog</Link>
          </li>
          <li>
            <Link href="/Page/Order" className="hover:text-[#FB2E86]">Shop</Link>
          </li>
          <li>
            <Link href="/pages/contact" className="hover:text-[#FB2E86]">Contact</Link>
          </li>
        </ul>

        {/* Search (Desktop) */}
        <div className="hidden sm:block">
          <SearchWithSanity />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars className="text-gray-800" />
        </button>
      </nav>

      {/* Side Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-md z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className="text-2xl text-gray-800" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 font-lato text-lg">
          <li>
            <Link href="/" className="hover:text-[#FB2E86]">Home</Link>
          </li>
          <li>
            <button
              className="flex justify-between w-full items-center hover:text-[#FB2E86]"
              onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)}
            >
              Pages <span>{isMobilePagesOpen ? '-' : '+'}</span>
            </button>
            {isMobilePagesOpen && (
              <ul className="pl-4 mt-2">
                <li>
                  <Link href="/pages/about" className="block py-1 hover:text-[#FB2E86]">About</Link>
                </li>
                <li>
                  <Link href="/list" className="block py-1 hover:text-[#FB2E86]">Shop List</Link>
                </li>
                <li>
                  <Link href="/pages/Faq" className="block py-1 hover:text-[#FB2E86]">FAQ</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/grid" className="hover:text-[#FB2E86]">Products</Link>
          </li>
          <li>
            <Link href="/pages/blog" className="hover:text-[#FB2E86]">Blog</Link>
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;

