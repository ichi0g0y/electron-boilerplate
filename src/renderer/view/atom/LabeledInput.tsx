/** @jsx jsx */
import { jsx } from '@emotion/core';

import { styled } from ':/theme';
import { Flex } from ':/view/atom';

import { FlexContainerProps } from './Container';

type LabaledInputProps = FlexContainerProps & {
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  value?: string | number;
  disabled?: boolean;
};

const InputInline = styled.input`
  background-color: ${props => props.theme.color.backgroundD};
  padding: 0.8em;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: ${props => props.theme.color.textB};
  width: 100%;
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${props => props.theme.color.primaryB};
  }
`;

export const LabeledInput = ({ label, type, placeholder, onChange, defaultValue, value, disabled, ...props }: LabaledInputProps) => (
  <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" {...props}>
    <label style={{ boxSizing: 'border-box' }}>{label}</label>
    <InputInline
      type={type ? type : 'input'}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
    />
  </Flex>
);
