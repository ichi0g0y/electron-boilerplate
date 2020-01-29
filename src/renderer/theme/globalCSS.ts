import { css } from '@emotion/core';

export const globalLightCSS = css`
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }

  body {
    -webkit-app-region: drag;
    background: rgba(255, 255, 255, 255);
    font-size: medium;
  }

  .ui.placeholder,
  .ui.placeholder .image.header:after,
  .ui.placeholder .line,
  .ui.placeholder .line:after,
  .ui.placeholder > :before {
    background-color: #f3f3f3;
  }
`;

export const globalDarkCSS = css`
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }

  body {
    -webkit-app-region: drag;
    background: rgba(34, 34, 34, 255);
    font-size: medium;
  }

  .ui.placeholder,
  .ui.placeholder .image.header:after,
  .ui.placeholder .line,
  .ui.placeholder .line:after,
  .ui.placeholder > :before {
    background-color: #2a2a2a;
  }
`;
