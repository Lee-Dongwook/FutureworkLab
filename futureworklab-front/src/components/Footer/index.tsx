'use client';

import React from 'react';
import Link from 'next/link';
import useWindowWidth from '@/hooks/useWindowWidth';

const FooterComponent = () => {
  const width = useWindowWidth();
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center bg-black px-4 py-10 text-white">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-8">
        <p className="text-center text-lg font-normal">
          ©{year} Copyright FutureWorkLab {width < 700 ? <br /> : ' '}
          ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 sm:flex-col sm:items-center sm:gap-4 lg:flex-col lg:items-start lg:gap-2">
          <Link href="/policy/privacy" className="text-lg font-bold text-white hover:text-primary">
            개인정보처리방침
          </Link>
          <Link href="/about/location" className="text-lg font-bold text-white hover:text-primary">
            찾아오시는 길
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
