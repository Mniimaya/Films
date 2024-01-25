import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filterState {
  isOpen: boolean;
}

const initialState: filterState = {
  isOpen: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleShowFilter: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleShowFilter } = filterSlice.actions;

export default filterSlice.reducer;
