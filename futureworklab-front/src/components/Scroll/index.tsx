'use client';

import React from 'react';

interface ScrollComponentProps {
  isScroll: boolean;
}

const ScrollComponent = ({ isScroll }: ScrollComponentProps) => {
  return (
    <div
      className={`absolute left-1/2 flex animate-pulse flex-col items-center gap-2 ${
        isScroll ? 'bottom-16 text-white' : 'bottom-8 text-black'
      }`}
      style={{ transform: 'translateX(-50%)' }}
    >
      <p className="text-[1.25rem] font-normal leading-[1rem]">Scroll down to view more content</p>
    </div>
  );
};

export default ScrollComponent;
