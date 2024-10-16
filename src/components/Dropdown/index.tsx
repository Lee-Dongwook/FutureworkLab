'use client';

import React from 'react';

interface DropdownProps {
  options: {
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    component: React.ReactNode;
  }[];
  className?: string;
}

const Dropdown = ({ options, className }: DropdownProps) => {
  return (
    <ul
      className={`${className} z-modal absolute flex flex-col divide-y divide-solid divide-gray-600 overflow-hidden rounded-md border border-solid border-black bg-white text-sm font-medium text-gray-200`}
    >
      {options.map((list, index) => (
        <li
          key={index}
          className="flex h-8 cursor-pointer items-center gap-2 px-3 text-black hover:bg-gray-900"
          onClick={list.onClick || undefined}
        >
          {list.component}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
