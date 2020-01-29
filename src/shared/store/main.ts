import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import mainReducer from './mainSlice';
import { MyMainState } from './mainSlice.aid';
import { replayActionMain } from './replayActionMain';
import themeReducer from './themeSlice';
import { MyThemeState } from './themeSlice.aid';

const { forwardToRenderer } = require('electron-redux');

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
const middlewares = [...getDefaultMiddleware({ thunk: false }), forwardToRenderer];
const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

replayActionMain(store);

export default store;
