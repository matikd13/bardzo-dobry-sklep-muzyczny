import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import TestPage from './TestPage';

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
  ];
}

export default function AppRouter() {
  const router = createBrowserRouter(getRoutes());

  return <RouterProvider router={router} />;
}
