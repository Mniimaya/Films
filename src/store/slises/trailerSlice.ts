import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export type T_TRAILER_STATE = {
  isOpenTrailer: boolean;
  url: string;
};

const initialState: T_TRAILER_STATE = {
  isOpenTrailer: false,
  url: '',
};

const TrailerSlice = createSlice({
  name: 'trailer',
  initialState,
  reducers: {
    handlerShowTrailer: (state, action: PayloadAction<boolean>) => {
      state.isOpenTrailer = action.payload;
    },
    updateUrlTrailer: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { handlerShowTrailer, updateUrlTrailer } = TrailerSlice.actions;

export default TrailerSlice.reducer;
