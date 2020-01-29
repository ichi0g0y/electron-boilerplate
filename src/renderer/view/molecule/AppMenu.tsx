import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import { useIPC } from '../../hook/useIPC';

import { AppMenuDropdown } from './styled/AppMenu.styled';

/*-----------------------------------------------------------------------------*/
type AppMenuProps = { hover: boolean; handleMouseEnter: () => void };
export const AppMenu: React.FC<AppMenuProps> = ({ hover, handleMouseEnter }) => {
  const { openAbout, openPreference, quitApp } = useIPC();
  return (
    <AppMenuDropdown icon="angle down" visible={hover} onMouseEnter={handleMouseEnter}>
      <Dropdown.Menu direction="left">
        <Dropdown.Item icon="info" text="About electron-boilerplate..." onClick={openAbout} />
        <Dropdown.Item icon="cog" text="Preference..." onClick={openPreference} />
        <Dropdown.Divider />
        <Dropdown.Item icon="close" text="Quit electron-boilerplate" onClick={quitApp} />
      </Dropdown.Menu>
    </AppMenuDropdown>
  );
};
