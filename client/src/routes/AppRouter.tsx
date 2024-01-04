import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './homepage/HomePage';

export type AppRouteType = {
  path: string;
  element?: JSX.Element;
  children?: AppRouteType[];
};

function getRoutes() {
  return [
    {
      path: '',
      element: <Layout />, //TODO: make page layout
      children: [
        {
          path: '',
          element: <HomePage />,
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
