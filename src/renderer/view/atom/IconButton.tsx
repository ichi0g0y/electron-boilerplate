/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Color from 'color';

import { styled } from ':/theme';

/*-----------------------------------------------------------------------------*/
type IconButtonProps = FontAwesomeIconProps & {
  disabled: boolean;
};
const IconButtonInline = ({ disabled, ...props }: IconButtonProps) => <FontAwesomeIcon {...props} />;
export const IconButton = styled(IconButtonInline)<IconButtonProps>`
  cursor: ${props => (props.disabled ? 'normal' : 'pointer')};
  color: ${props =>
    props.disabled
      ? Color(props.theme.color.textB)
          .alpha(0.5)
          .toString()
      : props.theme.color.textB};
`;
