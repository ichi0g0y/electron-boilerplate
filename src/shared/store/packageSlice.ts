import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './packageSlice.aid';

/*-----------------------------------------------------------------------------*/
const slice = createSlice({
  name: 'package',
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
