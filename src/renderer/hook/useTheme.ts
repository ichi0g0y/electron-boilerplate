import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OptionTypeBase } from 'react-select';

import { MyState } from '#/store/renderer';
import { setTheme as setThemeToSlice } from '#/store/themeSlice';
import { MyThemeName } from '#/store/themeSlice.aid';

import { globalDark, globalDracula, globalLight, themeDark, themeDracula, themeLight } from ':/theme';

export interface MyThemeOptionType extends OptionTypeBase {
  label: string;
  value: MyThemeName;
}

/*-----------------------------------------------------------------------------*/
export const useTheme = () => {
  const { name } = useSelector((state: MyState) => state.theme);
  const dispatch = useDispatch();

  const setTheme = useCallback((theme: MyThemeOptionType) => {
    dispatch(setThemeToSlice(theme.value));
  }, []);

  const getGlobal = useCallback((name: MyThemeName) => {
    switch (name) {
      case MyThemeName.light:
        return globalLight;
      case MyThemeName.dark:
        return globalDark;
      case MyThemeName.dracula:
        return globalDracula;
      default:
        return globalLight;
    }
  }, []);

  const getTheme = useCallback((name: MyThemeName) => {
    switch (name) {
      case MyThemeName.light:
        return themeLight;
      case MyThemeName.dark:
        return themeDark;
      case MyThemeName.dracula:
        return themeDracula;
      default:
        return themeLight;
    }
  }, []);

  const themes: MyThemeOptionType[] = useMemo(
    () =>
      Object.keys(MyThemeName).map(name => ({
        value: name as MyThemeName,
        label: name,
      })),
    []
  );

  const current = useMemo(() => getTheme(name), [name]);
  const currentGlobal = useMemo(() => getGlobal(name), [name]);

  return {
    name,
    themes,
    current,
    currentGlobal,
    setTheme,
  };
};
