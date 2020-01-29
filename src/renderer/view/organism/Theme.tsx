import React, { useCallback } from 'react';
import { Dropdown, DropdownProps, Header, Segment } from 'semantic-ui-react';

import { MyThemeName } from '@/store/themeSlice.aid';

import { useTheme } from ':/hook/useTheme';

import { Box } from '../atom/Box';

export const Theme: React.FC = () => {
  const { name, themes, setThemeName } = useTheme();

  const handleChange = useCallback((event: React.SyntheticEvent<Element, Event>, props: DropdownProps) => {
    setThemeName(props.value as MyThemeName);
  }, []);

  return (
    <Box width="100%" paddingTop="1em" paddingLeft="1em" paddingRight="1em">
      <Segment>
        <Header as="h2">theme</Header>
        <Box flex="2 1 70%">
          <Dropdown placeholder="Theme" fluid selection options={themes} defaultValue={name} onChange={handleChange} />
        </Box>
      </Segment>
    </Box>
  );
};
