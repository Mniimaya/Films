import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import FilmPage from '../pages/FilmPage/FilmPage';
import RegistrationPage from '../pages/AuthPages/RegistrationPage/RegistrationPage';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/AuthPages/LoginPage/LoginPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CollectionPage from '../pages/CollectionPage/CollectionPage';
import ActorPage from '../pages/ActorPage/ActorPage';
import CabinetPage from '../pages/CabinetPage/CabinetPage';

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
        path: 'catalog/:catalogId',
        element: <CatalogPage />,
      },
      {
        path: 'collection/:collectionId',
        element: <CollectionPage />,
      },
      {
        path: 'actor/:actorId',
        element: <ActorPage />,
      },
      {
        path: 'cabinet',
        element: <CabinetPage />,
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
