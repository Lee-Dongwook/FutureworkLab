import { useState, useEffect, useRef } from 'react';

interface IUseObserver {
  observableRef: React.MutableRefObject<Element | null>;
}

const useObserver = ({ observableRef }: IUseObserver) => {
  const [exposed, setExposed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setExposed(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current?.observe(observableRef.current!);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [observableRef]);

  return exposed;
};

export default useObserver;
