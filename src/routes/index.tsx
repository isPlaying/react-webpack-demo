import { RouteObject } from 'react-router-dom';
import LazyWrapper from '@/components/LazyWrapper';

const ROUTER_CONFIG: RouteObject[] = [
  {
    path: '/',
    element: <h1>Home</h1>,
  },
  {
    path: '/demo',
    element: <LazyWrapper path="/Demo" />,
  },
  {
    path: '*',
    element: <>404 Not Found!</>,
  },
];

export default ROUTER_CONFIG;
