import { Button } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
      path: '*',
      element: <>404</>, //TODO: make fallback page
    },
  ];
}

export default function AppRouter() {
  const router = createBrowserRouter(getRoutes());

  return <RouterProvider router={router} />;
}
