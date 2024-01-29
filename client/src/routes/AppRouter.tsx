import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Layout from './layouts/Layout';
import HomePage from './homepage/HomePage';
import SearchPage from './searchpage/SearchPage';
import ProfilePage from './profilepage/ProfilePage';
import UserCartPage from './usercartpage/UserCartPage';
import OrderPage from './OrderPage';
import { useUserContext } from '@utils/auth/UserContext';

export type AppRouteType = {
  path: string;
  element?: JSX.Element;
  children?: AppRouteType[];
};

function getRoutes() {
  return [
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'search',
          element: <SearchPage />,
        },
        {
          path: 'profile',
          element: <ProfilePage />,
        },
        {
          path: 'cart',
          element: <UserCartPage />,
        },
        {
          path: 'order/:id',
          element: <OrderPage />,
        },
      ],
    },
    {
      path: '*',
      element: <>404</>, //TODO: make fallback page
    },
  ];
}

export default function AppRouter() {
  const router = createBrowserRouter(getRoutes());
  const { loading } = useUserContext();

  return loading ? <CircularProgress /> : <RouterProvider router={router} />;
}
