import openAboutWindow from 'about-window';
import { app } from 'electron';
import fs from 'fs';
import path from 'path';

const APP_LOGO_PATH = path.join(__dirname, 'static', 'logo.png');
const ABOUT_DIR_PATH = path.join(__dirname, 'about');
const PACKAGE_JSON = path.join(__dirname, '..', 'package.json');

const packageConfig = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf8'));

export const createAboutWindow = () =>
  openAboutWindow({
    about_page_dir: ABOUT_DIR_PATH,
    icon_path: APP_LOGO_PATH,
    product_name: packageConfig.productName,
    copyright: packageConfig.license,
    homepage: packageConfig.homepage,
    description: packageConfig.description,
    use_version_info: false,
    open_devtools: !app.isPackaged,
    win_options: {
      titleBarStyle: 'hidden',
      minimizable: false,
      maximizable: false,
      alwaysOnTop: false,
      modal: true,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webviewTag: false,
      },
    },
  });
