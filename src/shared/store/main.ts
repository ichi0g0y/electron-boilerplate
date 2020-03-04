import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import mainReducer from './mainSlice';
import { MyMainState } from './mainSlice.aid';
import packageReducer from './packageSlice';
import { MyPackageState } from './packageSlice.aid';
import { replayActionMain } from './replayActionMain';
import themeReducer from './themeSlice';
import { MyThemeState } from './themeSlice.aid';

const { forwardToRenderer } = require('electron-redux');

/*-----------------------------------------------------------------------------*/
export interface MyState {
  package: MyPackageState;
  theme: MyThemeState;
  main: MyMainState;
}
const rootReducer = combineReducers({
  package: packageReducer,
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
