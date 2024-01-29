import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export type T_LOADING = {
  isLoading: boolean;
};

const initialState: T_LOADING = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    apdateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { apdateIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
