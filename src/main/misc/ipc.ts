import { app, ipcMain } from 'electron';

import { createAboutWindow } from '::/window/aboutWindow';
import { createPreferenceWindow } from '::/window/preferenceWindow';

ipcMain.on('openAbout', () => {
  createAboutWindow();
});

ipcMain.on('openPreference', () => {
  createPreferenceWindow();
});

ipcMain.on('quitApp', () => {
  app.quit();
});
