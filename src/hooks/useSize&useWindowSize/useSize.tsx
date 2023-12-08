import React, { useEffect, useState } from "react";
const useSize = (ref: React.MutableRefObject<HTMLElement | null>) => {
  type SizeType = { width: number; height: number; x?: number; y?: number };
  const [size, setSize] = useState<SizeType>({ width: 0, height: 0 });

  useEffect(() => {
    const getRefSize = () => {
      if (ref?.current === null) return;
      const { width, height, x, y } = ref.current.getBoundingClientRect();
      setSize({ width, height, x, y });
    };
    getRefSize();
    window.addEventListener("resize", getRefSize);
    return () => window.removeEventListener("resize", getRefSize);
  }, [ref]);

  return size;
};

export default useSize;
