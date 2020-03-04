import { app, ipcMain } from 'electron';

import { aboutWindow, createAboutWindow } from '::/window/aboutWindow';
import { createPreferenceWindow, preferenceWindow } from '::/window/preferenceWindow';

ipcMain.on('openAbout', () => {
  console.debug('ipc - openAbout');
  createAboutWindow();
});

ipcMain.on('closeAbout', () => {
  console.debug('ipc - closeAbout');
  if (!aboutWindow) return;
  aboutWindow.close();
});

ipcMain.on('openPreference', () => {
  console.debug('ipc - openPreference');
  createPreferenceWindow();
});

ipcMain.on('closePreference', () => {
  console.debug('ipc - closePreference');
  if (!preferenceWindow) return;
  preferenceWindow.close();
});

ipcMain.on('quitApp', () => {
  console.debug('ipc - quitApp');
  app.quit();
});
