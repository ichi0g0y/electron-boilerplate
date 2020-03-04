import { EnhancedStore } from '@reduxjs/toolkit';
import { ipcMain } from 'electron';

export const replayActionMain = (store: EnhancedStore) => {
  global.getReduxState = () => JSON.stringify(store.getState());

  ipcMain.on('redux-action', (event, payload) => {
    if (payload.meta && payload.meta.scope && payload.meta.scope === 'remote') payload.meta.scope = 'local';
    store.dispatch(payload);
  });
};
