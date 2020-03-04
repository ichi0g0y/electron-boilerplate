import emotionStyled, { CreateStyled } from '@emotion/styled';

import { global as globalDark, theme as themeDark } from './dark';
import { global as globalDracula, theme as themeDracula } from './dracula';
import { global as globalLight, theme as themeLight } from './light';
import { MyTheme } from './type';

export const styled = emotionStyled as CreateStyled<MyTheme>;

export { themeLight, globalLight, themeDark, globalDark, themeDracula, globalDracula };
