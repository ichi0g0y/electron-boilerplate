import { Styles } from 'react-select';
import { ThemeConfig } from 'react-select/src/theme';

export type MyColor = {
  primaryA: string;
  primaryB: string;
  primaryC: string;
  primaryD: string;
  backgroundA: string;
  backgroundB: string;
  backgroundC: string;
  backgroundD: string;
  backgroundE: string;
  textA: string;
  textB: string;
  textC: string;
  textD: string;
  textE: string;
  shadowA: string;
  shadowB: string;
};

export type MyTheme = {
  color: MyColor;
  select: { styles: Styles; theme: ThemeConfig };
  selectStealth: { styles: Styles; theme: ThemeConfig };
};
