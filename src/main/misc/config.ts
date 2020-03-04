import { screen } from 'electron';
import ElectronStore from 'electron-store';

import { MyThemeName, setInitialState as setInitialStateTheme } from '#/store/themeSlice.aid';

/*-----------------------------------------------------------------------------*/
type configThemeProps = {
  theme: {
    name: MyThemeName;
  };
};
export const configTheme = new ElectronStore<configThemeProps>({
  defaults: {
    theme: { name: MyThemeName.dark },
  },
});
const theme = configTheme.get('theme');
console.debug(`theme name from config -> ${theme.name}`);
setInitialStateTheme({ name: theme.name });

/*-----------------------------------------------------------------------------*/
const DEFAULT_WIDTH = 700;
const DEFAULT_HEIGHT = 480;
export let configMainWindow: ElectronStore;
export const loadConfigAfterReady = () => {
  const primaryScreen = screen.getPrimaryDisplay();
  configMainWindow = new ElectronStore({
    defaults: {
      bounds: {
        x: (primaryScreen.bounds.width - DEFAULT_WIDTH) / 2,
        y: (primaryScreen.bounds.height - DEFAULT_HEIGHT) / 2,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
      },
    },
  });
};
