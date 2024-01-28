import { T_FILTERMOVIE } from './../../TYPES/TYPES';
import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export type T_SEARCH_STATE = {
  searchData: T_FILTERMOVIE | null;
  isOpen: boolean;
  value: string;
};

const initialState: T_SEARCH_STATE = {
  searchData: null,
  isOpen: false,
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<T_FILTERMOVIE>) => {
      state.searchData = action.payload;
    },
    toggleSearch: (state, action: PayloadAction<boolean>) => {
      state.isOpen = !action.payload;
    },
    handlerSearch: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    updateValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateData, toggleSearch, handlerSearch, updateValue } = searchSlice.actions;

export default searchSlice.reducer;
