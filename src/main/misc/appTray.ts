import { Tray } from 'electron';
import path from 'path';

import { openMainWindowWithTrayPosition, openMainWindowWithUsual } from '::/window/mainWindow';

const APP_TRAYICON_PATH = path.join(__dirname, 'static', 'trayTemplate.png');

let appTray: Tray | undefined = undefined;
export const getAppTray = () => appTray;

/*-----------------------------------------------------------------------------*/
export const generateAppTray = () => {
  appTray = new Tray(APP_TRAYICON_PATH);
  appTray.setToolTip('electron-boilerplate');
  appTray.setIgnoreDoubleClickEvents(true);

  appTray.on('click', (event, bounds) => openMainWindowWithUsual());
  appTray.on('right-click', (event, bounds) => openMainWindowWithTrayPosition(bounds));

  return appTray;
};
