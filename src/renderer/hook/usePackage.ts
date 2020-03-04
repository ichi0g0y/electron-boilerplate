import { useSelector } from 'react-redux';

import { MyState } from '#/store/renderer';

/*-----------------------------------------------------------------------------*/
export const usePackage = () => {
  const { productName, description, license, homepage, version } = useSelector((state: MyState) => state.package);

  return {
    productName,
    description,
    license,
    homepage,
    version,
  };
};
