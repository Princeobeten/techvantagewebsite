"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-col lg:flex-row items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-6 py-3 lg:px-10">
      <div className="flex items-center justify-between w-full lg:w-auto text-[#0d141c]">
        <Link href="/" className="flex items-center gap-1 text-2xl font-bold leading-tight tracking-[-0.015em]">
          <h1>
            <span className="text-black hover:text-[#0b6fda]">Tech</span>
            <span className="text-blue-600 hover:text-blue-800">Vantage</span>
          </h1>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden text-2xl text-[#0d141c]">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <nav className={`lg:flex flex-col lg:flex-row flex-1 justify-end gap-8 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-9 mt-4 lg:mt-0">
          <a href="/" className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b6fda]">Home</a>
          <a href="#about-us" className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b6fda]">About</a>
          <a href="#events" className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b6fda]">Events</a>
          <a href="#bootcamp" className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b6fda]">Bootcamp</a>
          <a href="#community" className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b6fda]">Community</a>
        </div>
        <a href="#contact-us" className="mt-4 lg:mt-0 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0b6fda] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700">
          <span className="truncate">Contact us</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;