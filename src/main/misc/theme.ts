import { MyThemeName, setOnUpdate } from '@/store/themeSlice.aid';

import { configTheme } from './config';

/*-----------------------------------------------------------------------------*/
const updateTheme = (name: MyThemeName) => {
  console.debug(`save theme name -> ${name}`);
  configTheme.set('theme', { name });
};
setOnUpdate(updateTheme);
