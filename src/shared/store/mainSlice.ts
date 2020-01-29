import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './mainSlice.aid';

/*-----------------------------------------------------------------------------*/
const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = slice.actions;
export default slice.reducer;
