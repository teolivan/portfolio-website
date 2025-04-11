'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full px-6 py-4 bg-cyan-900 shadow-sm ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="hover:scale-105 transition-all duration-300 text-xl font-semibold text-gray-200 font-montserrat hover:text-white">
          My Portfolio
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-gray-200 ">
          <li>
            <Link href="/experience" className='transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white'>Experience</Link>
          </li>
          <li>
            <Link href="/about" className='transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white'>About</Link>
          </li>
          <li>
            <Link href="/projects" className='transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white'>Projects</Link>
          </li>
          <li>
            <Link href="/resume" className='transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white'>Resume</Link>
          </li>
          <li>
            <Link href="/contact" className='transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
};


export default Navbar;