/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(1920);

  let throttling = false;

  const handleResize = () => {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setWindowWidth(window.innerWidth);
      throttling = false;
    }, 300);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
