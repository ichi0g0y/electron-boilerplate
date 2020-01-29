import { ipcRenderer } from 'electron';
import { useCallback } from 'react';

export const useIPC = () => {
  const openAbout = useCallback(() => {
    ipcRenderer.send('openAbout');
  }, []);

  const openPreference = useCallback(() => {
    ipcRenderer.send('openPreference');
  }, []);

  const quitApp = useCallback(() => {
    ipcRenderer.send('quitApp');
  }, []);

  return {
    openAbout,
    openPreference,
    quitApp,
  };
};
