import headerReducer from './slises/headerSlice';
import searchReducer from './slises/searchSlice';
import filterReducer from './slises/filterSlice';
import trailerReducer from './slises/trailerSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    search: searchReducer,
    filter: filterReducer,
    trailer: trailerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
