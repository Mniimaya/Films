import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export type T_HEADER_STATE = {
  isOpen: boolean;
};

const initialState: T_HEADER_STATE = {
  isOpen: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
      if (state.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    },
  },
});

export const { toggle } = headerSlice.actions;

export default headerSlice.reducer;
