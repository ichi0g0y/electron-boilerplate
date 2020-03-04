import 'react-hot-loader';
import 'tippy.js/dist/tippy.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '#/store/renderer';

import About from './view/page/About';

const render = (Component: React.FunctionComponent) => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement
  );
};

render(About);
if (module.hot) {
  module.hot.accept('./view/page/About', () => {
    render(require('./view/page/About'));
  });
}
