/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect, type RefObject } from 'react';

const useScrollHeight = (ref: RefObject<HTMLElement>) => {
  const [scrollTop, setScrollTop] = useState<number | undefined>(0);
  let throttling = false;

  const handleScroll = () => {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setScrollTop(ref?.current?.scrollTop);
      throttling = false;
    }, 300);
  };

  useEffect(() => {
    ref?.current?.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      ref?.current?.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return scrollTop;
};

export default useScrollHeight;
