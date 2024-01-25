import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import FilmPage from '../pages/FilmPage/FilmPage';
import RegistrationPage from '../pages/AuthPages/RegistrationPage/RegistrationPage';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/AuthPages/LoginPage/LoginPage';
import SeriesPage from '../pages/SeriesPage/SeriesPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'film/:filmId',
        element: <FilmPage />,
      },
      {
        path: 'series/:seriesId',
        element: <SeriesPage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/registaration',
        element: <RegistrationPage />,
      },
      {
        path: '/auth/login',
        element: <LoginPage />,
      },
    ],
  },
]);
