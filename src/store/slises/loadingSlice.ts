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
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { updateIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
