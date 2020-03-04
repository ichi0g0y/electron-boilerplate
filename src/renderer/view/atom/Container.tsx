import CSS from 'csstype';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  background,
  BackgroundProps,
  borders,
  BordersProps,
  bottom,
  BottomProps,
  display,
  DisplayProps,
  flex,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  fontSize,
  FontSizeProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  left,
  LeftProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  order,
  OrderProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  right,
  RightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

import { styled } from ':/theme';

type BoxExtendProps = {
  whiteSpace?: CSS.WhiteSpaceProperty;
  color?: CSS.ColorProperty;
  cursor?: CSS.CursorProperty;
  userSelect?: CSS.UserSelectProperty;
  windowDragDisabled?: boolean;
};
export type BoxContainerProps = AlignSelfProps &
  BackgroundProps &
  BordersProps &
  DisplayProps &
  FlexProps &
  FontSizeProps &
  MinHeightProps &
  MinWidthProps &
  HeightProps &
  OrderProps &
  OverflowProps &
  PositionProps &
  SpaceProps &
  TextAlignProps &
  TopProps &
  LeftProps &
  RightProps &
  BottomProps &
  WidthProps &
  ZIndexProps &
  BoxExtendProps;

/*-----------------------------------------------------------------------------*/
const BoxSkelton = styled.div<BoxContainerProps>(
  props =>
    props.cursor
      ? {
          cursor: props.cursor,
        }
      : {},
  props =>
    props.userSelect
      ? {
          userSelect: props.userSelect,
        }
      : {},
  props =>
    props.whiteSpace
      ? {
          whiteSpace: props.whiteSpace,
        }
      : {},
  props =>
    props.color
      ? {
          color: props.color,
        }
      : {},
  alignSelf,
  background,
  borders,
  display,
  flex,
  fontSize,
  height,
  minHeight,
  minWidth,
  order,
  overflow,
  position,
  space,
  textAlign,
  top,
  left,
  right,
  bottom,
  width,
  zIndex
);

export const Box = styled(BoxSkelton)<BoxContainerProps>`
  -webkit-app-region: ${props => (props.windowDragDisabled ? 'no-drag' : 'drag')};
  box-sizing: border-box;
`;

type FlexExtendProps = { fullHeight?: boolean };
export type FlexContainerProps = BoxContainerProps &
  AlignContentProps &
  AlignItemsProps &
  FlexDirectionProps &
  FlexWrapProps &
  JustifyContentProps &
  FlexExtendProps;
export const Flex = styled(Box)<FlexContainerProps>(
  {
    display: 'flex',
  },
  props =>
    props.fullHeight
      ? {
          height: '100v%',
          minHeight: '100%',
        }
      : {},
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent
);
