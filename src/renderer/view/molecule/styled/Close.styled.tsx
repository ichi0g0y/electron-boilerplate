import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';

import { styled } from ':/theme';

type WindowCloseProps = FontAwesomeIconProps & {
  hover: boolean;
};
const WindowCloseInline = ({ hover, ...other }: WindowCloseProps) => <FontAwesomeIcon {...other} />;
export const WindowClose = styled(WindowCloseInline)<WindowCloseProps>`
  display: ${props => `${props.hover ? 'inline' : 'none'} !important;`};
  position: fixed !important;
  top: 1em;
  right: 1em;
  z-index: 100;
  margin: 0;
  color: ${props => `${props.theme.color.textE} !important;`};
  cursor: pointer;
`;
