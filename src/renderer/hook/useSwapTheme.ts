import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MyState } from '@/store/renderer';

export const swapTheme = (themeName: string) => {
  console.debug('theme change to "' + themeName + '".');
  const sheet = document.querySelector('#theme');
  if (!sheet) {
    return;
  }
  sheet.setAttribute('href', `theme/${themeName}.css`);
};

/*-----------------------------------------------------------------------------*/
export const useSwapTheme = () => {
  const { name } = useSelector((state: MyState) => state.theme);

  useEffect(() => {
    swapTheme(name);
  }, [name]);
};
