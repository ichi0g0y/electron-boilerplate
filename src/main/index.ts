import '::/bootstrap';

import { app } from 'electron';

import { generateAppTray } from '::/misc/appTray';
import { loadConfigAfterReady } from '::/misc/config';
import { createMainWindow } from '::/window/mainWindow';

export let willQuit = false;

/*-----------------------------------------------------------------------------*/
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    console.info('it was started multiple times!');
  });

  app.on('ready', async () => {
    loadConfigAfterReady();
    generateAppTray();
    createMainWindow();
  });

  app.on('before-quit', () => {
    willQuit = true;
  });

  app.on('quit', async () => {
    console.info('quit app!');
  });

  app.on('window-all-closed', () => {
    console.info('window all closed :)');
  });
}
