/* eslint @typescript-eslint/no-explicit-any: off */
import { CSSProperties } from 'react';
import { Styles, Theme } from 'react-select';
import { ThemeConfig } from 'react-select/src/theme';

import { MyColor } from '../type';

export const generateSelectStealth = (color: MyColor): { styles: Styles; theme: ThemeConfig } => {
  const styles: Styles = {
    container: (provided: CSSProperties, state: any) => ({
      ...provided,
      padding: 0,
    }),
    control: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: 'inherit',
      border: 'none',
      borderWidth: 0,
      boxShadow: 'none',
    }),
    valueContainer: (provided: CSSProperties, state: any) => ({
      ...provided,
      padding: 0,
      margin: 0,
    }),
    indicatorSeparator: (provided: CSSProperties, state: any) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided: CSSProperties, state: any) => ({
      ...provided,
      display: 'none',
    }),
    input: (provided: CSSProperties, state: any) => ({ ...provided, caretColor: color.textD, color: state.isDisabled ? color.textC : color.textA }),
    singleValue: (provided: CSSProperties, state: any) => ({
      ...provided,
      margin: 0,
      color: state.isDisabled ? color.textC : color.textE,
      fontWeight: 600,
    }),
    multiValue: (provided: CSSProperties, state: any) => ({
      ...provided,
      borderRadius: '4px',
      backgroundColor: state.isDisabled ? color.backgroundD : color.backgroundB,
      color: color.textE,
    }),
    multiValueLabel: (provided: CSSProperties, state: any) => ({
      ...provided,
      padding: '0 5px 0 0',
      fontSize: '0.9em',
      color: state.isDisabled ? color.textC : color.textE,
    }),
    menuList: (provided: CSSProperties, state: any) => ({
      ...provided,
      borderRadius: '4px',
    }),
    menu: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: color.backgroundD,
      border: 'none',
    }),
    option: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: !state.isFocused ? color.backgroundD : color.backgroundE,
      color: !state.isSelected ? color.textA : color.primaryC,
    }),
  };

  const theme = (theme: Theme): Theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: color.primaryA,
      primary75: color.primaryB,
      primary50: color.primaryC,
      primary25: color.primaryD,
    },
    spacing: { ...theme.spacing, controlHeight: 14 },
  });

  return { styles, theme };
};
