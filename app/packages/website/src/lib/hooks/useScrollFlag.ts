import { useEffect, useState } from "react";

export const useScrollFlag = () => {
  const [scrolledFlag, setScrolledFlag] = useState(window.scrollY > 0);

  useEffect(() => {
    const onScroll = () => {
      setScrolledFlag(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrolledFlag;
};
