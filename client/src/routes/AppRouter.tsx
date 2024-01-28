import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './homepage/HomePage';
import SearchPage from './searchpage/SearchPage';
import ProfilePage from './profilepage/ProfilePage';
import UserCartPage from './usercartpage/UserCartPage';

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
          path: 'profile/:id',
          element: <ProfilePage />,
        },
        {
          path: 'cart/:id',
          element: <UserCartPage />,
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

  return <RouterProvider router={router} />;
}
