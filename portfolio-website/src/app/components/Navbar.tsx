'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full px-6 py-4 bg-cyan-900 shadow-sm ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/home" className="text-xl font-semibold text-gray-200 font-montserrat">
          My Portfolio
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-gray-200">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
};


export default Navbar;