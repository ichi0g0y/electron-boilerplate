import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import path from 'path';
import * as url from 'url';

import isMac from '#/lib/isMac';

export let aboutWindow: BrowserWindow | undefined;

// windows bounds
const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 400;

// for debug
const installExtensions = async () => {
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];
  return Promise.all(extensions.map(extention => installExtension(extention, forceDownload))).catch(console.log);
};

/*-----------------------------------------------------------------------------*/
// event handler
const applyEventHandlers = () => {
  if (!aboutWindow) return;

  // event: move
  aboutWindow.on('move', () => {
    return;
  });

  // event: resize
  aboutWindow.on('resize', () => {
    return;
  });

  // event: blur
  aboutWindow.on('blur', () => {
    return;
  });

  // event: close
  aboutWindow.on('close', (event: Electron.Event) => {
    return;
  });

  // event: closed
  aboutWindow.on('closed', () => {
    aboutWindow = undefined;
  });

  // event: ready-to-show
  aboutWindow.once('ready-to-show', () => {
    if (!aboutWindow) return;
    aboutWindow.show();
  });
};

/*-----------------------------------------------------------------------------*/
export const createAboutWindow = async () => {
  if (aboutWindow) {
    aboutWindow.show();
    return;
  }

  if (!app.isPackaged) {
    await installExtensions();
  }

  // create window
  const options: BrowserWindowConstructorOptions = {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    minWidth: DEFAULT_WIDTH,
    minHeight: DEFAULT_HEIGHT,
    transparent: isMac(),
    frame: false,
    resizable: false,
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
  aboutWindow = new BrowserWindow(options);

  // load html
  let rendererUrl = '';
  if (!app.isPackaged) {
    rendererUrl = 'http://localhost:3100/about.html';
    aboutWindow.webContents.openDevTools();
  } else {
    rendererUrl = url.format({
      pathname: path.join(__dirname, 'about.html'),
      protocol: 'file:',
      slashes: true,
    });
  }

  await aboutWindow.loadURL(rendererUrl);

  applyEventHandlers();

  aboutWindow.show();
};
