/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'semantic-ui-react';

import { useCount } from ':/hook/useCount';
import { useHover } from ':/hook/useHover';
import { useSwapTheme } from ':/hook/useSwapTheme';
import { useTheme } from ':/hook/useTheme';

import { Box } from '../atom/Box';
import { Flex } from '../atom/Flex';
import { AppMenu } from '../molecule/AppMenu';

const App: React.FC = () => {
  useSwapTheme();
  const { current, currentGlobalCSS } = useTheme();
  const { hover, setHoverFalse, setHoverTrue } = useHover();
  const { count, plusCount, minusCount } = useCount();

  return (
    <ThemeProvider theme={current}>
      <Flex flexDirection="row" minHeight="100vh" padding="1em" onMouseEnter={setHoverTrue} onMouseLeave={setHoverFalse}>
        <Global styles={currentGlobalCSS} />
        <AppMenu hover={hover} handleMouseEnter={setHoverTrue} />
        <Box marginTop="50px">
          <Flex flexDirection="row">
            <Button onClick={plusCount}>+</Button>
            <Box padding="1em">{count}</Box>
            <Button onClick={minusCount}>-</Button>
            <Box padding="1em" background={current.color.dummy}>
              Themed Div
            </Box>
            <Box border="solid 1px #00FF00" padding="1em" appRegion="no-drag">
              no drag window here
            </Box>
          </Flex>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

export default hot(App);
