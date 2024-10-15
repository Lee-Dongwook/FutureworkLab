import { useState, useEffect, useCallback } from 'react';

const useScroll = (threshold: number) => {
  const [scrolled, setScrolled] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return scrolled;
};

export default useScroll;
