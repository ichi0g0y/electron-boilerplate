import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import mainReducer from './mainSlice';
import { MyMainState } from './mainSlice.aid';
import themeReducer from './themeSlice';
import { MyThemeState } from './themeSlice.aid';

const { forwardToMain, replayActionRenderer, getInitialStateRenderer } = require('electron-redux');

const initialState = getInitialStateRenderer();

/*-----------------------------------------------------------------------------*/
export interface MyState {
  theme: MyThemeState;
  main: MyMainState;
}
const rootReducer = combineReducers({
  theme: themeReducer,
  main: mainReducer,
});

/*-----------------------------------------------------------------------------*/
const middlewares = [forwardToMain, ...getDefaultMiddleware({ thunk: false })];
const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  preloadedState: initialState,
});

replayActionRenderer(store);

export default store;
