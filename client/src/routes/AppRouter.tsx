import { Button } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TestPage from './TestPage';
import HomePage from './HomePage';

export interface AppRouteType {
  path: string;
  element?: JSX.Element;
  children?: AppRouteType[];
}

function getRoutes() {
  return [
    {
      path: '',
      element: <Button variant="contained">Test</Button>, //TODO: make page layout
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
      element: <HomePage></HomePage>,
    },
  ];
}

export default function AppRouter() {
  const router = createBrowserRouter(getRoutes());

  return <RouterProvider router={router} />;
}
