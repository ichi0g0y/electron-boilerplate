import fs from 'fs';
import path from 'path';

import { setInitialState } from '#/store/packageSlice.aid';

const PACKAGE_JSON = path.join(__dirname, '..', 'package.json');

const packageConfig = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf8'));

setInitialState({
  productName: packageConfig.productName,
  description: packageConfig.description,
  license: packageConfig.license,
  homepage: packageConfig.homepage,
  version: packageConfig.version,
});
