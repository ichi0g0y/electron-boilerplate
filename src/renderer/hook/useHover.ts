import { useCallback, useState } from 'react';

export const useHover = () => {
  const [hover, setHover] = useState(false);

  const setHoverFalse = useCallback(() => {
    setHover(false);
  }, []);

  const setHoverTrue = useCallback(() => {
    setHover(true);
  }, []);

  return {
    hover,
    setHover,
    setHoverFalse,
    setHoverTrue,
  };
};
