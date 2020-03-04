import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { styled } from ':/theme';

import { Box } from './Container';

type CheckboxBaseProps = {
  disabled: boolean | undefined;
};
const UnChecked = styled(FontAwesomeIcon)<CheckboxBaseProps>`
  color: ${props => (props.disabled ? props.theme.color.backgroundC : props.theme.color.backgroundD)};
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
`;
const Checked = styled(FontAwesomeIcon)<CheckboxBaseProps>`
  color: ${props => (props.disabled ? props.theme.color.backgroundC : props.theme.color.primaryA)};
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
`;

const LabelStyled = styled.label<CheckboxBaseProps>`
  padding-left: 0.5em;
  user-select: none;
  color: ${props => (props.disabled ? props.theme.color.backgroundD : props.theme.color.textB)};
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
`;

type CheckboxProps = {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
};
export const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, disabled, onChange }) => {
  return (
    <Box onClick={disabled ? () => null : onChange}>
      {checked ? <Checked icon={faCheckSquare} size="1x" disabled={disabled} /> : <UnChecked icon={faSquare} size="1x" disabled={disabled} />}
      {!label ? null : (
        <LabelStyled htmlFor={id} disabled={disabled}>
          {label}
        </LabelStyled>
      )}
    </Box>
  );
};
