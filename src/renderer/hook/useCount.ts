import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCount } from '@/store/mainSlice';
import { MyState } from '@/store/renderer';

/*-----------------------------------------------------------------------------*/
export const useCount = () => {
  const { count } = useSelector((state: MyState) => state.main);
  const dispatch = useDispatch();

  const plusCount = useCallback(() => dispatch(setCount(count + 1)), [count]);
  const minusCount = useCallback(() => dispatch(setCount(count - 1)), [count]);

  return {
    count,
    plusCount,
    minusCount,
  };
};
