/** @jsx jsx */
import { jsx } from '@emotion/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { styled } from ':/theme';

import { Box, Flex } from './Container';

const MenuItemSkelton = styled(Flex)`
  cursor: pointer;
  padding: 0.6em 0.9em 0.6em 0.9em;
  :hover {
    background-color: ${props => props.theme.color.primaryA};
  }
  &:first-of-type {
    border-radius: 4px 4px 0 0;
  }
  &:nth-of-type(n + 2) {
  }
  &:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`;

export const MenuDivider = styled(Box)`
  border-top: solid 1px ${props => props.theme.color.backgroundB};
  height: 1px;
`;

/*-----------------------------------------------------------------------------*/
type MenuItemProps = {
  icon: IconDefinition;
  text: string;
  onClick: () => void;
};
export const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => {
  return (
    <MenuItemSkelton onClick={onClick}>
      <Box width="18px" textAlign="center" cursor="pointer">
        <FontAwesomeIcon icon={icon} color="white" size="1x" />
      </Box>
      <Box paddingLeft="1em" cursor="pointer" userSelect="none">
        {text}
      </Box>
    </MenuItemSkelton>
  );
};
