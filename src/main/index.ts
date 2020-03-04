import '::/bootstrap';

import { app } from 'electron';

import { generateAppTray } from '::/misc/appTray';
import { parseCommandLine } from '::/misc/commandLine';
import { loadConfigAfterReady } from '::/misc/config';
import { createTranslateWindow } from '::/window/mainWindow';

export let willQuit = false;

/*-----------------------------------------------------------------------------*/
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    console.debug('app -> second-instance');
    parseCommandLine(commandLine);
  });

  app.on('ready', async () => {
    console.debug('app -> ready');
    loadConfigAfterReady();
    parseCommandLine(process.argv);
    generateAppTray();
    createTranslateWindow();
  });

  app.on('before-quit', () => {
    console.debug('app -> before-quit');
    willQuit = true;
  });

  app.on('will-quit', () => {
    console.debug('app -> will-quit');
  });

  app.on('quit', async () => {
    console.debug('app -> quit');
  });

  app.on('window-all-closed', () => {
    console.debug('app -> window-all-closed');
  });
}
