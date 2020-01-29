import stringToEnum from '@/lib/stringToEnum';

export type OnUpdateEvent = (name: MyThemeName) => void;
export let onUpdate: OnUpdateEvent;
export const setOnUpdate = (func: OnUpdateEvent) => (onUpdate = func);

/*-----------------------------------------------------------------------------*/
export const MyThemeName = stringToEnum(['light', 'dark']);
export type MyThemeName = keyof typeof MyThemeName;
export interface MyThemeState {
  name: MyThemeName;
}

/*-----------------------------------------------------------------------------*/
export let initialState: MyThemeState = {
  name: 'dark',
};

/*-----------------------------------------------------------------------------*/
export const setInitialState = (state: MyThemeState) => {
  initialState = {
    name: state.name,
  };
};
