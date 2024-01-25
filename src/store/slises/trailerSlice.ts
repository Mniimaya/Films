import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TrailerState {
  isOpenTrailer: boolean;
  url: string;
}

const initialState: TrailerState = {
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
