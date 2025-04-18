import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Generator from '@/pages/generator';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/features',
    element: <div>Features</div>
  },
  {
    path: '/template',
    element: <div>Template</div>
  },
  {
    path: '/docs',
    element: <div>Docs</div>
  },
  {
    path: '/faq',
    element: <div>FAQ</div>
  },
  {
    path: '/blog',
    element: <div>Blog</div>
  },
  {
    path: '/contact',
    element: <div>Contact</div>
  },
  {
    path: '/generator',
    element: <Generator />
  },
  {
    path: '/about',
    element: <div>About</div>
  },
  {
    path: '/privacy',
    element: <div>Privacy</div>
  }
]);
