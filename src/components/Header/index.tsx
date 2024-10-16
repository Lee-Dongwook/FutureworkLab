'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import HamburgerMenuComponent from '@/components/HamburgerMenu';
import useScrollTop from '@/hooks/useScrollTop';
import useWindowWidth from '@/hooks/useWindowWidth';

const HeaderComponent = () => {
  useScrollTop();

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 600;

  useEffect(() => {
    if (isMobile) setIsHamburgerMenuOpen(true);
  }, [isMobile]);

  return (
    <header className="sticky top-0 z-10 flex min-h-[4rem] w-full justify-center bg-white shadow-md transition-all">
      <div className="flex w-[90%] max-w-[100rem] items-center justify-between px-8">
        <h1>
          <Link href="/" className="text-textPrimary text-[1.8rem] font-bold">
            FutureWorkLab
          </Link>
        </h1>
        {isMobile ? (
          <button
            onClick={() => setIsHamburgerMenuOpen(true)}
            className="flex cursor-pointer flex-col gap-2.5"
          >
            <span className="bg-textPrimary block h-[0.2rem] w-8 transition-colors hover:bg-primary"></span>
            <span className="bg-textPrimary block h-[0.2rem] w-8 transition-colors hover:bg-primary"></span>
            <span className="bg-textPrimary block h-[0.2rem] w-8 transition-colors hover:bg-primary"></span>
          </button>
        ) : (
          <nav className="text-textPrimary flex gap-8 transition-colors">
            <Link
              href="/"
              className="text-body1 text-textPrimary transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-body1 text-textPrimary transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
        )}
      </div>
      {isMobile && (
        <HamburgerMenuComponent
          isOpen={isHamburgerMenuOpen}
          handleClose={() => setIsHamburgerMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default HeaderComponent;
