import headerReducer from './slises/headerSlice';
import searchReducer from './slises/searchSlice';
import filterReducer from './slises/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
