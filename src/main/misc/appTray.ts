import { Tray } from 'electron';
import path from 'path';

import isMac from '#/lib/isMac';

import { openTranslateWindowWithTrayPosition, openTranslateWindowWithUsual } from '::/window/mainWindow';

const APP_TRAYICON_PATH = isMac() ? path.join(__dirname, 'static', 'trayTemplate.png') : path.join(__dirname, 'static', 'tray.ico');

let appTray: Tray | undefined = undefined;
export const getAppTray = () => appTray;

/*-----------------------------------------------------------------------------*/
export const generateAppTray = () => {
  appTray = new Tray(APP_TRAYICON_PATH);
  appTray.setToolTip('electron-boilerplate');
  appTray.setIgnoreDoubleClickEvents(true);

  appTray.on('click', (event, bounds) => openTranslateWindowWithUsual());
  appTray.on('right-click', (event, bounds) => openTranslateWindowWithTrayPosition(bounds));

  return appTray;
};
