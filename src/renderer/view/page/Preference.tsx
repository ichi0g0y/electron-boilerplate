import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import { useSwapTheme } from ':/hook/useSwapTheme';
import { useTheme } from ':/hook/useTheme';
import { Flex } from ':/view/atom/Flex';
import { Theme } from ':/view/organism/Theme';

const App: React.FC = () => {
  useSwapTheme();
  const { current, currentGlobalCSS } = useTheme();

  return (
    <ThemeProvider theme={current}>
      <Flex flexDirection="column" fullHeight={true} paddingTop="1em">
        <Global styles={currentGlobalCSS} />
        <Theme />
      </Flex>
    </ThemeProvider>
  );
};

export default hot(App);
