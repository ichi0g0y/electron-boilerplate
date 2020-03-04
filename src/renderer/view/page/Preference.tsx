/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import { useHover, useIPC, useTheme } from ':/hook';
import { Flex } from ':/view/atom';
import { Close } from ':/view/molecule';
import { Theme } from ':/view/organism';

const App: React.FC = () => {
  const { current, currentGlobal } = useTheme();
  const { hover, setHoverTrue, setHoverFalse } = useHover();
  const { closePreference } = useIPC();

  return (
    <ThemeProvider theme={current}>
      <Global styles={currentGlobal} />
      <Flex
        flexDirection="column"
        paddingTop="2em"
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}
        css={css`
          overflow-y: scroll;
          transform: translateZ(0);
          min-height: 500px;
        `}
      >
        <Close hover={hover} handleMouseEnter={setHoverTrue} onClick={closePreference} />
        <Theme />
      </Flex>
    </ThemeProvider>
  );
};

export default hot(App);
