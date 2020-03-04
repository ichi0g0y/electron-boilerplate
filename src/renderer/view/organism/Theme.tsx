import React, { useCallback } from 'react';
import Select, { ActionMeta, ValueType } from 'react-select';

import { MyThemeOptionType, useTheme } from ':/hook';
import { Box } from ':/view/atom';

export const Theme: React.FC = () => {
  const { current, name, themes, setTheme } = useTheme();
  const theme = themes.find(value => value.value === name);
  const handleChange = useCallback((value: ValueType<MyThemeOptionType>, actionMeta: ActionMeta) => {
    if (!value) return;
    setTheme(value as MyThemeOptionType);
  }, []);

  return (
    <Box width="100%" paddingTop="1em" paddingLeft="1em" paddingRight="1em" userSelect="none">
      <Box background={current.color.backgroundB} p="1em" borderRadius="4px">
        <h3>Theme</h3>
        <Select defaultValue={theme} onChange={handleChange} options={themes} styles={current.select.styles} theme={current.select.theme} />
      </Box>
    </Box>
  );
};
