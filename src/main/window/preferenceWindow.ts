import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import * as path from 'path';
import * as url from 'url';

export let preferenceWindow: BrowserWindow | undefined;

// windows bounds
const DEFAULT_WIDTH = 800;
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
  if (!preferenceWindow) return;

  // event: move
  preferenceWindow.on('move', () => {
    return;
  });

  // event: resize
  preferenceWindow.on('resize', () => {
    return;
  });

  // event: blur
  preferenceWindow.on('blur', () => {
    return;
  });

  // event: close
  preferenceWindow.on('close', (event: Electron.Event) => {
    return;
  });

  // event: closed
  preferenceWindow.on('closed', () => {
    preferenceWindow = undefined;
  });

  // event: ready-to-show
  preferenceWindow.once('ready-to-show', () => {
    if (!preferenceWindow) return;
    preferenceWindow.show();
  });
};

/*-----------------------------------------------------------------------------*/
export const createPreferenceWindow = async () => {
  if (preferenceWindow) {
    preferenceWindow.show();
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
    transparent: false,
    frame: true,
    titleBarStyle: 'hidden',
    minimizable: false,
    maximizable: false,
    alwaysOnTop: false,
    show: false,
    modal: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      webviewTag: false,
    },
  };
  preferenceWindow = new BrowserWindow(options);

  // load html
  let rendererUrl = '';
  if (!app.isPackaged) {
    rendererUrl = 'http://localhost:3000/preference.html';
    preferenceWindow.webContents.openDevTools();
  } else {
    rendererUrl = url.format({
      pathname: path.join(__dirname, 'preference.html'),
      protocol: 'file:',
      slashes: true,
    });
  }

  await preferenceWindow.loadURL(rendererUrl);

  applyEventHandlers();

  preferenceWindow.show();
};
