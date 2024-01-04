import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import TestPage from './TestPage';
import HomePage from './HomePage';

export type AppRouteType = {
  path: string;
  element?: JSX.Element;
  children?: AppRouteType[];
};

function getRoutes() {
  return [
    {
      path: '',
      element: <Link to="test">Test</Link>, //TODO: make page layout
      children: [],
    },
    {
      path: 'test',
      element: <TestPage />,
    },
    {
      path: '*',
      element: <>404</>, //TODO: make fallback page
    },
    {
      path: 'home',
      element: <HomePage />,
    },
  ];
}

export default function AppRouter() {
  const router = createBrowserRouter(getRoutes());

  return <RouterProvider router={router} />;
}
