/* eslint @typescript-eslint/no-explicit-any: off */
import { CSSProperties } from 'react';
import { Styles, Theme } from 'react-select';
import { ThemeConfig } from 'react-select/src/theme';

import { MyColor } from '../type';

export const generateSelect = (color: MyColor): { styles: Styles; theme: ThemeConfig } => {
  const styles: Styles = {
    control: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: state.isDisabled ? color.backgroundC : color.backgroundD,
      border: 'none',
      borderWidth: 0,
    }),
    indicatorSeparator: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: color.backgroundB,
    }),
    dropdownIndicator: (provided: CSSProperties, state: any) => ({
      ...provided,
      color: state.isDisabled ? color.textC : color.textA,
    }),
    input: (provided: CSSProperties, state: any) => ({ ...provided, color: state.isDisabled ? color.textC : color.textA }),
    singleValue: (provided: CSSProperties, state: any) => ({ ...provided, color: state.isDisabled ? color.textC : color.textA }),
    multiValue: (provided: CSSProperties, state: any) => ({
      ...provided,
      borderRadius: '4px',
      backgroundColor: state.isDisabled ? color.backgroundD : color.backgroundB,
      color: color.textA,
    }),
    multiValueLabel: (provided: CSSProperties, state: any) => ({
      ...provided,
      padding: '0 5px 0 0',
      fontSize: '0.9em',
      color: state.isDisabled ? color.textC : color.textA,
    }),
    menu: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: color.backgroundD,
      border: `solid 1px ${color.primaryC}`,
    }),
    option: (provided: CSSProperties, state: any) => ({
      ...provided,
      backgroundColor: !state.isFocused ? color.backgroundD : color.backgroundE,
      color: !state.isSelected ? color.textA : color.primaryC,
    }),
  };

  const theme = (theme: Theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: color.primaryA,
      primary75: color.primaryB,
      primary50: color.primaryC,
      primary25: color.primaryD,
    },
  });

  return { styles, theme };
};
