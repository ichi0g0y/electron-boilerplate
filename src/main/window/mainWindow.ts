import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import * as path from 'path';
import * as url from 'url';

import isMac from '#/lib/isMac';

import { configMainWindow } from '::/misc/config';

import { willQuit } from '../';

export let mainWindow: BrowserWindow | undefined;
export let isTrayPosition = false;

// for debug
const installExtensions = async () => {
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];
  return Promise.all(extensions.map(extention => installExtension(extention, forceDownload))).catch(console.log);
};

/*-----------------------------------------------------------------------------*/
// event handler
const applyEventHandlers = () => {
  if (!mainWindow) return;

  // event: move
  mainWindow.on('move', () => {
    if (!mainWindow) return;
    if (isTrayPosition) {
      console.debug('main window -> move but skipped');
      isTrayPosition = false;
      return;
    }
    console.debug('main window -> move');
    configMainWindow.set('bounds', mainWindow.getBounds());
  });

  // event: resize
  mainWindow.on('resize', () => {
    if (!mainWindow) return;
    console.debug('main window -> resize');
    configMainWindow.set('bounds', mainWindow.getBounds());
  });

  // event: blur
  mainWindow.on('blur', () => {
    if (!mainWindow) return;
    console.debug('main window -> blur');
    mainWindow.hide();
  });

  // event: close
  mainWindow.on('close', (event: Electron.Event) => {
    console.debug('main window -> close');
    if (mainWindow) mainWindow.hide();
    if (!willQuit) event.preventDefault();
  });

  // event: closed
  mainWindow.on('closed', () => {
    console.debug('main window -> closed');
    mainWindow = undefined;
  });
};

/*-----------------------------------------------------------------------------*/
export const createTranslateWindow = async () => {
  if (mainWindow) {
    mainWindow.show();
    return;
  }

  if (!app.isPackaged) {
    await installExtensions();
  }

  // create window
  const { width, height, x, y } = configMainWindow.get('bounds');
  const options: Electron.BrowserWindowConstructorOptions = {
    x,
    y,
    width,
    height,
    minWidth: 320,
    minHeight: 320,
    transparent: isMac(),
    frame: false,
    resizable: true,
    maximizable: false,
    minimizable: false,
    closable: true,
    alwaysOnTop: true,
    show: false,
    hasShadow: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      webviewTag: false,
    },
  };
  mainWindow = new BrowserWindow(options);

  // load html
  let rendererUrl = '';
  if (!app.isPackaged) {
    rendererUrl = 'http://localhost:3100/main.html';
    mainWindow.webContents.openDevTools();
  } else {
    rendererUrl = url.format({
      pathname: path.join(__dirname, 'main.html'),
      protocol: 'file:',
      slashes: true,
    });
  }

  await mainWindow.loadURL(rendererUrl);

  applyEventHandlers();
};

/*-----------------------------------------------------------------------------*/
export const openTranslateWindow = (bounds?: Electron.Rectangle) => {
  if (!mainWindow) return;
  console.debug('openTranslateWindow');
  console.debug(JSON.stringify(bounds));
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    if (bounds) mainWindow.setBounds(bounds);
    mainWindow.show();
  }
};

/*-----------------------------------------------------------------------------*/
export const openTranslateWindowWithUsual = () => {
  if (!mainWindow) return;
  console.debug('openTranslateWindowWithUsual');
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    isTrayPosition = false;
    const bounds = configMainWindow.get('bounds');
    openTranslateWindow(bounds);
  }
};

/*-----------------------------------------------------------------------------*/
export const openTranslateWindowWithTrayPosition = (bounds: Electron.Rectangle) => {
  if (!mainWindow) return;
  console.debug('openTranslateWindowWithTrayPosition');
  console.debug(JSON.stringify(bounds));
  if (mainWindow.isVisible() || !isMac()) {
    mainWindow.hide();
  } else if (!isMac()) {
    openTranslateWindowWithUsual();
  } else {
    isTrayPosition = true;
    const curBounds = mainWindow.getBounds();
    const x = bounds.x - Math.trunc(curBounds.width / 2 + bounds.width / 2);
    const y = bounds.y + bounds.height + 20;
    openTranslateWindow({ ...curBounds, x, y });
  }
};
