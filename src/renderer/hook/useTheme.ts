import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MyState } from '@/store/renderer';
import { setTheme } from '@/store/themeSlice';
import { MyThemeName } from '@/store/themeSlice.aid';

import { darkTheme, lightTheme } from ':/theme';
import { globalDarkCSS, globalLightCSS } from ':/theme/globalCSS';

/*-----------------------------------------------------------------------------*/
export const useTheme = () => {
  const { name } = useSelector((state: MyState) => state.theme);
  const dispatch = useDispatch();

  const setThemeName = useCallback((themeName: MyThemeName) => {
    dispatch(setTheme(themeName));
  }, []);

  const getGlobalCSS = useCallback(() => {
    switch (name) {
      case MyThemeName.light:
        return globalLightCSS;
      case MyThemeName.dark:
        return globalDarkCSS;
      default:
        return globalLightCSS;
    }
  }, [name]);

  const getTheme = useCallback(() => {
    switch (name) {
      case MyThemeName.light:
        return lightTheme;
      case MyThemeName.dark:
        return darkTheme;
      default:
        return lightTheme;
    }
  }, [name]);

  const themes = useMemo(
    () =>
      Object.keys(MyThemeName).map(name => ({
        key: name,
        value: name,
        text: name,
      })),
    []
  );

  const current = useMemo(() => getTheme(), [name]);
  const currentGlobalCSS = useMemo(() => getGlobalCSS(), [name]);

  return {
    name,
    themes,
    current,
    currentGlobalCSS,
    setThemeName,
  };
};
