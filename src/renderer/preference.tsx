import 'react-hot-loader';
import 'tippy.js/dist/tippy.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '#/store/renderer';

import Preference from './view/page/Preference';

const render = (Component: React.FunctionComponent) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.body
  );
};

render(Preference);
if (module.hot) {
  module.hot.accept('./view/page/Preference', () => {
    render(require('./view/page/Preference'));
  });
}
