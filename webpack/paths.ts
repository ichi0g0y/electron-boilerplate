import path from 'path';

export const ROOT = path.resolve(__dirname, '../');

const resolvePath = (relativePath: string) => path.resolve(ROOT, relativePath);

export const SRC_ROOT = resolvePath('src');
export const SRC_SHARED = path.resolve(SRC_ROOT, 'shared');
export const SRC_MAIN = path.resolve(SRC_ROOT, 'main');
export const SRC_RENDERER = path.resolve(SRC_ROOT, 'renderer');
export const SRC_SEMANTIC_UI = path.resolve(ROOT, 'semantic-ui');
export const OUTPUT = resolvePath('app');
export const NODE_MODULES = resolvePath('node_modules');

export const TS_CONFIG = path.resolve(ROOT, 'tsconfig.json');
