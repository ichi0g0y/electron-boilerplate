import { generateGlobal, generateSelect, generateSelectStealth } from '../base';
import { MyTheme } from '../type';

import color from './color';

const global = generateGlobal(color);
const select = generateSelect(color);
const selectStealth = generateSelectStealth(color);

const theme: MyTheme = {
  color,
  select,
  selectStealth,
};

export { global, theme };
