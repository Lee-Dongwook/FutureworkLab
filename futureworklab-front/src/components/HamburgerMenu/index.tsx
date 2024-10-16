'use client';

import React from 'react';
import Link from 'next/link';

interface HamburgerMenuComponentProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HamburgerMenuComponent = ({ isOpen, handleClose }: HamburgerMenuComponentProps) => {
  return (
    <>
      <div
        className={`absolute z-0 h-screen w-full bg-black ${isOpen ? 'block' : 'hidden'}`}
        onClick={handleClose}
      ></div>

      <div
        className={`fixed right-0 top-0 z-10 h-screen w-80 bg-white pl-20 pt-20 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button className="absolute right-10 top-10 z-20" onClick={handleClose}>
          Close
        </button>
      </div>

      <nav className="relative z-10 flex flex-col items-center gap-8 text-background">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>
        <Link href="/about" className="text-3xl font-bold">
          About
        </Link>
      </nav>
    </>
  );
};

export default HamburgerMenuComponent;
