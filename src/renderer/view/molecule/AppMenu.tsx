/* eslint react/display-name: off */
import { faAngleDown, faCog, faDoorOpen, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef, Fragment } from 'react';

import { useIPC } from ':/hook';
import { MenuDivider, MenuItem } from ':/view/atom';

import { AppMenuTippy, AppMenuWrapper } from './styled/AppMenu.styled';

/*-----------------------------------------------------------------------------*/
type AppMenuProps = { hover: boolean };
export const AppMenu: React.FC<AppMenuProps> = ({ hover }) => {
  const { openAbout, openPreference, quitApp } = useIPC();

  const AppMenuAnchor = forwardRef((props, ref) => (
    <span ref={ref as React.RefObject<HTMLSpanElement>} style={{ cursor: 'pointer', display: hover ? 'block' : 'none' }}>
      <FontAwesomeIcon icon={faAngleDown} size="1x" />
    </span>
  ));

  return (
    <AppMenuWrapper>
      <AppMenuTippy
        content={
          <Fragment>
            <MenuItem icon={faInfo} text="About electron-boilerplate..." onClick={openAbout} />
            <MenuItem icon={faCog} text="Preference..." onClick={openPreference} />
            <MenuDivider />
            <MenuItem icon={faDoorOpen} text="Quit electron-boilerplate" onClick={quitApp} />
          </Fragment>
        }
        arrow={false}
        trigger="click"
        placement="bottom-end"
        interactive
        appendTo={document.getElementById('root_container') || document.body}
      >
        <AppMenuAnchor />
      </AppMenuTippy>
    </AppMenuWrapper>
  );
};
