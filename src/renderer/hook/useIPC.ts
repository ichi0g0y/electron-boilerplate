import { ipcRenderer } from 'electron';
import { useCallback } from 'react';

export const useIPC = () => {
  const openAbout = useCallback(() => {
    ipcRenderer.send('openAbout');
  }, []);

  const closeAbout = useCallback(() => {
    ipcRenderer.send('closeAbout');
  }, []);

  const openPreference = useCallback(() => {
    ipcRenderer.send('openPreference');
  }, []);

  const closePreference = useCallback(() => {
    ipcRenderer.send('closePreference');
  }, []);

  const quitApp = useCallback(() => {
    ipcRenderer.send('quitApp');
  }, []);

  return {
    openAbout,
    closeAbout,
    openPreference,
    closePreference,
    quitApp,
  };
};
