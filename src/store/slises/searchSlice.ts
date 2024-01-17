import { IFilterMovie } from './../../TYPES/TYPES';
import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchValue: IFilterMovie;
  isOpen: boolean;
  value: string;
}

const initialState: SearchState = {
  searchValue: {},
  isOpen: false,
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<IFilterMovie>) => {
      state.searchValue = action.payload;
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
