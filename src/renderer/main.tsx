import 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '@/store/renderer';

import Main from './view/page/Main';

const render = (Component: React.FunctionComponent) => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement
  );
};

render(Main);
if (module.hot) {
  module.hot.accept('./view/page/Main', () => {
    render(require('./view/page/Main'));
  });
}
