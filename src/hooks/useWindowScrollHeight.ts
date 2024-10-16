/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';

const useWindowScrollHeight = () => {
  const [windowScrollHeight, setWindowScrollHeight] = useState<number>(0);

  let throttling = false;

  const handleScroll = () => {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setWindowScrollHeight(window.scrollY);
      throttling = false;
    }, 300);
  };

  useEffect(() => {
    setWindowScrollHeight(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return windowScrollHeight;
};

export default useWindowScrollHeight;
