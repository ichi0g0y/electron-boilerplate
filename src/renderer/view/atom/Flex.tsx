import styled from '@emotion/styled';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
} from 'styled-system';

import { Box } from './Box';

type FlexProps = AlignContentProps & AlignItemsProps & FlexDirectionProps & FlexWrapProps & JustifyContentProps & { fullHeight?: boolean };

export const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  props =>
    props.fullHeight
      ? {
          height: '100vh',
          minHeight: '100vh',
        }
      : {},
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent
);
