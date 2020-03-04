/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import { useCount, useHover, useTheme } from ':/hook';
import { Box, Flex, IconAndTextButton } from ':/view/atom';
import { AppMenu } from ':/view/molecule';

const App: React.FC = () => {
  const { current, currentGlobal } = useTheme();
  const { hover, setHoverTrue, setHoverFalse } = useHover();
  const { count, plusCount, minusCount } = useCount();

  return (
    <ThemeProvider theme={current}>
      <Global styles={currentGlobal} />
      <Flex id="root_container" flexDirection="row" minHeight="100vh" onMouseEnter={setHoverTrue} onMouseLeave={setHoverFalse}>
        <AppMenu hover={hover} />
        <Box marginTop="50px">
          <Flex flexDirection="row">
            <IconAndTextButton icon={faPlus} baseColor="#999999" text="+" onClick={plusCount} />
            <Box padding="1em">{count}</Box>
            <IconAndTextButton icon={faMinus} baseColor="#999999" text="-" onClick={minusCount} />
            <Box padding="1em" background={current.color.backgroundB}>
              Themed Div
            </Box>
            <Box border="solid 1px #00FF00" padding="1em" windowDragDisabled>
              no drag window here
            </Box>
          </Flex>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

export default hot(App);
