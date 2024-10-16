'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import CloseIcon from '@/assets/svg/close.svg';
import MenuIcon from '@/assets/svg/menu.svg';

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <nav
        className={cx('items hidden gap-10 text-white md:flex', {
          flex: isOpen,
          'fixed inset-0 bg-gray-800 p-6 text-white': isOpen,
        })}
      >
        <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <li>
            <Link href="/home" legacyBehavior onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/news" legacyBehavior onClick={closeMenu}>
              News
            </Link>
          </li>
          <li>
            <Link href="/business" legacyBehavior onClick={closeMenu}>
              Business
            </Link>
          </li>
          <li>
            <Link href="/members" legacyBehavior onClick={closeMenu}>
              Members
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior onClick={closeMenu}>
              contact
            </Link>
          </li>
        </ul>
        <button className="absolute right-4 top-6 md:hidden">
          <Image src={CloseIcon} alt="close" onClick={closeMenu} width={24} height={24} priority />
        </button>
      </nav>
      <button className="flex cursor-pointer border-none bg-transparent md:hidden">
        <Image src={MenuIcon} alt="Menu" onClick={openMenu} width={24} height={24} priority />{' '}
      </button>
    </div>
  );
}
