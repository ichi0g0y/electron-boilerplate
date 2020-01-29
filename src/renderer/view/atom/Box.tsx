import styled from '@emotion/styled';
import CSS from 'csstype';
import {
  alignSelf,
  AlignSelfProps,
  background,
  BackgroundProps,
  borders,
  BordersProps,
  bottom,
  BottomProps,
  color,
  display,
  DisplayProps,
  flex,
  FlexProps,
  fontSize,
  FontSizeProps,
  height,
  HeightProps,
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

type AppRegionProperty = 'no-drag' | 'drag';
export type BoxProps = AlignSelfProps &
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
  ZIndexProps & { color?: CSS.ColorProperty; cursor?: CSS.CursorProperty; userSelect?: CSS.UserSelectProperty; appRegion?: AppRegionProperty };

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
  },
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
    props.appRegion
      ? {
          '-webkit-app-region': `${props.appRegion} !important`,
        }
      : {},
  alignSelf,
  background,
  borders,
  color,
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
