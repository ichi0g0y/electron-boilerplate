import { css } from '@emotion/core';

import { MyColor } from '../type';

export const globalBase = css`
  html,
  body {
    -webkit-app-region: no-drag;
    font-size: 16px;
    font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
    height: 100%;
    padding: 0;
    margin: 0;
    line-height: 1.4285em;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.4em;
    margin-bottom: 0.6em;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
`;

export const generateGlobal = (color: MyColor) => {
  return css`
    ${globalBase}

    body {
      background: ${color.backgroundA};
      color: ${color.textA};
    }
  `;
};
