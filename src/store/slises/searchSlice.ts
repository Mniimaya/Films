import { IFilterMovie } from './../../TYPES/TYPES';
import { createSlice } from '@reduxjs/toolkit/react';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchData: IFilterMovie | null;
  isOpen: boolean;
  value: string;
}

const initialState: SearchState = {
  searchData: null,
  isOpen: false,
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<IFilterMovie>) => {
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
