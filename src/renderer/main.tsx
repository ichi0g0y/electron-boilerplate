import 'react-hot-loader';
import 'tippy.js/dist/tippy.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '#/store/renderer';

import Main from './view/page/Main';

const render = (Component: React.FunctionComponent) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.body
  );
};

render(Main);
if (module.hot) {
  module.hot.accept('./view/page/Main', () => {
    render(require('./view/page/Main'));
  });
}
