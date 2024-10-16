/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState<number>(1080);

  let throttling = false;

  const handleResize = () => {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setWindowHeight(window.innerHeight);
      throttling = false;
    }, 300);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowHeight;
};

export default useWindowHeight;
