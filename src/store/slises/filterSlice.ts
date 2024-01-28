import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export type T_FILTER_STATE = {
  isOpen: boolean;
};

const initialState: T_FILTER_STATE = {
  isOpen: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleShowFilter: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleShowFilter } = filterSlice.actions;

export default filterSlice.reducer;
