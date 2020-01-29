import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, MyThemeName, onUpdate } from './themeSlice.aid';

/*-----------------------------------------------------------------------------*/
const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<MyThemeName>) => {
      state.name = action.payload;
      if (!onUpdate) return;
      onUpdate(action.payload);
    },
  },
});

export const { setTheme } = slice.actions;
export default slice.reducer;
