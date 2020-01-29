export type OnUpdateEvent = (sourceLanguage: string, targetLanguage: string) => void;
export let onUpdate: OnUpdateEvent;
export const setOnUpdate = (func: OnUpdateEvent) => (onUpdate = func);

/*-----------------------------------------------------------------------------*/
export interface MyMainState {
  count: number;
}

/*-----------------------------------------------------------------------------*/
export let initialState: MyMainState = {
  count: 0,
};

/*-----------------------------------------------------------------------------*/
export const setInitialState = (state: MyMainState) => {
  initialState = {
    count: state.count,
  };
};
