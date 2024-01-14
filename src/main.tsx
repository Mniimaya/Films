// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './router/router.tsx';
import { RouterProvider } from 'react-router-dom';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={Router} />
  // </React.StrictMode>
);
