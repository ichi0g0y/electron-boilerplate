/** @jsx jsx */
import { jsx } from '@emotion/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from 'color';
import React from 'react';

import { Box, Flex } from './Container';

/*-----------------------------------------------------------------------------*/
type IconAndTextButtonProps = {
  baseColor: string;
  icon: IconDefinition;
  text: string;
  fluid?: boolean;
  onClick: () => void;
};
export const IconAndTextButton: React.FC<IconAndTextButtonProps> = ({ baseColor, icon, text, fluid, onClick }) => {
  const fluidValues = fluid ? { width: '100%' } : {};
  return (
    <Flex {...fluidValues} color="white" cursor="pointer" onClick={onClick}>
      <Box
        flex="0 1 auto"
        width="36px"
        background={Color(baseColor)
          .darken(0.1)
          .toString()}
        padding="0.5em"
        borderRadius="4px 0 0 4px"
        textAlign="center"
      >
        <FontAwesomeIcon icon={icon} color="white" size="1x" />
      </Box>
      <Box flex="1 0 auto" background={baseColor} padding="0.5em 1em 0.5em 1em" borderRadius="0 4px 4px  0" textAlign="center">
        {text}
      </Box>
    </Flex>
  );
};
