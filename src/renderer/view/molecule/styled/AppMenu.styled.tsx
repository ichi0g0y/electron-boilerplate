import React from 'react';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

import { styled } from ':/theme';

/*-----------------------------------------------------------------------------*/
type AppMenuDropdownProps = DropdownProps & {
  visible: boolean;
};
const AppMenuDropdownInline = ({ visible, icon, ...other }: AppMenuDropdownProps) => <Dropdown icon={icon} {...other} />;
export const AppMenuDropdown = styled(AppMenuDropdownInline)<AppMenuDropdownProps>`
  display: ${props => `${props.visible ? 'inline' : 'none'} !important;`};
  color: ${props => `${props.theme.color.appMenu} !important;`};
  position: fixed !important;
  top: 1em;
  right: 2.68em;
  z-index: 100;
  margin: 0;
  cursor: pointer;
`;
