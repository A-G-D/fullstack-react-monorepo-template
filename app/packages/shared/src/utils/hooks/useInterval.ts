import { useEffect } from "react";

export const useInterval = (callback: () => void, period: number) => {
  useEffect(() => {
    const handle = setInterval(callback, period);

    return () => {
      clearInterval(handle);
    };
  }, [callback, period]);
};
