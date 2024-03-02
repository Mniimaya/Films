import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

type T_PARAMS = {
  genres: string;
  countries: string;
  year: string;
  rating: string;
};

export type T_FILTER_STATE = {
  isOpen: boolean;
  params: T_PARAMS;
};

const initialState: T_FILTER_STATE = {
  isOpen: false,
  params: {
    genres: '',
    countries: '',
    year: '',
    rating: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleShowFilter: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    updateParams: (state, action: PayloadAction<T_PARAMS>) => {
      state.params = { ...action.payload };
    },
    clearParams: (state) => {
      console.log(state);
      // Object.fromEntries(Object.entries(state.params).map(([key, value]) => [key, (value = '')]));
    },
  },
});

export const { toggleShowFilter } = filterSlice.actions;

export default filterSlice.reducer;
