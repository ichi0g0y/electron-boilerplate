import React from 'react';
import ReactSwitch from 'react-switch';

import { useTheme } from ':/hook';

type SwitchProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean, event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string) => void;
};

export const Switch: React.FC<SwitchProps> = ({ checked, disabled = false, onChange }) => {
  const { current } = useTheme();
  return (
    <ReactSwitch
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      onColor={current.color.primaryA}
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow={`0px 1px 3px ${current.color.shadowA}`}
      activeBoxShadow={`0px 1px 3px ${current.color.shadowA}`}
      height={18}
      width={40}
    />
  );
};
