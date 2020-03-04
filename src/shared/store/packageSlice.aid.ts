export type OnUpdateEvent = (active: boolean, decorator: string[], key: string, readFromClipboard: boolean) => void;
export let onUpdate: OnUpdateEvent;
export const setOnUpdate = (func: OnUpdateEvent) => (onUpdate = func);

/*-----------------------------------------------------------------------------*/
export interface MyPackageState {
  productName: string;
  description: string;
  license: string;
  homepage: string;
  version: string;
}

/*-----------------------------------------------------------------------------*/
export let initialState: MyPackageState = {
  productName: '',
  description: '',
  license: '',
  homepage: '',
  version: '',
};

/*-----------------------------------------------------------------------------*/
export const setInitialState = (state: MyPackageState) => {
  initialState = {
    productName: state.productName,
    description: state.description,
    license: state.license,
    homepage: state.homepage,
    version: state.version,
  };
};
