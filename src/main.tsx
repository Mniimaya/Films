// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './router/router.tsx';
import { RouterProvider } from 'react-router-dom';
import './scss/style.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);
