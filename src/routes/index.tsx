import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.Home })));
const Products = lazy(() => import('../pages/Products').then(module => ({ default: module.Products })));
const Recipes = lazy(() => import('../pages/Recipes').then(module => ({ default: module.Recipes })));
const About = lazy(() => import('../pages/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('../pages/Contact').then(module => ({ default: module.Contact })));

// Dynamic routes configuration
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ':productId',
        element: <Products />,
      },
    ],
  },
  {
    path: '/recipes',
    children: [
      {
        index: true,
        element: <Recipes />,
      },
      {
        path: ':recipeId',
        element: <Recipes />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
    </div>,
  },
];
