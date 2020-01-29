export const isMainProcess = () => {
  if (!process) return false;
  if (!process.type) return false;
  return process.type === 'browser';
};
