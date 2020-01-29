import { app } from 'electron';
import log from 'electron-log';

process.on('uncaughtException', err => {
  log.error('electron:event:uncaughtException');
  log.error(err);
  log.error(err.stack);
  app.quit();
});
