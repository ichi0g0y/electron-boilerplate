/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { shell } from 'electron';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import Logo from '@/logo.png';

import { useHover, useIPC, usePackage, useTheme } from ':/hook';
import { Flex } from ':/view/atom';
import { Close } from ':/view/molecule';

const App: React.FC = () => {
  const { current, currentGlobal } = useTheme();
  const { hover, setHoverTrue, setHoverFalse } = useHover();
  const { productName, description, license, homepage, version } = usePackage();
  const { closeAbout } = useIPC();
  return (
    <ThemeProvider theme={current}>
      <Global styles={currentGlobal} />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop="2em"
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}
      >
        <Close hover={hover} handleMouseEnter={setHoverTrue} onClick={closeAbout} />
        <img src={Logo} width="200px" onClick={() => shell.openExternal(homepage)} />
        <h3 style={{ marginTop: '0.5em', marginBottom: '0.2em' }}>{productName}</h3>
        <span style={{ paddingBottom: '0.5em' }}>{version}</span>
        <span>{description}</span>
        <span>{license}</span>
      </Flex>
    </ThemeProvider>
  );
};

export default hot(App);
